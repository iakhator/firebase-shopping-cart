export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: [],
      totalQuantity: 0,
      totalPrice: 0,
    }
  },

  actions: {
    async fetchCart(userId) {
      try {
        const { cart } = await $fetch(`/api/cart/get`, {
          params: { userId, guestId: this.guestId },
        })

        this.cart = cart

        this.updateTotals()
      } catch (error) {
        console.error('Error fetching cart:', error)
      }
    },
    async addToCart(product) {
      const { $toast } = useNuxtApp()
      try {
        const { data, error } = await useFetch('/api/cart/add', {
          method: 'POST',
          body: {
            ...product,
          },
        })

        if (error.value) {
          $toast.error(error.value)
          return
        }

        const existingIndex = this.cart.findIndex(
          (item) =>
            item.productId === data.value.cartItem.productId &&
            item.variant === data.value.cartItem.variant &&
            item.bundle === data.value.cartItem.bundle,
        )

        if (existingIndex !== -1) {
          this.cart[existingIndex].quantity = data.value?.cartItem.quantity
          this.cart[existingIndex].price = data.value?.cartItem.price
        } else {
          this.cart.push(data.value?.cartItem)
        }

        this.updateTotals()

        $toast.success(data.value.message)
      } catch (err) {
        this.errorMessage = err.message
        $toast.error(err.message) // Notify the user
      }
    },

    async incrementCartItem({ userId, productId, bundle, variant }) {
      const itemIndex = this.cart.findIndex(
        (item) => item.productId === productId,
      )

      if (itemIndex !== -1) {
        const { data } = await useFetch('/api/cart/increment', {
          method: 'POST',
          body: {
            userId,
            productId,
            bundle,
            variant,
          },
        })

        this.cart[itemIndex].quantity = data.value?.cartItem.quantity
        this.cart[itemIndex].price = data.value?.cartItem.price
        this.updateTotals()
      }
    },
    async decrementCartItem({ userId, productId, bundle, variant }) {
      const itemIndex = this.cart.findIndex(
        (item) =>
          item.productId === productId &&
          item.variant === variant &&
          item.bundle === bundle,
      )

      if (itemIndex !== -1) {
        const { data } = await useFetch('/api/cart/decrement', {
          method: 'POST',
          body: {
            userId,
            productId,
            bundle,
            variant,
          },
        })

        if (data.value?.cartItem.quantity <= 0) {
          this.cart.splice(itemIndex, 1)
        } else {
          this.cart[itemIndex].quantity = data.value?.cartItem.quantity
          this.cart[itemIndex].price = data.value?.cartItem.price
        }
        this.updateTotals()
      }
    },
    async removeCartItem({ userId, productId, bundle, variant }) {
      const itemIndex = this.cart.findIndex(
        (item) =>
          item.productId === productId &&
          item.variant === variant &&
          item.bundle === bundle,
      )

      if (itemIndex !== -1) {
        const { data } = await useFetch('/api/cart/delete', {
          method: 'POST',
          body: {
            userId,
            productId,
            bundle,
            variant,
          },
        })

        this.cart.splice(itemIndex, 1)

        this.updateTotals()
      }
    },
    updateTotals() {
      this.totalQuantity = this.cart.reduce(
        (sum, item) => sum + item.quantity,
        0,
      )
      this.totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0)
    },
  },
})
