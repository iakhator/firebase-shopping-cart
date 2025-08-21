export const useCartStore = defineStore('cart', () => {
  const { $toast } = useNuxtApp()

  // State
  const cart = ref([])
  const totalQuantity = ref(0)
  const totalPrice = ref(0)
  const isLoading = ref(false)
  const error = ref(null)

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
    isLoading.value = true
    try {
      const data = await $fetch(`/api/cart/get`)
      cart.value = data.cart || []
      updateTotals()
    } catch (error) {
      error.value = error
      $toast.error(error)
    } finally {
      isLoading.value = false
    }
  }

  const addToCart = async (product) => {
    try {
      const response = await $fetch('/api/cart/add', {
        method: 'POST',
        body: { ...product },
      })

      const existingIndex = cart.value.findIndex(
        (item) =>
          item.productId === response.cartItem.productId &&
          item.variant === response.cartItem.variant &&
          item.bundle === response.cartItem.bundle,
      )

      if (existingIndex !== -1) {
        cart.value[existingIndex].quantity = response?.cartItem.quantity
        cart.value[existingIndex].price = response?.cartItem.price
      } else {
        cart.value.push(response?.cartItem)
      }

      updateTotals()
      $toast.success(response.message)
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
      const data = await $fetch('/api/cart/increment', {
        method: 'POST',
        body: { productId, bundle, variant },
      })

      cart.value[itemIndex].quantity = data?.cartItem.quantity
      cart.value[itemIndex].price = data?.cartItem.price
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
      const data = await $fetch('/api/cart/decrement', {
        method: 'POST',
        body: { productId, bundle, variant },
      })

      if (data.value?.cartItem.quantity <= 0) {
        cart.value.splice(itemIndex, 1)
      } else {
        cart.value[itemIndex].quantity = data?.cartItem.quantity
        cart.value[itemIndex].price = data?.cartItem.price
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
      await $fetch('/api/cart/delete', {
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
