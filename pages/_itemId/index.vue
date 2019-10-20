<template>
  <div>{{ itemId }}</div>
</template>

<script>
export default {
  data() {
    return {
      itemId: ''
    }
  },

  async asyncData({ $axios }) {
    const categories = await $axios.$get('/api/categories')
    console.log(categories)
  },

  created() {
    this.itemId = this.$route.params.itemId
  }
}
</script>
