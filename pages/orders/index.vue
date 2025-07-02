<script setup>
asyncData() {
    const { data } = await useFetch('/api/orders')

    console.log(data, 'data')
    return { orders: data.value }
  }
</script>

<template>
    <p>Order Page</p>
</template>
