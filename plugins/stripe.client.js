// plugins/stripe.js
import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  // if (import.meta.client) {
  const stripe = await loadStripe(config.public.STRIPE_CLIENT_KEY)
  nuxtApp.provide('stripe', stripe)
  // }
})
