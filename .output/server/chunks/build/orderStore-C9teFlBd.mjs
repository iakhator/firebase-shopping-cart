import { ref } from 'vue';
import { l as defineStore, m as useFetchWithLoading } from './server.mjs';

const useOrderStore = defineStore("order", () => {
  const {
    isLoading,
    error,
    hasError,
    isIdle,
    fetchData,
    fetchWithRetry,
    setError
  } = useFetchWithLoading();
  const order = ref({});
  const orders = ref([]);
  const fetchOrderById = async (orderId) => {
    if (!orderId) {
      setError("Order ID is required");
      return;
    }
    try {
      const data = await fetchData(`/api/orders/${orderId}`);
      order.value = data.order || {};
      return data.order;
    } catch (err) {
      console.error("Error fetching order:", err);
      order.value = {};
      throw err;
    }
  };
  const fetchOrders = async (options = {}) => {
    try {
      const data = await fetchData("/api/orders", {
        showToast: options.showToast !== false
      });
      orders.value = data.orders || [];
      return data.orders;
    } catch (err) {
      console.error("Error fetching orders:", err);
      orders.value = [];
      throw err;
    }
  };
  const fetchOrdersWithRetry = async (maxRetries = 3) => {
    try {
      const data = await fetchWithRetry("/api/orders", {}, maxRetries);
      orders.value = data.orders || [];
      return data.orders;
    } catch (err) {
      console.error("Error fetching orders with retry:", err);
      orders.value = [];
      throw err;
    }
  };
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
    fetchOrdersWithRetry
    // refreshOrders,
    // createOrder,
    // updateOrderStatus,
    // clearError,
  };
});

export { useOrderStore as u };
//# sourceMappingURL=orderStore-C9teFlBd.mjs.map
