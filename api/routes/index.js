const express = require('express')
const { signUp, signIn, getUserId, getUser, logOut } = require('../controllers/User')
const { getProducts, getProduct } = require('../controllers/Product')
const { addToCart, getCart } = require('../controllers/Cart')
const authMiddleware = require('../middlewares/authMiddleware')

const {
  getCategories,
  getCategoryProducts
} = require('../controllers/Category')

const router = express.Router()

// user route
router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/user', authMiddleware, getUser)
router.post('/logout', authMiddleware, logOut)

// product route
router.get('/products', getProducts)
router.get('/products/:productId', getProduct)

// cart route
router.post('/cart/:productId', addToCart)
router.get('/cart/', getCart)

// category route
router.get('/categories', getCategories)
router.get('/category/:id', getCategoryProducts)

module.exports = router
