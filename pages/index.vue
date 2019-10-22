<template>
  <product-list :products="products" />
</template>

<script>
import ProductList from '../components/ProductList'

export default {
  components: { ProductList },

  async asyncData({ $axios }) {
    const { data } = await $axios.$get('/api/products')
    return { products: data }
  }
}
</script>
