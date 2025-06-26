import Stripe from 'stripe'
import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { sendEmail } from '~/server/utils/sendEmail'

const stripe = new Stripe(process.env.STRIPE_SECRET)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export default defineEventHandler(async (event) => {
  const sig = event.node.req.headers['stripe-signature']
  const body = await readRawBody(event)
  // const userKey = await getUserOrGuestId(event, adminAuth)

  let stripeEvent

  try {
    stripeEvent = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    console.error('Webhook error:', err.message)
    return { statusCode: 400, error: 'Invalid signature' }
  }

  if (stripeEvent.type === 'payment_intent.succeeded') {
    const paymentIntent = stripeEvent.data.object

    console.log(event.context.user, 'user')

    if (!paymentIntent.metadata || !paymentIntent.metadata.items) {
      console.error('Missing metadata in payment intent:', paymentIntent)
      return { statusCode: 400, error: 'Invalid metadata' }
    }

    const { userId, items, orderId } = paymentIntent.metadata
    const total = paymentIntent.amount / 100
    const itemsArray = JSON.parse(items)

    console.log(orderId, 'orderId')

    // Save logged-in user order to Firestore
    await db
      .collection('orders')
      .doc(orderId)
      .set({
        orderId,
        items: itemsArray,
        amount: total,
        userId: userId || 'guest',
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        createdAt: new Date().toISOString(),
        stripePaymentIntentId: paymentIntent.id,
      })

    await sendEmail({
      to: 'test@maildev.com',
      subject: `Order confirmed for Order #${orderId}`,
      text: 'Thanks for your order',
      html: `
        <div style="font-family: sans-serif; max-width:600px;margin:auto">
          <h2>Order Confirmed</h2>
          <p>Thank you for your purchase!</p>
          <p><strong>Order #${orderId}</strong></p>
          <ul>
            ${itemsArray
              .map((item) => `<li>${item.name} × ${item.quantity}</li>`)
              .join('')}
          </ul>
          <p><strong>Total: $${total}</strong></p>
          <p style="color:#888;">– RingCart Team</p>
        </div>
      `,
    })

    const result = await removeCartItem(userId)
  }
})
