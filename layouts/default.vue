<template>
  <el-container>
    <Nav />
    <div class="container-wrapper">
      <slot />
    </div>
  </el-container>
</template>

<script setup>
import Nav from '~/components/Nav'
</script>

<style scoped>
.container-wrapper {
  width: 1600px;
  margin: 130px auto 30px auto;
}
</style>
