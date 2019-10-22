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
    console.log(this.$route)
  }
}
</script>
