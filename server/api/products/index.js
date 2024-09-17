import { db } from '../config/firebaseConfig.js'

export default defineEventHandler(async () => {
  const products = []
  const allProducts = await db.collection('products').get()

  allProducts?.forEach((product) => {
    products.push({ ...product.data(), id: product.id })
  })
  return { products }
})
