import Stripe from 'stripe'
import { readRawBody } from 'h3'
import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { sendOrderConfirmation } from '~/server/services/emailService'

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

    if (!paymentIntent.metadata || !paymentIntent.metadata.items) {
      console.error('Missing metadata in payment intent:', paymentIntent)
      return { statusCode: 400, error: 'Invalid metadata' }
    }

    const { userId, items, orderId } = paymentIntent.metadata
    const total = paymentIntent.amount / 100
    const itemsArray = JSON.parse(items)

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

    await sendOrderConfirmation(
      'iakhator@gmail.com',
      orderId,
      itemsArray,
      total,
    )
    // await sendEmail({
    //   to: 'iakhator@gmail.com',
    //   subject: `Order confirmed for Order #${orderId}`,
    //   text: `Order Confirmed\nThank you for your purchase!\nOrder #${orderId}\n\nItems:\n${itemsArray.map((item) => `- ${item.name} × ${item.quantity}`).join('\n')}\n\nTotal: $${total}\n\n– RingCart Team`, // Plain text fallback
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <meta name="viewport" content="width=device-width">
    //       <style>
    //         body { font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    //         h2 { color: #2d3748; }
    //         ul { padding-left: 20px; }
    //         .footer { color: #718096; font-size: 0.9em; }
    //       </style>
    //     </head>
    //     <body>
    //       <h2>Order Confirmed</h2>
    //       <p>Thank you for your purchase!</p>
    //       <p><strong>Order #${orderId}</strong></p>

    //       <h3>Items:</h3>
    //       <ul>
    //         ${itemsArray
    //           .map(
    //             (item) => `
    //           <li>
    //             ${item.name} × ${item.quantity}
    //             <span style="color: #4a5568;">($${item.price * item.quantity})</span>
    //           </li>
    //         `,
    //           )
    //           .join('')}
    //       </ul>

    //       <p style="font-size: 1.2em; margin-top: 20px;">
    //         <strong>Total: $${total}</strong>
    //       </p>

    //       <p class="footer">– RingCart Team</p>
    //     </body>
    //     </html>
    //   `,
    // })

    // await removeCartItem(userId)

    return { received: true }
  }
})
