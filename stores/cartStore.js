export const useCartStore = defineStore('cart', () => {
  const { isLoading, error, fetchData } = useFetchWithLoading()
  const { $toast } = useNuxtApp()

  // State
  const cart = ref([])
  const totalQuantity = ref(0)
  const totalPrice = ref(0)

  // Getters (computed)
  const isEmpty = computed(() => cart.value.length === 0)

  // Actions
  const updateTotals = () => {
    totalQuantity.value = cart.value.reduce(
      (sum, item) => sum + item.quantity,
      0,
    )
    totalPrice.value =
      cart.value.reduce((sum, item) => sum + item.price, 0) || 0
  }

  const fetchCart = async () => {
    try {
      const data = await fetchData(`/api/cart/get`)
      cart.value = data.cart || []
      updateTotals()
    } catch (error) {
      console.error('Error fetching cart:', error)
    }
  }

  const addToCart = async (product) => {
    try {
      const { data, error } = await useFetch('/api/cart/add', {
        method: 'POST',
        body: { ...product },
      })

      if (error.value) {
        $toast.error(error.value)
        return
      }

      const existingIndex = cart.value.findIndex(
        (item) =>
          item.productId === data.value.cartItem.productId &&
          item.variant === data.value.cartItem.variant &&
          item.bundle === data.value.cartItem.bundle,
      )

      if (existingIndex !== -1) {
        cart.value[existingIndex].quantity = data.value?.cartItem.quantity
        cart.value[existingIndex].price = data.value?.cartItem.price
      } else {
        cart.value.push(data.value?.cartItem)
      }

      updateTotals()
      $toast.success(data.value.message)
    } catch (err) {
      $toast.error(err.message)
    }
  }

  const incrementCartItem = async ({ productId, bundle, variant }) => {
    const itemIndex = cart.value.findIndex(
      (item) =>
        item.productId === productId &&
        item.variant === variant &&
        item.bundle === bundle,
    )

    if (itemIndex !== -1) {
      const { data } = await useFetch('/api/cart/increment', {
        method: 'POST',
        body: { productId, bundle, variant },
      })

      cart.value[itemIndex].quantity = data.value?.cartItem.quantity
      cart.value[itemIndex].price = data.value?.cartItem.price
      updateTotals()
    }
  }

  const decrementCartItem = async ({ productId, bundle, variant }) => {
    const itemIndex = cart.value.findIndex(
      (item) =>
        item.productId === productId &&
        item.variant === variant &&
        item.bundle === bundle,
    )

    if (itemIndex !== -1) {
      const { data } = await useFetch('/api/cart/decrement', {
        method: 'POST',
        body: { productId, bundle, variant },
      })

      if (data.value?.cartItem.quantity <= 0) {
        cart.value.splice(itemIndex, 1)
      } else {
        cart.value[itemIndex].quantity = data.value?.cartItem.quantity
        cart.value[itemIndex].price = data.value?.cartItem.price
      }
      updateTotals()
    }
  }

  const removeCartItem = async ({ productId, bundle, variant }) => {
    const itemIndex = cart.value.findIndex(
      (item) =>
        item.productId === productId &&
        item.variant === variant &&
        item.bundle === bundle,
    )

    if (itemIndex !== -1) {
      await useFetch('/api/cart/delete', {
        method: 'POST',
        body: { productId, bundle, variant },
      })

      cart.value.splice(itemIndex, 1)
      updateTotals()
    }
  }

  const clearCart = async () => {
    cart.value = []
    updateTotals()
  }

  return {
    // State
    cart,
    totalQuantity,
    totalPrice,
    isLoading,
    error,

    // Getters
    isEmpty,

    // Actions
    fetchCart,
    addToCart,
    incrementCartItem,
    decrementCartItem,
    removeCartItem,
    clearCart,
    updateTotals,
  }
})
