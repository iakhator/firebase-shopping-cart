<template>
    <product-list :products="products" />
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

await productStore.getAllProducts(filters.value)

watch(
    () => route.query,
    () => {
        console.log('Products updated')
        productStore.getAllProducts(filters.value)
    },
)
const products = computed(() => productStore.getProducts)
</script>
