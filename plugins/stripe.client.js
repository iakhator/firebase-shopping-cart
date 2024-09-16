// plugins/stripe.js
import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    const stripe = await loadStripe(
      'pk_test_8dxhQBxL0Vr9t6ESfBAL7Zdt00jkJg8Znv'
    )
    nuxtApp.provide('stripe', stripe)
  }
})
