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
    res.json({ cartItem, totalQty: cart.totalQty, totalPrice: cart.totalPrice })
  }
}
