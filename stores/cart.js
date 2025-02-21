import { defineStore } from 'pinia'
import { useStorage } from '~/composables/useStorage.js'
// import Stripe from 'stripe'

// Initialize Stripe
// const stripe = new Stripe(process.env.STRIPE_SECRET)

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: {
        items: {},
        totalQty: 0,
        totalPrice: 0,
      },
    }
  },
  actions: {
    getCart() {
      // const { get } = useStorage('cart')
      // const isEmptyObject = (obj) => {
      //   return (
      //     obj && Object.keys(obj).length === 0 && obj.constructor === Object
      //   )
      // }
      // const storedCart = get('cart')
      // this.cart =
      //   !storedCart || isEmptyObject(storedCart)
      //     ? {
      //         items: {},
      //         totalQty: 0,
      //         totalPrice: 0,
      //       }
      //     : storedCart
    },
    addToCart(product, id) {
      const { update } = useStorage('cart')
      let storedItem = this.cart.items[id]
      let total = 0

      if (!storedItem) {
        this.cart.items[id] = {
          ...product,
          price: product.price * product.quantity,
        }
      } else {
        storedItem.quantity += product.quantity
        storedItem.price = product.price * storedItem.quantity
      }

      this.cart.totalQty += product.quantity
      this.cart.totalPrice = Object.values(this.cart.items).reduce(
        (sum, item) => sum + item.price,
        0
      )
      update('cart', this.cart)
    },

    decrementQty(itemId) {
      const { update } = useStorage('cart')
      const item = this.cart.items[itemId]
      if (item && item.quantity > 0) {
        const qtyPrice = item.price / item.quantity
        item.quantity -= 1
        item.price -= qtyPrice
        this.cart.totalQty -= 1
        this.cart.totalPrice -= qtyPrice

        if (item.quantity === 0) {
          delete this.cart.items[itemId]
        }
      }
      update('cart', this.cart)
    },

    incrementQty(itemId) {
      const { update } = useStorage('cart')
      const item = this.cart.items[itemId]
      if (item && item.quantity <= 4) {
        const qtyPrice = item.price / item.quantity
        item.quantity += 1
        item.price += qtyPrice
        this.cart.totalQty += 1
        this.cart.totalPrice += qtyPrice
      }
      update('cart', this.cart)
    },

    removeFromCart(itemId) {
      const item = this.cart.items[itemId]
      if (item) {
        this.cart.totalPrice -= item.price
        this.cart.totalQty -= item.quantity
        delete this.cart.items[itemId]
        update(this.cart)
      }
    },

    generateArray() {
      return Object.values(this.cart.items)
    },

    async checkOut(amount) {
      // try {
      //   const paymentIntent = await stripe.paymentIntents.create({
      //     amount,
      //     currency: 'usd',
      //   })
      //   return paymentIntent.client_secret
      // } catch (error) {
      //   throw new Error(error.message)
      // }
    },
  },
  getters: {
    cartItems: (state) => state.cart.items,
    totalQty: (state) => state.cart.totalQty,
    totalPrice: (state) => state.cart.totalPrice,
  },
})
