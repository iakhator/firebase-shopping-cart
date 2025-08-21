export const useOrderStore = defineStore('orders', () => {
  // Global state for orders
  const orders = ref([])
  const order = ref({})
  const isLoading = ref(false)
  const error = ref(null)

  // Fetch orders from API
  async function fetchOrders() {
    isLoading.value = true
    error.value = null
    try {
      const response = await $fetch('/api/orders')
      console.log(response, 'response')
      orders.value = response.orders || []
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  async function fetchOrderById(orderId) {
    isLoading.value = true
    error.value = null

    if (!orderId) {
      error.value = 'Order ID is required'
      return
    }
    try {
      const data = await $fetch(`/api/orders/${orderId}`)
      order.value = data.order || {}
      return data.order
    } catch (err) {
      console.error('Error fetching order:', err)
      order.value = {}
      error.value = err
    } finally {
      isLoading.value = false
    }
  }
  const refreshOrders = async () => {
    return await fetchOrders({ showToast: false })
  }

  return {
    order,
    orders,
    isLoading,
    error,
    fetchOrders,
    fetchOrderById,
    refreshOrders,
  }
})
