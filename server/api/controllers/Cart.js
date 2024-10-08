import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET)

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

  this.decrementQty = function (itemId) {
    for (const id in this.items) {
      if (itemId === id) {
        const cartItem = this.items[id]
        const qtyPrice = cartItem.price / cartItem.quantity
        if (cartItem.quantity >= 1) {
          cartItem.quantity -= 1
          cartItem.price = cartItem.price - qtyPrice
          this.totalQty -= 1
          this.totalPrice -= qtyPrice
        }
        if (cartItem.quantity === 0) {
          delete this.items[id]
        }
      }
    }
  }

  this.incrementQty = function (itemId) {
    for (const id in this.items) {
      if (itemId === id) {
        const cartItem = this.items[id]
        const qtyPrice = cartItem.price / cartItem.quantity
        if (cartItem.quantity <= 4) {
          cartItem.quantity += 1
          cartItem.price = cartItem.price + qtyPrice
          this.totalQty += 1
          this.totalPrice += qtyPrice
        }
      }
    }
  }

  this.removeFromCart = function (itemId) {
    for (const id in this.items) {
      if (itemId === id) {
        this.totalPrice = this.totalPrice - this.items[id].price
        this.totalQty = this.totalQty - this.items[id].quantity
        delete this.items[id]
      }
    }
  }

  this.generateArray = function () {
    const arr = []
    for (const id in this.items) {
      arr.push(this.items[id])
    }
    return arr
  }
}

export const addToCart = (req, res) => {
  const productId = req.params.productId
  const cart = new Cart(req.session.cart ? req.session.cart : {})
  cart.add(req.body, productId)
  req.session.cart = cart
  res.json(req.session.cart)
}

export const getCart = (req, res) => {
  if (req.session.cart) {
    const cart = new Cart(req.session.cart)
    const cartItem = cart.generateArray()
    res
      .status(200)
      .json({ cartItem, totalQty: cart.totalQty, totalPrice: cart.totalPrice })
  } else {
    res.status(400).json({ message: 'Cart is empty' })
  }
}

export const decrementQty = (req, res) => {
  const id = req.params.cartId
  const cart = new Cart(req.session.cart)
  cart.decrementQty(id)
  req.session.cart = cart
  res.status(200).json({ cart })
}

export const incrementQty = (req, res) => {
  const id = req.params.cartId
  const cart = new Cart(req.session.cart)
  cart.incrementQty(id)
  req.session.cart = cart
  res.status(200).json({ cart })
}

export const checkOut = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'usd',
    })
    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export const removeItemCart = (req, res) => {
  if (req.session.cart) {
    const cart = new Cart(req.session.cart)
    cart.removeFromCart(req.body.id)
    req.session.cart = cart
    res.status(200).json({ message: 'Item deleted' })
  } else {
    console.log('no item in cart')
  }
}
