/**
 * Composable for managing Nuxt loading states
 * Provides a unified interface for controlling loading indicators
 */

export const useNuxtLoading = () => {
  const isLoading = ref(false)
  const loadingMessage = ref('')
  const nuxtApp = useNuxtApp()

  // Access Nuxt's built-in loading indicator
  const indicator = nuxtApp.$loadingIndicator || {
    start: () => {},
    finish: () => {},
    clear: () => {},
    set: () => {}
  }

  /**
   * Start loading with optional message
   * @param {string} message - Optional loading message
   */
  const startLoading = (message = 'Loading...') => {
    isLoading.value = true
    loadingMessage.value = message
    indicator.start()
  }

  /**
   * Finish loading
   */
  const finishLoading = () => {
    isLoading.value = false
    loadingMessage.value = ''
    indicator.finish()
  }

  /**
   * Clear loading state
   */
  const clearLoading = () => {
    isLoading.value = false
    loadingMessage.value = ''
    indicator.clear()
  }

  /**
   * Set loading progress (0-100)
   * @param {number} progress - Progress percentage
   */
  const setProgress = (progress) => {
    if (typeof indicator.set === 'function') {
      indicator.set(progress)
    }
  }

  /**
   * Loading wrapper for async operations
   * @param {Function} asyncFn - Async function to wrap
   * @param {string} message - Loading message
   * @returns {Promise} Result of the async function
   */
  const withLoading = async (asyncFn, message = 'Loading...') => {
    try {
      startLoading(message)
      const result = await asyncFn()
      return result
    } catch (error) {
      throw error
    } finally {
      finishLoading()
    }
  }

  /**
   * Loading wrapper for fetch operations
   * @param {string} url - URL to fetch
   * @param {object} options - Fetch options
   * @param {string} message - Loading message
   * @returns {Promise} Fetch result
   */
  const fetchWithLoading = async (url, options = {}, message = 'Loading...') => {
    return withLoading(async () => {
      return await $fetch(url, options)
    }, message)
  }

  /**
   * Programmatically control page loading
   * Useful for route transitions or large operations
   */
  const pageLoading = {
    start: () => startLoading('Loading page...'),
    finish: finishLoading,
    clear: clearLoading
  }

  /**
   * Create a loading state for specific operations
   * @param {string} initialMessage - Initial loading message
   * @returns {object} Loading state object
   */
  const createLoadingState = (initialMessage = 'Loading...') => {
    const state = reactive({
      isLoading: false,
      message: initialMessage,
      progress: 0
    })

    return {
      ...toRefs(state),
      start: (message = initialMessage) => {
        state.isLoading = true
        state.message = message
        state.progress = 0
        indicator.start()
      },
      finish: () => {
        state.isLoading = false
        state.progress = 100
        indicator.finish()
        // Reset after a short delay
        setTimeout(() => {
          state.progress = 0
        }, 300)
      },
      setProgress: (progress) => {
        state.progress = Math.min(Math.max(progress, 0), 100)
        setProgress(progress)
      },
      setMessage: (message) => {
        state.message = message
      }
    }
  }

  /**
   * Auto-cleanup loading state on component unmount
   */
  onUnmounted(() => {
    if (isLoading.value) {
      finishLoading()
    }
  })

  // Watch for route changes to auto-handle page loading
  const router = useRouter()
  if (router) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        startLoading('Navigating...')
      }
    })

    router.afterEach(() => {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        finishLoading()
      }, 100)
    })
  }

  return {
    // State
    isLoading: readonly(isLoading),
    loadingMessage: readonly(loadingMessage),

    // Methods
    startLoading,
    finishLoading,
    clearLoading,
    setProgress,
    withLoading,
    fetchWithLoading,
    pageLoading,
    createLoadingState,

    // Direct access to Nuxt's loading indicator
    indicator
  }
}

/**
 * Global loading state that persists across components
 */
export const useGlobalLoading = () => {
  // Use Nuxt's state management for global state
  const globalLoadingState = useState('global-loading', () => ({
    isLoading: false,
    message: '',
    operations: new Set()
  }))

  const startGlobalLoading = (operationId, message = 'Loading...') => {
    globalLoadingState.value.operations.add(operationId)
    globalLoadingState.value.isLoading = true
    globalLoadingState.value.message = message
  }

  const finishGlobalLoading = (operationId) => {
    globalLoadingState.value.operations.delete(operationId)

    // If no more operations, finish loading
    if (globalLoadingState.value.operations.size === 0) {
      globalLoadingState.value.isLoading = false
      globalLoadingState.value.message = ''
    }
  }

  const clearAllLoading = () => {
    globalLoadingState.value.operations.clear()
    globalLoadingState.value.isLoading = false
    globalLoadingState.value.message = ''
  }

  return {
    globalLoadingState: readonly(globalLoadingState),
    startGlobalLoading,
    finishGlobalLoading,
    clearAllLoading
  }
}
