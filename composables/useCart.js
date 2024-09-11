import { ref, reactive, computed } from 'vue'
import Stripe from 'stripe'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET)

export const useCart = () => {
  const cart = reactive({
    items: {},
    totalQty: ref(0),
    totalPrice: ref(0),
  })

  const addToCart = (product, id) => {
    let storedItem = cart.items[id]
    let total = 0

    if (!storedItem) {
      cart.items[id] = { ...product, price: product.price * product.quantity }
    } else {
      storedItem.quantity += product.quantity
      storedItem.price = product.price * storedItem.quantity
    }

    cart.totalQty += product.quantity
    for (const obj in cart.items) {
      total += cart.items[obj].price
    }
    cart.totalPrice = total

    return cart
  }

  const decrementQty = (itemId) => {
    const item = cart.items[itemId]
    if (item && item.quantity > 0) {
      const qtyPrice = item.price / item.quantity
      item.quantity -= 1
      item.price -= qtyPrice
      cart.totalQty -= 1
      cart.totalPrice -= qtyPrice

      if (item.quantity === 0) {
        delete cart.items[itemId]
      }
    }
  }

  const incrementQty = (itemId) => {
    const item = cart.items[itemId]
    if (item && item.quantity <= 4) {
      const qtyPrice = item.price / item.quantity
      item.quantity += 1
      item.price += qtyPrice
      cart.totalQty += 1
      cart.totalPrice += qtyPrice
    }
  }

  const removeFromCart = (itemId) => {
    const item = cart.items[itemId]
    if (item) {
      cart.totalPrice -= item.price
      cart.totalQty -= item.quantity
      delete cart.items[itemId]
    }
  }

  const generateArray = () => {
    return Object.values(cart.items)
  }

  const checkOut = async (amount) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      })
      return paymentIntent.client_secret
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return {
    cart: computed(() => cart),
    addToCart,
    decrementQty,
    incrementQty,
    removeFromCart,
    generateArray,
    checkOut,
  }
}
