// server/api/create-payment-intent.post.js
import Stripe from 'stripe'
import { adminAuth } from '~/server/utils/firebaseAdmin'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { amount, currency = 'usd', savePaymentMethod = false } = body

  const authToken = getCookie(event, 'auth_token')
  const user = await adminAuth.verifyIdToken(authToken)
  if (!user) throw createError({ statusCode: 401, message: 'Unauthenticated' })

  const userId = user.uid

  // Look up or create Stripe customer for user
  let customerId
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

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    customer: customerId,
    setup_future_usage: savePaymentMethod ? 'off_session' : undefined,
    metadata: {
      userId,
    },
  })

  return {
    clientSecret: paymentIntent.client_secret,
  }
})
