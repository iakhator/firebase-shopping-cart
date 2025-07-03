import Stripe from 'stripe'
import { readRawBody } from 'h3'
import { adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { sendOrderConfirmation } from '~/server/services/emailService'

const stripe = new Stripe(process.env.STRIPE_SECRET)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

export default defineEventHandler(async (event) => {
  const sig = event.node.req.headers['stripe-signature']
  const body = await readRawBody(event)

  let stripeEvent

  try {
    stripeEvent = stripe.webhooks.constructEvent(body, sig, endpointSecret)
    console.log('Received event type:', stripeEvent.type)
  } catch (err) {
    console.error('Webhook error:', err.message)
    return { statusCode: 400, error: 'Invalid signature' }
  }

  if (stripeEvent.type === 'payment_intent.succeeded') {
    try {
      const paymentIntent = stripeEvent.data.object

      if (!paymentIntent.metadata || !paymentIntent.metadata.items) {
        console.error('Missing metadata in payment intent:', paymentIntent)
        return { statusCode: 400, error: 'Invalid metadata' }
      }

      const { userId, items, orderId, customerName, shippingAddress } =
        paymentIntent.metadata
      const total = paymentIntent.amount / 100
      const itemsArray = JSON.parse(items)
      const shippingAddressObj = JSON.parse(shippingAddress)

      await db
        .collection('orders')
        .doc(orderId)
        .set({
          customerName,
          orderId,
          items: itemsArray,
          shippingAddress: shippingAddressObj,
          amount: total,
          userId: userId || 'guest',
          currency: paymentIntent.currency,
          status: paymentIntent.status,
          createdAt: new Date().toISOString(),
          stripePaymentIntentId: paymentIntent.id,
        })

      await sendOrderConfirmation({
        to: 'iakhator@gmail.com',
        orderId,
        shippingAddress: shippingAddressObj,
        items: itemsArray,
        total,
      })

      await removeCartItem(userId)

      return { received: true }
    } catch (error) {
      console.error('Error processing payment intent:', error)
      return { statusCode: 500, error: 'Error processing payment intent' }
    }
  }

  // Always return something to avoid 500
  return { received: true }
})
