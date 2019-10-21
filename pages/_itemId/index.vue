<template>
  <product-list :products="categoryProducts" />
</template>

<script>
import ProductList from '../../components/ProductList'

export default {
  data() {
    return {
      itemId: ''
    }
  },

  components: {
    ProductList
  },

  async asyncData({ $axios, params }) {
    const categoryProducts = await $axios.$get(`/api/category/${params.itemId}`)
    return categoryProducts
  }
}
</script>
