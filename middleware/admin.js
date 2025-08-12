export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  if (!authStore.user) {
    await authStore.fetchUser()
  }

  if (!authStore.user || authStore.user.role !== 'admin') {
    console.log('Redirecting: user not admin or not present', authStore.user)
    return navigateTo('/')
  }
})
