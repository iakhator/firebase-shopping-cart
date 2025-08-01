export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    await authStore.fetchUser()
  }

  const authRoutes = ['/auth/login', '/auth/register']

  if (authStore.isAuthenticated && authRoutes.includes(to.path)) {
    return navigateTo('/')
  }

  const protectedRoutes = ['/profile', '/orders', '/cart/checkout']

  if (
    !authStore.isAuthenticated &&
    protectedRoutes.some((route) => to.path.startsWith(route))
  ) {
    return navigateTo('/auth/login')
  }
})
