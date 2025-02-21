import { adminFirestore as db } from '~/server/utils/firebaseAdmin'

import { notFound, foundSuccess } from '../helpers/errorHandlers.js'

export const getProducts = async (req, res) => {
  try {
    const products = []
    const allProducts = await db.collection('products').get()
    allProducts.forEach((product) => {
      products.push({ ...product.data(), id: product.id })
    })
    foundSuccess(res, products)
  } catch (error) {
    console.error(error)
  }
}

export const getProduct = async (req, res) => {
  try {
    const products = await db.collection('products').doc(req.params.productId)
    const product = await products.get()
    foundSuccess(res, { ...product.data(), id: product.id })
  } catch (error) {
    console.error(error)
  }
}
