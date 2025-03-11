<template>
    <AppHeader />
    <el-container class="app-layout">
        <!-- <Nav /> -->
        <el-main class="container-wrapper">
            <slot />
        </el-main>
    </el-container>
</template>

<script setup>
import Nav from '~/components/Nav'
import AppHeader from '~/components/AppHeader'
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
}

.container-wrapper {
    width: 1600px;
    max-width: 1600px;
    margin: 30px auto;
}
</style>
