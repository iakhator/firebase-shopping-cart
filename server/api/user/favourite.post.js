import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const authToken = getCookie(event, 'auth_token')
    const body = await readBody(event)
    const { productId, userId } = body

    if (!productId || !userId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID and User ID are required',
      })
    }

    // Verify user authentication
    if (!authToken) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authorization token required',
      })
    }

    const decodedToken = await adminAuth.verifyIdToken(authToken)

    if (decodedToken.uid !== userId) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Unauthorized',
      })
    }

    const userRef = adminFirestore.collection('users').doc(userId)
    const userDoc = await userRef.get()

    if (!userDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    const userData = userDoc.data()
    const favourites = userData.favourites || []
    const isFavourite = favourites.includes(productId)

    let updatedFavourites
    let message
    let action

    if (isFavourite) {
      // Remove from favourites
      updatedFavourites = favourites.filter((id) => id !== productId)
      message = 'Removed from favourites'
      action = 'removed'
    } else {
      // Add to favourites
      updatedFavourites = [...favourites, productId]
      message = 'Added to favourites'
      action = 'added'
    }

    // Update user document
    await userRef.update({
      favourites: updatedFavourites,
      favouriteCount: updatedFavourites.length,
      updatedAt: new Date(),
    })

    return {
      success: true,
      message,
      action,
      isFavourite: !isFavourite,
      favouriteCount: updatedFavourites.length,
    }
  } catch (error) {
    console.error('Toggle favourite error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update favourite',
    })
  }
})
