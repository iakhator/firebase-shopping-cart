<template>
  <product-list :products="categoryProducts" />
</template>

<script>
import ProductList from '../../components/ProductList'

export default {
  components: {
    ProductList
  },

  data() {
    return {
      productId: ''
    }
  },

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get(`/api/category/${params.productId}`)
    return { categoryProducts: data }
  }
}
</script>
