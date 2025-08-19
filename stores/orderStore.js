export const useOrderStore = defineStore('order', () => {
  // Use the enhanced composable for loading and error states
  const {
    isLoading,
    error,
    hasError,
    isIdle,
    fetchData,
    fetchWithRetry,
    clearError,
    setError,
  } = useFetchWithLoading()

  // State
  const order = ref({})
  const orders = ref([])

  // Actions
  const fetchOrderById = async (orderId) => {
    if (!orderId) {
      setError('Order ID is required')
      return
    }

    try {
      const data = await fetchData(`/api/orders/${orderId}`)
      order.value = data.order || {}
      return data.order
    } catch (err) {
      console.error('Error fetching order:', err)
      order.value = {}
      throw err
    }
  }

  const fetchOrders = async (options = {}) => {
    try {
      const data = await $fetch('/api/orders', {
        showToast: options.showToast !== false,
      })

      console.log(data, 'data')

      orders.value = data.orders || []
      return data.orders
    } catch (err) {
      console.error('Error fetching orders:', err)
      orders.value = []
      throw err
    }
  }

  const fetchOrdersWithRetry = async (maxRetries = 3) => {
    try {
      const data = await fetchWithRetry('/api/orders', {}, maxRetries)
      orders.value = data.orders || []
      return data.orders
    } catch (err) {
      console.error('Error fetching orders with retry:', err)
      orders.value = []
      throw err
    }
  }

  const refreshOrders = async () => {
    return await fetchOrders({ showToast: false })
  }

  const createOrder = async (orderData) => {
    if (!orderData) {
      setError('Order data is required')
      return
    }

    try {
      const data = await fetchData('/api/orders', {
        method: 'POST',
        body: orderData,
      })

      // Add the new order to the beginning of the orders array
      if (data.order) {
        orders.value.unshift(data.order)
      }

      return data.order
    } catch (err) {
      console.error('Error creating order:', err)
      throw err
    }
  }

  // Getters
  // const hasOrders = computed(() => orders.value.length > 0)
  // const ordersCount = computed(() => orders.value.length)
  // const hasCurrentOrder = computed(() => Object.keys(order.value).length > 0)

  // const pendingOrders = computed(() =>
  //   orders.value.filter((order) => order.status === 'pending'),
  // )

  // const completedOrders = computed(() =>
  //   orders.value.filter((order) => order.status === 'completed'),
  // )

  // const totalOrdersValue = computed(() =>
  //   orders.value.reduce((total, order) => total + (order.total || 0), 0),
  // )

  return {
    // State (readonly to prevent direct mutations)
    order,
    orders,
    isLoading,
    error,
    hasError,
    isIdle,

    // Getters
    // hasOrders,
    // ordersCount,
    // hasCurrentOrder,
    // ordersByStatus,
    // pendingOrders,
    // completedOrders,
    // totalOrdersValue,

    // Actions
    fetchOrderById,
    fetchOrders,
    fetchOrdersWithRetry,
    // refreshOrders,
    // createOrder,
    // updateOrderStatus,
    // clearError,
  }
})
