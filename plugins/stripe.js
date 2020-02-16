import Vue from 'vue'

if (process.client) {
  Vue.prototype.$stripe = window.Stripe(process.env.STRIPE_KEY)
}
