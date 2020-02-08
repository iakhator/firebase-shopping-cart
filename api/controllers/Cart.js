
const stripe = require('stripe')('sk_test_gC7SMPO6cYgOj7hot0NF5zKv00UVubkgd0')
const { db } = require('../config/firebaseConfig')

function Cart(oldCart) {
  this.items = oldCart.items || {}
  this.totalQty = oldCart.totalQty || 0
  this.totalPrice = oldCart.totalPrice || 0

  this.add = function (item, id) {
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

  this.generateArray = function () {
    const arr = []
    for (const id in this.items) {
      arr.push(this.items[id])
    }
    return arr
  }

  this.removeFromCart = function (itemId, items) {
    console.log(items)
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
  if (req.session.cart) {
    const cart = new Cart(req.session.cart)
    const cartItem = cart.generateArray(cart)
    res.status(200).json({ cartItem, totalQty: cart.totalQty, totalPrice: cart.totalPrice })
  } else {
    res.status(400).json({ message: 'Cart is empty' })
  }
}

exports.checkOut = async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: 'usd'
  })
  res.status(200).json({ clientSecret: paymentIntent.client_secret })
}

exports.removeItemCart = (req, res) => {
  if (req.sesssion.cart) {
    const cart = new Cart(req.session.cart)
    cart.removeFromCart(2, cart)
  } else {
    console.log('no item in cart')
  }
}
