<template>
  <div>user profile {{ userId }}</div>
</template>

<script>
export default {
  middleware: 'auth',

  data() {
    return {
      userId: ''
    }
  },

  created() {
    this.userId = this.$route.params.userId
  }
}
</script>
