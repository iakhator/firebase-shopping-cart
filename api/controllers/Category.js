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
