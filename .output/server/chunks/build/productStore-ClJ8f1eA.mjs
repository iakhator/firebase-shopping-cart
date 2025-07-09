import { l as defineStore, m as useFetchWithLoading, h as useNuxtApp, o as useFetch } from './server.mjs';
import { ref, computed } from 'vue';

const useProductStore = defineStore("product", () => {
  const { isLoading, fetchData } = useFetchWithLoading();
  const { $toast } = useNuxtApp();
  const products = ref([]);
  const product = ref(null);
  const errorMessage = ref(null);
  const getAllProducts = async (filters) => {
    var _a, _b, _c;
    const query = new URLSearchParams();
    if ((_a = filters == null ? void 0 : filters.brands) == null ? void 0 : _a.length) query.set("brands", filters.brands.join(","));
    if ((_b = filters == null ? void 0 : filters.priceRanges) == null ? void 0 : _b.length)
      query.set("priceRanges", filters.priceRanges.join(","));
    if ((_c = filters == null ? void 0 : filters.storage) == null ? void 0 : _c.length)
      query.set("storage", filters.storage.join(","));
    try {
      const data = await fetchData(`/api/products?${query.toString()}`);
      products.value = data.products || [];
    } catch (err) {
      errorMessage.value = err.message;
      if ($toast) $toast.error(err.message);
    }
  };
  const getProduct = async (productId) => {
    try {
      const { data, error } = await useFetch(`/api/products/${productId}`, "$8GdkIvl3GN");
      if (error.value) {
        if ($toast)
          $toast.error(error.value.message || "Failed to load product");
        return;
      }
      product.value = data.value.product;
    } catch (err) {
      errorMessage.value = err.message;
      if ($toast) $toast.error(err.message);
    }
  };
  const getProducts = computed(() => products.value || []);
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
    getProducts
  };
});

export { useProductStore as u };
//# sourceMappingURL=productStore-ClJ8f1eA.mjs.map
