export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
    errorMessage: null,
  }),

  actions: {
    async getAllProducts() {
      const { $toast } = useNuxtApp()
      try {
        const { data, error } = await useFetch('/api/products')

        if (error.value) {
          $toast.error(error.value)

          return
        }

        this.products = data.value.products
      } catch (err) {
        this.errorMessage = err.message
        $toast.error(err.message) // Notify the user
      }
    },

    async getProduct(productId) {
      const { $toast } = useNuxtApp()
      try {
        const { data, error } = await useFetch(`/api/products/${productId}`)

        if (error.value) {
          $toast.error(error.value)

          return
        }

        this.product = data.value.product
      } catch (err) {
        this.errorMessage = err.message
        $toast.error(err.message) // Notify the user
      }
    },
  },

  getters: {
    getProducts: (state) => {
      return state.products
    },
  },
})
