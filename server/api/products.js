import { db } from './config/firebaseConfig.js'
import { notFound, foundSuccess } from './helpers/errorHandlers.js'

export default defineEventHandler(async () => {
  // try {
  //   const products = []
  //   const allProducts = db.collection('products').get()
  //   allProducts.forEach((product) => {
  //     products.push({ ...product.data(), id: product.id })
  //   })
  //   return { products }
  // } catch (error) {
  //   console.error(error)
  // }
  const products = []
  const allProducts = await db.collection('products').get()

  console.log(allProducts, 'allproducts')
  allProducts?.forEach((product) => {
    products.push({ ...product.data(), id: product.id })
  })
  return { products }
})
