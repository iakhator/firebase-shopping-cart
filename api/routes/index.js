const express = require('express')
const { signUp, signIn } = require('../controllers/User')
const { getProducts } = require('../controllers/Product')

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

// category route
router.get('/categories', getCategories)
router.get('/category/:id', getCategoryProducts)

module.exports = router
