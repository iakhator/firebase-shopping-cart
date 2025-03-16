export default defineNuxtPlugin(() => {
  // Refresh token every 50 minutes
  console.log('auth token refreshed')
  setInterval(async () => {
    // await $fetch('/api/auth/refresh', { method: 'POST' });
    // console.log('Token refreshed')
  }, 3000)
})
