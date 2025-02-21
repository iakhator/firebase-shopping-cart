import { useAuthStore } from '~/stores/authStore'

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  if (!authStore.isAuthenticated) {
    await authStore.fetchUser()
  }
})
