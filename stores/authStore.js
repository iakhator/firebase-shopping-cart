import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    errorMessage: null,
  }),

  actions: {
    async signIn({ email, password }) {
      this.errorMessage = ''
      try {
        const { $auth, $signInWithEmailAndPassword } = useNuxtApp()
        const userCredential = await $signInWithEmailAndPassword(
          $auth,
          email,
          password
        )
        const idToken = await userCredential.user.getIdToken()
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { idToken },
        })

        await this.restoreSession()

        return response.success
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

    async signUp({ email, password, displayName }) {
      this.errorMessage = ''
      try {
        const { $auth, $signInWithEmailAndPassword } = useNuxtApp()
        const userCredential = await $signInWithEmailAndPassword(
          $auth,
          email,
          password
        )
        await updateProfile(userCredential.user, { displayName })

        const idToken = await userCredential.user.getIdToken()
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { idToken },
          credentials: true,
        })

        await this.restoreSession()

        return response.success
      } catch (error) {
        if (error.code === 'auth/email-already-exists') {
          this.errorMessage = 'Email already exists'
          return
        }

        this.errorMessage = error.message
      }
    },

    async logout() {
      try {
        const { $auth } = useNuxtApp()
        const response = await $fetch('/api/auth/logout', { method: 'POST' })

        if (response.success) {
          await $auth.signOut()
          this.isAuthenticated = false
          this.user = null
        }
      } catch (error) {
        console.error(error)
      }
    },

    async restoreSession() {
      try {
        const response = await $fetch('/api/auth/session')
        this.isAuthenticated = response.authenticated
        this.user = response.user || null
      } catch (error) {
        this.isAuthenticated = false
      }
    },
  },
})
