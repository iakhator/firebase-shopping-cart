<template>
    <ProductList :products="categoryProducts" />
</template>

<script setup>
const route = useRoute()
const productId = ref('')
const categoryProducts = ref([])

onMounted(async () => {
    const result = await $fetch(`/api/categories/${route.params.categoryId}`)
    categoryProducts.value = result.products
})
</script>
