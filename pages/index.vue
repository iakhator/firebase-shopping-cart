<template>
  <product-list :products="products" />
</template>

<script setup>
import ProductList from '../components/ProductList'
const productStore = useProductStore()

const products = computed(() => productStore.products)

productStore.getAllProducts()
</script>
