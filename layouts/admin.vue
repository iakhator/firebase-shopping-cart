<template>
    <div class="admin-layout">
        <AdminSidebar :active="activeTab" @change="onTabChange" />
        <div class="admin-content">
            <slot />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AdminSidebar from '~/components/admin/AdminSidebar.vue'

const route = useRoute()
const router = useRouter()
const activeTab = ref(getActiveTab(route.path))

function getActiveTab(path) {
    if (path.startsWith('/admin/users')) return 'users'
    if (path.startsWith('/admin/products')) return 'products'
    if (path.startsWith('/admin/orders')) return 'orders'
    return 'users'
}

function onTabChange(tab) {
    activeTab.value = tab
    router.push(`/admin/${tab}`)
}

watch(
    () => route.path,
    (newPath) => {
        activeTab.value = getActiveTab(newPath)
    },
)
</script>

<style scoped>
.admin-layout {
    display: flex;
    min-height: 100vh;
    background: #f7f8fa;
}
.admin-content {
    flex: 1;
    padding: 2rem;
    background: #fff;
    border-radius: 16px;
    margin: 2rem;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
}
</style>
