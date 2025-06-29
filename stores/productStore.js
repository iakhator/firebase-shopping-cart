export const useProductStore = defineStore('product', () => {
  const { isLoading, error, fetchData } = useFetchWithLoading()
  const { $toast } = useNuxtApp()

  const products = ref([])
  const product = ref(null)
  const errorMessage = ref(null)

  const getAllProducts = async (filters) => {
    const query = new URLSearchParams()
    if (filters?.brands?.length) query.set('brands', filters.brands.join(','))
    if (filters?.priceRanges?.length)
      query.set('priceRanges', filters.priceRanges.join(','))
    if (filters?.storage?.length)
      query.set('storage', filters.storage.join(','))

    try {
      const data = await fetchData(`/api/products?${query.toString()}`)

      products.value = data.products || []
    } catch (err) {
      errorMessage.value = err.message
      if ($toast) $toast.error(err.message)
    }
  }

  const getProduct = async (productId) => {
    try {
      const { data, error } = await useFetch(`/api/products/${productId}`)

      if (error.value) {
        if ($toast)
          $toast.error(error.value.message || 'Failed to load product')
        return
      }

      product.value = data.value.product
    } catch (err) {
      errorMessage.value = err.message
      if ($toast) $toast.error(err.message)
    }
  }

  const getProducts = computed(() => products.value || [])

  return {
    // state
    isLoading,
    products,
    product,
    errorMessage,

    // actions
    getAllProducts,
    getProduct,

    // getters
    getProducts,
  }
})
