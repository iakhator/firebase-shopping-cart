export default defineNuxtPlugin(() => {
  let refreshTimer = null

  async function refreshAuthToken() {
    try {
      const response = await $fetch('/api/auth/refresh', {
        method: 'POST',
      })

      if (response.success) {
        console.log('Token refreshed successfully:', response.token)
      } else {
        console.error('Failed to refresh token:', response.message)
      }
    } catch (error) {
      console.error('Error refreshing token:', error)
    }
  }

  function startRefreshTimer() {
    // Clear any existing timer
    if (refreshTimer) {
      clearInterval(refreshTimer)
    }

    // Set a timer to refresh the token every 50 minutes (3000000 ms)
    refreshTimer = setInterval(
      () => {
        console.log('Refreshing auth token...')
        refreshAuthToken()
      },
      50 * 60 * 1000,
    ) // 50 minutes in milliseconds
  }

  function stopRefreshTimer() {
    if (refreshTimer) {
      clearInterval(refreshTimer)
      refreshTimer = null
    }
  }

  // Start the timer when the plugin is initialized
  startRefreshTimer()

  // Optionally expose the timer controls for other parts of the app
  return {
    provide: {
      authRefresh: {
        startRefreshTimer,
        stopRefreshTimer,
      },
    },
  }
})
