export default defineNuxtPlugin(() => {
  let refreshTimer = null

  async function refreshAuthToken() {
    try {
      const response = await $fetch('/api/auth/refresh', {
        method: 'POST',
      })

      if (response.success) {
        console.info('[Auth] Token refreshed')
      }
      // else {
      //   console.error('Failed to refresh token:', response.message)
      // }
    } catch (error) {
      console.error('[Auth] Failed to refresh token:', error)
    }
  }

  function startRefreshTimer() {
    if (refreshTimer) {
      clearInterval(refreshTimer)
    }

    refreshTimer = setInterval(
      () => {
        console.log('Refreshing auth token...')
        refreshAuthToken()
      },
      30 * 60 * 1000,
    ) // 50 minutes in milliseconds
  }

  // function stopRefreshTimer() {
  //   if (refreshTimer) {
  //     clearInterval(refreshTimer)
  //     refreshTimer = null
  //   }
  // }

  // Start the timer when the plugin is initialized
  startRefreshTimer()
})
