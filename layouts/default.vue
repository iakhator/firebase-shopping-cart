<template>
    <div class="app-layout">
        <el-container>
            <AppHeader />
            <div class="container-wrapper">
                <slot />
            </div>
        </el-container>
        <AppFooter />
    </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
