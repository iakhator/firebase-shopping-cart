// plugins/filters.js

export default defineNuxtPlugin((nuxtApp) => {
  // Define the toUSD function as a global method
  nuxtApp.vueApp.config.globalProperties.$toUSD = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    })
    return formatter.format(value)
  }
})
