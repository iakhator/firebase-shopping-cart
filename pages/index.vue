<template>
  <product-list :products="products" />
</template>

<script>
import ProductList from '../components/ProductList'

export default {
  components: { ProductList },

  async asyncData({ $axios }) {
    const products = await $axios.$get('/api/products')
    return products
  }
}
</script>
