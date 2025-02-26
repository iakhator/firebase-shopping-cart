<template>
  <div>user profile {{ userId }}</div>
</template>

<script setup>
const route = useRoute()
const userId = route.params.userId
</script>
