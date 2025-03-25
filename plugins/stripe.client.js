// plugins/stripe.js
import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  const stripe = await loadStripe(useRuntimeConfig().public.STRIPE_CLIENT_KEY)
  nuxtApp.provide('stripe', stripe)
})
