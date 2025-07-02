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

    const user = await adminAuth.verifyIdToken(authToken)

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

    return { orders }
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch orders',
    })
  }
})
