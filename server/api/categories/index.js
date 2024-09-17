import { db } from '../config/firebaseConfig.js'
import { H3Error } from 'h3'

export default defineEventHandler(async (event) => {
  try {
    const categories = []

    const allCategories = await db.collection('categories').get()

    // Process each document in the Firestore collection
    allCategories.forEach((doc) => {
      categories.push({ ...doc.data(), id: doc.id })
    })

    return {
      success: true,
      categories,
    }
  } catch (error) {
    console.error('Error fetching categories:', error)

    throw new H3Error({
      statusCode: 500,
      statusMessage: 'Failed to fetch categories',
    })
  }
})
