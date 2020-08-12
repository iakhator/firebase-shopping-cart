const stripe = require('stripe')(process.env.STRIPE_SECRET)
const { db } = require('../config/firebaseConfig')

function Cart(oldCart) {
  this.items = oldCart.items || {}
  this.totalQty = oldCart.totalQty || 0
  this.totalPrice = oldCart.totalPrice || 0

  this.add = function(item, id) {
    let storedItem = this.items[id]
    let add = 0

    if (!storedItem) {
      storedItem = this.items[id] = item
      storedItem.price = item.price * storedItem.quantity
    } else {
      storedItem.quantity += item.quantity
      storedItem.price = item.price * storedItem.quantity
    }

    this.totalQty += item.quantity
    for (const obj in this.items) {
      add += this.items[obj].price
    }
    this.totalPrice = add
  }

  this.removeFromCart = function(itemId) {
    for (const id in this.items) {
      if (itemId === id) {
        this.totalPrice = this.totalPrice - this.items[id].price
        this.totalQty = this.totalQty - this.items[id].quantity
        delete this.items[id]
      }
    }
  }

  this.generateArray = function() {
    const arr = []
    for (const id in this.items) {
      arr.push(this.items[id])
    }
    return arr
  }
}

exports.addToCart = (req, res) => {
  const productId = req.params.productId
  const cart = new Cart(req.session.cart ? req.session.cart : {})
  cart.add(req.body, productId)
  req.session.cart = cart
  res.json(req.session.cart)
}

exports.getCart = (req, res) => {
  console.log(req.session.cart)
  if (req.session.cart) {
    const cart = new Cart(req.session.cart)
    const cartItem = cart.generateArray()
    console.log(cartItem)
    res
      .status(200)
      .json({ cartItem, totalQty: cart.totalQty, totalPrice: cart.totalPrice })
  } else {
    res.status(400).json({ message: 'Cart is empty' })
  }
}

exports.checkOut = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd'
    })
    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

exports.removeItemCart = (req, res) => {
  if (req.session.cart) {
    const cart = new Cart(req.session.cart)
    cart.removeFromCart(req.body.id)
    req.session.cart = cart
    res.status(200).json({ message: 'Item deleted' })
  } else {
    console.log('no item in cart')
  }
}
