export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  if (!authStore.authenticated) {
    await authStore.fetchUser()
  }

  const authRoutes = ['/auth/login', '/auth/register']
  const protectedRoutes = ['/profile', '/orders']

  if (authStore.authenticated && authRoutes.includes(to.path)) {
    // await authStore.fetchUser()
    return await navigateTo('/')
  }

  if (
    !authStore.authenticated &&
    protectedRoutes.some((route) => to.path.startsWith(route))
  ) {
    return navigateTo('/auth/login')
  }
})
