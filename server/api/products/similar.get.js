import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

export default defineEventHandler(async (event) => {
  const { categoryId, excludeId } = getQuery(event)
  // Query Firestore for products in the same category, excluding the current product
  const snapshot = await db
    .collection('products')
    .where('categoryId', '==', categoryId)
    .where('__name__', '!=', excludeId)
    .limit(8)
    .get()
  const products = []
  snapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() })
  })
  return { products }
})
