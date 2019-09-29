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

  created() {
    this.itemId = this.$route.params.itemId
  }
}
</script>
