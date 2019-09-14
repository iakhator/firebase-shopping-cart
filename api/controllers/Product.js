const {
  db,
  admin,
  bucket
} = require('../config/firebaseConfig')

exports.getProducts = async (req, res) => {
  try {
    const products = []
    const allProducts = await db.collection('products').get()
    allProducts.forEach((product) => {
      products.push(product.data())
    })

    res.status(200).json({
      products
    })
  } catch (error) {
    console.error(error)
  }
}
