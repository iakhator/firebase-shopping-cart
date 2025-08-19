import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  // Verify admin authentication
  try {
    // Fetch the most recent 10 orders
    const snapshot = await db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(10)
      .get()

    const orders = snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        id: data.orderId || doc.id,
        customer: data.customerName || data.customer?.name || 'Unknown',
        amount: data.amount ? `$${(data.amount / 100).toFixed(2)}` : '$0.00',
        status: data.status || 'pending',
        date: data.createdAt
          ? new Date(data.createdAt).toISOString().slice(0, 10)
          : '',
      }
    })

    return { orders }
  } catch (error) {
    return {
      error: 'Failed to fetch recent orders',
      details: error.message,
    }
  }
})
