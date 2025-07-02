export default function useFetchWithLoading() {
  const isLoading = ref(false)
  const error = ref(null)

  const { $toast } = useNuxtApp()

  const fetchData = async (url, options = {}) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await $fetch(url, options)
      return response
    } catch (err) {
      const errorMessage =
        err.data?.message || err.message || 'An error occurred'
      error.value = errorMessage

      // Only show toast if not explicitly disabled
      if (options.showToast !== false && $toast) {
        $toast.error(errorMessage)
      }

      throw err
    } finally {
      isLoading.value = false
    }
  }

  const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
    let attempt = 0

    while (attempt <= maxRetries) {
      try {
        return await fetchData(url, {
          ...options,
          showToast: attempt === maxRetries,
        })
      } catch (err) {
        attempt++
        if (attempt > maxRetries) {
          throw err
        }
        // Wait before retry (exponential backoff)
        await new Promise((resolve) =>
          setTimeout(resolve, Math.pow(2, attempt) * 1000),
        )
      }
    }
  }

  const clearError = () => {
    error.value = null
  }

  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const setError = (errorMessage) => {
    error.value = errorMessage
    if ($toast && errorMessage) {
      $toast.error(errorMessage)
    }
  }

  // Computed properties for better reactivity
  const hasError = computed(() => !!error.value)
  const isIdle = computed(() => !isLoading.value && !error.value)

  return {
    isLoading,
    error,
    hasError,
    isIdle,
    fetchData,
    fetchWithRetry,
    clearError,
    setLoading,
    setError,
  }
}
