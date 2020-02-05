import Vue from 'vue'

if (process.browser) {
  Vue.prototype.$stripe = window.Stripe('pk_test_8dxhQBxL0Vr9t6ESfBAL7Zdt00jkJg8Znv')
}
