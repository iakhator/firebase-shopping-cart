<template>
    <div class="app-layout">
        <el-container>
            <AppHeader />
            <!-- <Nav /> -->
            <div class="container-wrapper">
                <slot />
            </div>
        </el-container>
    </div>
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
    /* max-width: 1600px; */
    margin: 80px auto 30px auto;
    padding: 20px;
}
/*
.el-main {
    flex-basis: 100%;
    flex-grow: 0;
    flex-shrink: 0;
} */
</style>
