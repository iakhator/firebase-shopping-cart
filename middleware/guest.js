export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  // If user is authenticated, redirect them away from auth pages
  if (authStore.isAuthenticated) {
    return navigateTo('/')
  }
})
