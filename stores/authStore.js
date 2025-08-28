import { defineStore } from 'pinia'
import { ssrFetch } from '~/utils/ssrFetch'
import { useCartStore } from '~/stores/cartStore'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const authenticated = ref(false)
  const errorMessage = ref(null)

  async function signIn({ email, password }) {
    errorMessage.value = ''
    try {
      const { $auth, $signInWithEmailAndPassword } = useNuxtApp()
      const userCredential = await $signInWithEmailAndPassword(
        $auth,
        email,
        password,
      )

      const idToken = await userCredential.user.getIdToken()
      const refreshToken = userCredential.user.refreshToken
      await $fetch('/api/auth/session', {
        method: 'POST',
        body: { idToken, refreshToken },
      })

      await fetchUser()
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        errorMessage.value = 'User not found'
        return error.message
      }

      if (error.code === 'auth/invalid-value-email') {
        errorMessage.value = 'Invalid email'
        return error.message
      }

      if (error.code === 'auth/invalid-credential') {
        errorMessage.value = 'Invalid Login credentials'
        return error.message
      }

      this.errorMessage = error.message
      return error.message
    }
  }

  async function signUp({ email, password, firstName, lastName }) {
    try {
      const response = await $fetch('/api/auth/register', {
        method: 'POST',
        body: {
          email,
          password,
          lastName,
          firstName,
          emailVerified: false,
          displayName: `${firstName} ${lastName}`,
          createdDate: new Date().toISOString(),
          role: 'admin',
        },
      })

      // await this.fetchUser()

      return response
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        errorMessage.value = 'Email already in use'
        return
      }

      this.errorMessage = error.message
    }
  }

  async function logout() {
    try {
      const cartStore = useCartStore()
      const { $auth } = useNuxtApp()

      await $auth.signOut()
      const response = await $fetch('/api/auth/logout', {
        method: 'POST',
      })

      if (response.success) {
        authenticated.value = false
        user.value = null
        cartStore.fetchCart()
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchUser() {
    const cartStore = useCartStore()
    try {
      const response = await ssrFetch('/api/user', { method: 'GET' })
      authenticated.value = response.authenticated
      user.value = response.user || null
      cartStore.fetchCart()
    } catch (error) {
      console.error(error)
      authenticated.value = false
      user.value = null
    }
  }

  async function updateUser(data) {
    try {
      const response = await $fetch('/api/user', {
        method: 'POST',
        body: data,
        credentials: 'include',
      })

      return response.success || false
    } catch (error) {
      console.error(error)
    }
  }

  const isAuthenticatedUser = computed(() => {
    return authenticated.value && user.value.emailVerified
  })

  const isAdmin = computed(() => {
    return user.value && user.value.role === 'admin'
  })

  return {
    authenticated,
    errorMessage,
    user,
    signIn,
    signUp,
    logout,
    fetchUser,
    updateUser,
    isAuthenticatedUser,
    isAdmin,
  }
})
