import { H3Error } from 'h3'
import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const { productId } = event.context.params

  try {
    const productDoc = await db.collection('products').doc(productId).get()

    if (!productDoc.exists) {
      throw new H3Error({
        statusCode: 404,
        statusMessage: 'Product not found',
      })
    }

    // Return the product data with its ID
    return { ...productDoc.data(), id: productDoc.id }
  } catch (error) {
    console.error('Error fetching product:', error)

    // Handle error and return a 500 response
    throw new H3Error({
      statusCode: 500,
      statusMessage: 'Failed to fetch product',
    })
  }
})
