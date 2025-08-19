<template>
  <NuxtLoadingIndicator color="#ffcf4b" />
  <NuxtLayout>
    <NuxtPage />
    <Toaster
      richColors
      position="top-center"
      :toastOptions="{
        style: { height: '50px', padding: '5px 10px', top: '50px' },
      }"
    />
  </NuxtLayout>
</template>

<script setup>
import { Toaster } from 'vue-sonner'
</script>

<style></style>
