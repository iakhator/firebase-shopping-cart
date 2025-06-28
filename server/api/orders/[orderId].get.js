import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const orderId = getRouterParam(event, 'orderId')

  console.log(orderId, 'orderId order get')
  const authToken = getCookie(event, 'auth_token')
  const user = await adminAuth.verifyIdToken(authToken)

  if (!orderId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Order ID is required',
    })
  }

  const orderDoc = await db.collection('orders').doc(orderId).get()

  if (!orderDoc.exists) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Order not found',
    })
  }

  const order = orderDoc.data()

  if (order.userId !== user.uid) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Access denied',
    })
  }

  return { order }
})
