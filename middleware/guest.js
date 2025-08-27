export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()

  // If user is authenticated, redirect them away from auth pages
  if (authStore.authenticated) {
    return navigateTo('/')
  }
})
