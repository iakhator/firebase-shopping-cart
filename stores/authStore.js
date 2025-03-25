import { defineStore } from 'pinia'
import { useCartStore } from '~/stores/cartStore'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    errorMessage: null,
  }),

  actions: {
    async signIn({ email, password }) {
      this.errorMessage = ''
      console.log(email, password)
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

        await this.fetchUser()
      } catch (error) {
        if (error.code === 'auth/user-not-found') {
          this.errorMessage = 'User not found'
          return error.message
        }

        if (error.code === 'auth/invalid-credential') {
          this.errorMessage = 'Invalid Login  credentials'
          return
        }

        this.errorMessage = error.message
      }
    },

    async signUp({ email, password, firstName, lastName }) {
      try {
        const { $auth, $createUserWithEmailAndPassword } = useNuxtApp()
        const userCred = await $createUserWithEmailAndPassword(
          $auth,
          email,
          password,
        )
        const idToken = await userCred.user.getIdToken()
        const refreshToken = userCred.user.refreshToken

        const response = await $fetch('/api/auth/session', {
          method: 'POST',
          body: { idToken, refreshToken },
        })

        await $fetch('/api/user', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${idToken}`, // Secure with token
          },
          body: {
            uid: userCred.user.uid,
            email: userCred.user.email,
            firstName: firstName,
            lastName: lastName,
            createdDate: new Date().toISOString(),
          },
        })

        await this.fetchUser()

        return response.success
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.errorMessage = 'Email already in use'
          return
        }

        this.errorMessage = error.message
      }
    },

    async logout() {
      try {
        const cartStore = useCartStore()
        // const { $auth } = useNuxtApp()

        // await $auth.signOut()
        const response = await $fetch('/api/auth/logout', { method: 'POST' })

        if (response.success) {
          this.isAuthenticated = false
          this.user = null
          cartStore.fetchCart()
        }
      } catch (error) {
        console.error(error)
      }
    },

    async fetchUser() {
      try {
        const cartStore = useCartStore()
        const response = await $fetch('/api/user', {
          credentials: 'include',
          onResponseError: (context) => {
            if (
              error.response?.status === 401 ||
              error.response?.status === 403
            ) {
              this.isAuthenticated = false
              this.user = null
              return false
            }
            throw error
          },
        })
        this.isAuthenticated = response.authenticated
        this.user = response.user || null
        cartStore.fetchCart()
      } catch (error) {
        this.isAuthenticated = false
        this.user = null
      }
    },
  },
})
