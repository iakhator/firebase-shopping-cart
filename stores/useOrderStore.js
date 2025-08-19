export const useOrderStore = () => {
  // Global state for orders
  const orders = useState('orders', () => [])
  const isLoading = useState('ordersLoading', () => false)
  const error = useState('ordersError', () => null)

  // Fetch orders from API
  async function fetchOrders() {
    isLoading.value = true
    error.value = null
    try {
      const response = await $fetch('/api/orders')
      orders.value = response.orders || []
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  return {
    orders,
    isLoading,
    error,
    fetchOrders,
  }
}
