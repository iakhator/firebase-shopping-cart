import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    // Get productId from query params
    const { productId } = getQuery(event)

    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing productId in query',
      })
    }

    const productDoc = await db.collection('products').doc(productId).get()

    if (!productDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
      })
    }

    const productData = productDoc.data()
    const reviews = productData.reviews || []

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
