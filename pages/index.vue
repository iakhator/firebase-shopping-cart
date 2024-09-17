<template>
  <product-list :products="products" />
</template>

<script setup>
import ProductList from '../components/ProductList'
import { nextTick } from 'vue'

const products = ref([])

async function fetchProducts() {
  try {
    const { data } = await useFetch('/api/products')
    products.value = data?.value?.products
  } catch (err) {
    console.error({ statusCode: 404, message: 'Product not found' })
  }
}

onMounted(async () => {
  await nextTick()
  await fetchProducts()
})
</script>
