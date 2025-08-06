import { adminAuth, adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    // Get the auth token from cookies
    // const authToken = getCookie(event, 'auth_token')

    // if (!authToken) {
    //   throw createError({
    //     statusCode: 401,
    //     statusMessage: 'Authentication token required',
    //   })
    // }

    // const user = await adminAuth.verifyIdToken(authToken)

    const body = await readBody(event)
    const { productId, userRating, userComment } = body

    if (!productId || typeof userRating !== 'number' || !userComment) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required review fields',
      })
    }

    // Add review to product document in Firestore
    const productRef = db.collection('products').doc(productId)
    const reviewData = {
      userRating,
      userComment,
      createdAt: new Date().toISOString(),
      // Optionally add user info if available
      // userId: user?.uid || null
    }

    await productRef.update({
      reviews: db.constructor.FieldValue.arrayUnion(reviewData),
    })

    return {
      success: true,
      message: 'Review added successfully',
      review: reviewData,
    }
  } catch (error) {
    console.error('Error adding review:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to add review',
    })
  }
})
