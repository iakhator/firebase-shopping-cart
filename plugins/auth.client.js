export default defineNuxtPlugin(() => {
  // Refresh token every 50 minutes
  setInterval(
    async () => {
      await $fetch('/api/auth/refresh', { method: 'POST' })
      console.log('Token refreshed')
    },
    50 * 60 * 1000,
  )
})
