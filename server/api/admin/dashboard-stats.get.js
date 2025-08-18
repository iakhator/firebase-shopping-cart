import { adminFirestore as db } from '~/server/utils/firebaseAdmin'
import requireAdmin from './_requireAdmin'

export default defineEventHandler(
  requireAdmin(async (event) => {
    // Total Revenue (sum of all paid orders)
    const ordersSnapshot = await db
      .collection('orders')
      .where('paymentStatus', '==', 'paid')
      .get()
    let totalRevenue = 0
    let totalOrders = 0
    ordersSnapshot.forEach((doc) => {
      const order = doc.data()
      totalRevenue += order.amount ? Number(order.amount) / 100 : 0
      totalOrders += 1
    })

    // Total Products
    const productsSnapshot = await db.collection('products').get()
    const totalProducts = productsSnapshot.size

    // Total Users
    const usersSnapshot = await db.collection('users').get()
    const totalUsers = usersSnapshot.size

    // TODO: Calculate changes (mocked for now, you can implement real logic)
    const stats = [
      {
        label: 'Total Revenue',
        value: `$${totalRevenue.toLocaleString()}`,
        change: '+12.5%',
      },
      {
        label: 'Total Orders',
        value: totalOrders.toLocaleString(),
        change: '+8.2%',
      },
      {
        label: 'Total Products',
        value: totalProducts.toLocaleString(),
        change: '+3.1%',
      },
      {
        label: 'Total Users',
        value: totalUsers.toLocaleString(),
        change: '+15.3%',
      },
    ]

    return { stats }
  }),
)
