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
    email,
    phone,
    customerName,
    shippingAddress,
    currency = 'usd',
    savePaymentMethod = false,
  } = body

  // Check if the user is logged in
  // const authToken = getCookie(event, 'auth_token')1

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
        const customer = await stripe.customers.create({
          name: userDoc.data().displayName,
          email: userDoc.data().email,
        })
        await db.collection('users').doc(userId).set(
          {
            stripeCustomerId: customer.id,
          },
          { merge: true },
        )
        customerId = customer.id
      }

      await db.collection('users').doc(userId).set(
        {
          shippingAddress,
        },
        { merge: true },
      )
    } catch (err) {
      console.error('Error verifying user:', err)
      throw createError({ statusCode: 401, message: 'Unauthenticated' })
    }
  } else {
    // TODO: For guests, create a temporary Stripe customer
    // const guestCustomer = await stripe.customers.create()
    // customerId = guestCustomer.id
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
      email: email || '',
      customerName: customerName || '',
      shippingAddress: JSON.stringify(shippingAddress) || {},
      orderId,
      items: JSON.stringify(items),
    },
  })

  // Save order with paymentStatus 'pending'
  if (paymentIntent.client_secret) {
    const orderDate = new Date()
    const estimatedDeliveryDate = new Date(
      orderDate.getTime() + 21 * 24 * 60 * 60 * 1000,
    ) // 3 weeks

    await db
      .collection('orders')
      .doc(orderId)
      .set({
        items,
        orderId,
        currency,
        shippingAddress,
        userId: userId || 'guest',
        amount: formattedAmount,
        paymentStatus: 'pending',
        createdAt: orderDate.toISOString(),
        customer: {
          name: customerName || '',
          email: email || '',
          phone: phone || '',
        },
        estimatedDeliveryDate: estimatedDeliveryDate.toISOString(),
      })
  }

  return {
    clientSecret: paymentIntent.client_secret,
    orderId,
  }
})
