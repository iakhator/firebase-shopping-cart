const express = require('express')
const {
  signUp,
  signIn
} = require('../controllers/User')
const {
  getProducts
} = require('../controllers/Product')

const router = express.Router()

// user route
router.post('/signup', signUp)
router.post('/signin', signIn)

// product route
router.get('/products', getProducts)

module.exports = router
