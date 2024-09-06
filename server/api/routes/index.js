import express from 'express'
import { signUp, signIn, getUser, logOut } from '../controllers/User.js'
import { getProducts, getProduct } from '../controllers/Product.js'
import {
  addToCart,
  getCart,
  checkOut,
  removeItemCart,
  decrementQty,
  incrementQty,
} from '../controllers/Cart.js'
import { saveOrders } from '../controllers/Orders.js'
import authMiddleware from '../middlewares/authMiddleware.js'

import { getCategories, getCategoryProducts } from '../controllers/Category.js'

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
router.post('/decrementQty/:cartId', decrementQty)
router.post('/incrementQty/:cartId', incrementQty)
router.delete('/deleteItem', removeItemCart)

// category route
router.get('/categories', getCategories)
router.get('/category/:id', getCategoryProducts)

// orders
router.post('/saveorder', authMiddleware, saveOrders)

export default router
