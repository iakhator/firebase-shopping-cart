const { db } = require('../config/firebaseConfig')
const { notFound, foundSuccess } = require('../helpers/errorHandlers')

exports.getProducts = async (req, res) => {
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

exports.getProduct = async (req, res) => {
  try {
    const products = await db.collection('products').doc(req.params.productId)
    const product = await products.get()
    foundSuccess(res, { ...product.data(), id: product.id })
  } catch (error) {
    console.error(error)
  }
}
