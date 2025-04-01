<template>
    <product-list :products="categoryProducts" />
</template>

<script setup>
import ProductList from '~/components/ProductList'

defineOptions({
    name: ProductList,
})

const { data: categoryProducts } = await useAsyncData('categoryProducts', () =>
    $fetch(`/api/category/${route.params.productId}`),
)
</script>
