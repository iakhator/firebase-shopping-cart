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
      error.value = err.message || 'An error occurred'
      if ($toast) $toast.error(err.message)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, fetchData }
}
