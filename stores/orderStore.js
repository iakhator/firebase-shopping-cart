export const useOrderStore = defineStore('order', () => {
  const { isLoading, error, fetchData } = useFetchWithLoading()
  const { $toast } = useNuxtApp()

  // State
  const order = ref({})

  // Actions
  const fetchOrderById = async (orderId) => {
    try {
      const data = await fetchData(`/api/orders/${orderId}`)
      order.value = data.order || {}
    } catch (error) {
      console.error('Error fetching cart:', error)
    }
  }

  return {
    // State
    order,
    isLoading,
    error,

    // Actions
    fetchOrderById,
  }
})
