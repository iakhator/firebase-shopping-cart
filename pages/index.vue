<template>
    <product-list :products="products" :is-loading="productStore.isLoading" />
</template>

<script setup>
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
