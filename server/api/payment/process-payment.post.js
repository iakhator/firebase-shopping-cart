// server/api/create-payment-intent.post.js
import Stripe from 'stripe'
import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'
import { generateOrderId } from '~/server/utils/orders'

const stripe = new Stripe(process.env.STRIPE_SECRET)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    amount,
    items,
    userId,
    customerName,
    shippingAddress,
    currency = 'usd',
    savePaymentMethod = false,
  } = body

  // Check if the user is logged in
  // const authToken = getCookie(event, 'auth_token')

  let customerId = null

  if (userId) {
    try {
      // const user = await adminAuth.verifyIdToken(authToken)
      // userId = user.uid

      // Look up or create Stripe customer for logged-in user
      const userDoc = await db.collection('users').doc(userId).get()
      if (userDoc.exists && userDoc.data().stripeCustomerId) {
        customerId = userDoc.data().stripeCustomerId
      } else {
        const customer = await stripe.customers.create({ email: user.email })
        await db.collection('users').doc(userId).set(
          {
            stripeCustomerId: customer.id,
          },
          { merge: true },
        )
        customerId = customer.id
      }
    } catch (err) {
      console.error('Error verifying user:', err)
      throw createError({ statusCode: 401, message: 'Unauthenticated' })
    }
  } else {
    // For guests, create a temporary Stripe customer
    const guestCustomer = await stripe.customers.create()
    customerId = guestCustomer.id
  }

  // Convert amount to the smallest currency unit (e.g., cents for USD)
  const formattedAmount = Math.round(amount * 100)
  const orderId = generateOrderId()

  const paymentIntent = await stripe.paymentIntents.create({
    amount: formattedAmount,
    currency,
    customer: customerId,
    setup_future_usage: savePaymentMethod && userId ? 'off_session' : undefined,
    metadata: {
      userId: userId || 'guest',
      customerName: customerName || '',
      shippingAddress: JSON.stringify(shippingAddress) || {},
      orderId,
      items: JSON.stringify(items),
    },
  })

  return {
    clientSecret: paymentIntent.client_secret,
    orderId,
  }
})
