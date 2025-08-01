import { adminAuth, adminFirestore } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const userId = getRouterParam(event, 'userId')

    if (!userId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'User ID is required',
      })
    }

    // Verify user authentication
    const authToken = getCookie(event, 'auth_token')
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

    // Get user's favourites
    const userRef = adminFirestore.collection('users').doc(userId)
    const userDoc = await userRef.get()

    if (!userDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    const userData = userDoc.data()
    const favouriteIds = userData.favourites || []

    if (favouriteIds.length === 0) {
      return {
        success: true,
        data: {
          favourites: [],
          count: 0,
        },
      }
    }

    // Get product details for favourites
    const productPromises = favouriteIds.map(async (productId) => {
      const productRef = adminFirestore.collection('products').doc(productId)
      const productDoc = await productRef.get()

      if (productDoc.exists) {
        return {
          id: productId,
          ...productDoc.data(),
        }
      }
      return null
    })

    const products = await Promise.all(productPromises)
    const validProducts = products.filter((product) => product !== null)

    // If some products were deleted, update user's favourites
    if (validProducts.length !== favouriteIds.length) {
      const validIds = validProducts.map((p) => p.id)
      await userRef.update({
        favourites: validIds,
        favouriteCount: validIds.length,
        updatedAt: new Date(),
      })
    }

    return {
      success: true,
      data: {
        favourites: validProducts,
        count: validProducts.length,
      },
    }
  } catch (error) {
    console.error('Get favourites error:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch favourites',
    })
  }
})
