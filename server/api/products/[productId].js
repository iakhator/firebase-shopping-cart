import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const { productId } = event.context.params

  try {
    const productDoc = await db.collection('products').doc(productId).get()

    if (!productDoc.exists) {
      // Return a 404 response if the product is not found
      setResponseStatus(event, 404)
      return { message: 'Product not found' }
    }

    // Return the product data with its ID
    return { product: { ...productDoc.data(), id: productDoc.id } }
  } catch (error) {
    console.error('Error fetching product:', error)

    // Handle error and return a 500 response
    setResponseStatus(event, 500)
    return {
      message: 'Failed to fetch product',
      error,
    }
  }
})
