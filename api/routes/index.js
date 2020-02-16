const express = require('express')
const { signUp, signIn, getUser, logOut } = require('../controllers/User')
const { getProducts, getProduct } = require('../controllers/Product')
const { addToCart, getCart, checkOut, removeItemCart } = require('../controllers/Cart')
const {
  saveOrders
} = require('../controllers/Orders')
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
router.post('/checkout/', checkOut)
router.get('/cart/', getCart)
router.delete('/deleteItem', removeItemCart)

// category route
router.get('/categories', getCategories)
router.get('/category/:id', getCategoryProducts)

// orders
router.post('/saveorder', authMiddleware, saveOrders)

module.exports = router
