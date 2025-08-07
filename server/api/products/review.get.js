import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const { productId } = getQuery(event)

    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing productId in query',
      })
    }

    const reviewsSnapshot = await db
      .collection('reviews')
      .where('productId', '==', productId)
      .orderBy('createdAt', 'desc')
      .get()

    const reviews = []
    reviewsSnapshot.forEach((doc) => {
      const data = doc.data()
      reviews.push({ id: doc.id, ...data })
    })

    return {
      success: true,
      reviews,
    }
  } catch (error) {
    console.error('Error fetching reviews:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch reviews',
    })
  }
})
