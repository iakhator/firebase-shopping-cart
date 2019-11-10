const { db } = require('../config/firebaseConfig')

function Cart(oldCart) {
  this.items = oldCart.items || {}
  this.totalQty = oldCart.quantity || 0
  this.totalPrice = oldCart.price || 0

  this.add = function (item, id) {
    let storedItem = this.items[id]
    if (!storedItem) {
      storedItem = this.items[id] = item
      this.totalQty++
      this.totalPrice += storedItem.price
    }
    storedItem.quantity++
    storedItem.price = storedItem.price * storedItem.quantity
    this.totalQty++
    this.totalPrice += storedItem.price
  }

  this.generateArray = function () {
    const arr = []
    for (const id in this.items) {
      arr.push(this.items[id])
    }
    return arr
  }
}

exports.addToCart = (req, res) => {
  const productId = req.params.productId
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} })
  cart.add(req.body, productId)
  req.session.cart = cart
  res.json(req.session.cart)
}

exports.getCart = (req, res) => {
  if (req.session.cart) {
    res.json(req.session.cart)
  }
}
