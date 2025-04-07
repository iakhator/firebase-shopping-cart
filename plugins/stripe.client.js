import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async () => {
  const stripe = await loadStripe(useRuntimeConfig().public.STRIPE_CLIENT_KEY)
  return {
    provide: { stripe },
  }
})
