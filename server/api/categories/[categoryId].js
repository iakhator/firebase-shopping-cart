import { db } from '../config/firebaseConfig.js'
import { H3Error } from 'h3'

export default defineEventHandler(async (event) => {
  const { categoryId: id } = event.context.params
  const categoryProducts = []

  try {
    const productsSnapshot = await db
      .collection('products')
      .where('categoryId', '==', id) // Query by the category ID
      .get()

    productsSnapshot.forEach((doc) => {
      categoryProducts.push({ ...doc.data(), id: doc.id })
    })

    return {
      success: true,
      products: categoryProducts,
    }
  } catch (error) {
    console.error('Error fetching category products:', error)

    throw new H3Error({
      statusCode: 500,
      statusMessage: 'Failed to fetch category products',
    })
  }
})
