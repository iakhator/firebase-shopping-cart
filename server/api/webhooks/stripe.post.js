import Stripe from 'stripe'
import { adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { sendEmail } from '~/server/utils/sendEmail'

const stripe = new Stripe(process.env.STRIPE_SECRET)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export default defineEventHandler(async (event) => {
  const sig = event.node.req.headers['stripe-signature']
  const body = await readRawBody(event)

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

    const { userId, items } = paymentIntent.metadata

    if (userId === 'guest') {
      // Save guest order to Firestore
      await db.collection('guestOrders').add({
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        items: JSON.parse(items), // Parse items from JSON string
        created: new Date(),
        stripePaymentIntentId: paymentIntent.id,
      })
    } else {
      // Save logged-in user order to Firestore
      await db
        .collection('orders')
        .doc(userId)
        .collection('userOrders')
        .add({
          amount: paymentIntent.amount / 100,
          currency: paymentIntent.currency,
          status: paymentIntent.status,
          items: JSON.parse(items),
          created: new Date(),
          stripePaymentIntentId: paymentIntent.id,
        })
    }

    await sendEmail({
      to: 'iakhator@gmail.com',
      subject: 'Order confirmed',
      text: 'Thanks for your order',
      html: `<p>Thanks for your order!</p>`,
    })
  }
})
