<template>
  <product-list :products="products" />
</template>

<script>
import ProductList from '../components/ProductList'

export default {
  components: { ProductList },

  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.$get('/api/products')
      return { products: data }
    } catch (err) {
      error({ statusCode: 404, message: 'Product not found' })
    }
  }
}
</script>
