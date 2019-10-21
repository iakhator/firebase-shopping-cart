import Vue from 'vue'

export function toUSD(value) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  return formatter.format(value)
}

const filters = { toUSD }

export default Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
