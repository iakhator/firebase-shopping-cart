const { db } = require('../config/firebaseConfig')

exports.getCategories = async (req, res) => {
  try {
    const categories = []

    const allCategories = await db.collection('categories').get()
    allCategories.forEach((cat) => {
      categories.push({ ...cat.data(), id: cat.id })
    })

    res.status(200).json({
      categories
    })
  } catch (error) {
    console.log(error)
  }
}

exports.getCategoryProducts = async (req, res) => {
  try {
    const categoryProducts = []
    const category = await db.collection('categories').doc(req.params.id)
    const { id } = await category.get()
    const catProducts = await db
      .collection('products')
      .where('categoryId', '==', id)
      .get()

    catProducts.forEach((doc) => {
      categoryProducts.push({ ...doc.data(), id: doc.id })
    })

    res.status(200).json({
      categoryProducts
    })
  } catch (error) {
    console.error(error)
  }
}
