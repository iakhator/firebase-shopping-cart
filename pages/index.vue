<template>
    <product-list :products="products" :isLoading="productStore.isLoading" />
</template>

<script setup>
import ProductList from '../components/ProductList'

const route = useRoute()
const productStore = useProductStore()

const filters = computed(() => {
    return {
        brands: route.query.brands?.split(',') || [],
        priceRanges: route.query.priceRanges?.split(',') || [],
        storage: route.query.storage?.split(',') || [],
    }
})

watch(
    filters,
    (newFilters) => {
        productStore.getAllProducts(newFilters)
    },
    { deep: true, immediate: true },
)
const products = computed(() => productStore.getProducts)
</script>
