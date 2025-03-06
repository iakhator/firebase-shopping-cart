export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
    errorMessage: null,
  }),

  actions: {
    async fetchProducts() {
      try {
        const { data, error } = await useFetch('/api/products')

        if (error.value) throw new Error(error.value.data.error)

        this.products = data.value.products
      } catch (err) {
        errorStore.setError(err.message)
        $noty.error(err.message) // Notify the user
      }
    },
  },
})
