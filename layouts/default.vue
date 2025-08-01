<template>
    <div class="app-layout">
        <el-container>
            <Header />
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
import Header from '~/components/ui/Header'
import AppFooter from '~/components/AppFooter'
</script>

<style scoped>
.app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container-wrapper {
    padding: 20px;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .container-wrapper {
        padding: 40px 20px;
        margin: 60px auto 30px auto;
        display: flex;
        /* gap: 20px; */
        align-items: flex-start;
        overflow-x: auto;
    }
}

@media (max-width: 767px) {
    .container-wrapper {
        padding: 16px;
        margin-top: 60px;
    }
}
</style>
