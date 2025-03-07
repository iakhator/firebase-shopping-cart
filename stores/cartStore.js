export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cart: [],
      totalQuantity: 0,
      totalPrice: 0,
    }
  },

  actions: {
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

        console.log(data.value, 'data')
        const existingIndex = this.cart.findIndex(
          (item) =>
            item.productId === data.value.cartItem.productId &&
            item.variant === data.value.cartItem.variant &&
            item.bundle === data.value.cartItem.bundle
        )

        if (existingIndex !== -1) {
          this.cart[existingIndex].quantity += data.value?.cartItem.quantity
          this.cart[existingIndex].price += data.value?.cartItem.price
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
