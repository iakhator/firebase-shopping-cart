const express = require('express')
const { signUp, signIn } = require('../controllers/User')
const { getProducts, getProduct } = require('../controllers/Product')
const authMiddleware = require('../middlewares/authMiddleware')

const {
  getCategories,
  getCategoryProducts
} = require('../controllers/Category')

const router = express.Router()

// user route
router.post('/signup', signUp)
router.post('/signin', signIn)

// product route
router.get('/products', getProducts)
router.get('/products/:productId', getProduct)

// category route
router.get('/categories', getCategories)
router.get('/category/:id', getCategoryProducts)

module.exports = router
