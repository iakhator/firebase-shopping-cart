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

    // Add review to separate reviews collection
    const reviewData = {
      productId,
      userRating,
      userComment,
      createdAt: new Date().toISOString(),
      // Optionally add user info if available
      // userId: user?.uid || null
      // userName: user?.name || 'Anonymous'
    }

    // Add review document
    await db.collection('reviews').add(reviewData)

    // Update averageRating and totalReviews in product document
    const productRef = db.collection('products').doc(productId)
    const productSnap = await productRef.get()
    const productData = productSnap.data()
    const prevAvg = productData.averageRating || 0
    const prevCount = productData.totalReviews || 0

    const newAvg = (prevAvg * prevCount + userRating) / (prevCount + 1)
    await productRef.update({
      averageRating: newAvg,
      totalReviews: prevCount + 1,
    })

    return {
      success: true,
      message: 'Review added successfully',
      review: reviewData,
      averageRating: newAvg,
      totalReviews: prevCount + 1,
    }
  } catch (error) {
    console.error('Error adding review:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to add review',
    })
  }
})
