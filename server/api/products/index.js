import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  try {
    const products = []
    const allProducts = await db.collection('products').get()

    allProducts?.forEach((product) => {
      products.push({ ...product.data(), id: product.id })
    })

    return { products }
  } catch (error) {
    console.error('Error fetching products:', error.message)

    // Return an error response
    setResponseStatus(event, 500)
    return { message: 'Failed to fetch products' }
  }
})
