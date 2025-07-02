import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    // Get the auth token from cookies
    const authToken = getCookie(event, 'auth_token')

    if (!authToken) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication token required',
      })
    }

    // Verify the user
    const user = await adminAuth.verifyIdToken(authToken)

    // Get all orders for the authenticated user
    const ordersSnapshot = await db
      .collection('orders')
      .where('userId', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .get()

    // Extract order data
    const orders = []
    ordersSnapshot.forEach((doc) => {
      orders.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    console.log(orders, 'orders')

    return { orders }
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch orders',
    })
  }
})
