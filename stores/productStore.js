export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
    errorMessage: null,
  }),

  actions: {
    async getAllProducts(filters) {
      const { $toast } = useNuxtApp()

      const query = new URLSearchParams()
      if (filters.brands.length) query.set('brands', filters.brands.join(','))
      if (filters.priceRanges.length)
        query.set('priceRanges', filters.priceRanges.join(','))
      if (filters.storage.length)
        query.set('storage', filters.storage.join(','))

      try {
        const { data, error } = await useFetch(
          `/api/products?${query.toString()}`,
        )

        if (error && error?.value) {
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

        if (error && error?.value) {
          if ($toast) $toast.error(error?.value)

          return
        }

        this.product = data.value.product
      } catch (err) {
        this.errorMessage = err?.message || 'An error occurred'
        if ($toast) $toast.error(err?.message) // Notify the user
      }
    },
  },

  getters: {
    getProducts: (state) => {
      return state?.products || []
    },
  },
})
