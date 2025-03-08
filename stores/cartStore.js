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

        console.log(data.value.cartItem, 'cartItem', product.variant, 'variant')

        const existingIndex = this.cart.findIndex(
          (item) =>
            item.productId === data.value.cartItem.productId &&
            item.variant === data.value.cartItem.variant &&
            item.bundle === data.value.cartItem.bundle
        )

        console.log(existingIndex, 'existingIndex')

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

    updateTotals() {
      this.totalQuantity = this.cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
      this.totalPrice = this.cart.reduce((sum, item) => sum + item.price, 0)
    },
  },
})
