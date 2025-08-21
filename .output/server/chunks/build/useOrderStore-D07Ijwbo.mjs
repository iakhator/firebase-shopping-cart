import { toRef, isRef } from 'vue';
import { b as useNuxtApp } from './server.mjs';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useOrderStore = () => {
  const orders = useState("orders", () => []);
  const order = useState("order", () => {
  });
  const isLoading = useState("ordersLoading", () => false);
  const error = useState("ordersError", () => null);
  async function fetchOrders() {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await $fetch("/api/orders");
      orders.value = response.orders || [];
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }
  async function fetchOrderById(orderId) {
    isLoading.value = true;
    error.value = null;
    if (!orderId) {
      error.value = "Order ID is required";
      return;
    }
    try {
      const data = await $fetch(`/api/orders/${orderId}`);
      order.value = data.order || {};
      return data.order;
    } catch (err) {
      console.error("Error fetching order:", err);
      order.value = {};
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }
  const refreshOrders = async () => {
    return await fetchOrders();
  };
  return {
    orders,
    isLoading,
    error,
    fetchOrders,
    fetchOrderById,
    refreshOrders
  };
};

export { useOrderStore as u };
//# sourceMappingURL=useOrderStore-D07Ijwbo.mjs.map
