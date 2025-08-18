<template>
    <div class="admin-layout">
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1 class="sidebar-logo">🛒 Admin Panel</h1>
            </div>
            <nav class="sidebar-nav">
                <button
                    v-for="item in navItems"
                    :key="item.id"
                    @click="navigateToPage(item.id)"
                    :class="[
                        'nav-item',
                        currentPage === item.id ? 'active' : '',
                    ]"
                >
                    <span class="nav-icon">
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                    </span>
                    {{ item.label }}
                </button>
            </nav>
        </aside>

        <main class="main-content">
            <header class="top-bar">
                <div class="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="search-input"
                        v-model="searchQuery"
                    />
                </div>
                <div class="user-menu">
                    <button class="btn btn-outline">🔔</button>
                    <button class="btn btn-outline">👤 Admin</button>
                </div>
            </header>
            <div class="content-area">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
    PieChart,
    Box,
    ShoppingCart,
    UserFilled,
} from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const searchQuery = ref('')

const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'PieChart' },
    { id: 'orders', label: 'Orders', icon: 'Box' },
    { id: 'products', label: 'Products', icon: 'ShoppingCart' },
    { id: 'users', label: 'Users', icon: 'UserFilled' },
]

const getActivePage = (path) => {
    if (path.startsWith('/admin/dashboard')) return 'dashboard'
    if (path.startsWith('/admin/orders')) return 'orders'
    if (path.startsWith('/admin/products')) return 'products'
    if (path.startsWith('/admin/users')) return 'users'
    return 'dashboard'
}

const currentPage = ref(getActivePage(route.path))

function navigateToPage(page) {
    currentPage.value = page
    router.push(`/admin/${page}`)
}

watch(
    () => route.path,
    (newPath) => {
        currentPage.value = getActivePage(newPath)
    },
)
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_global.scss';

.admin-layout {
    display: flex;
    min-height: 100vh;
    background: $off-white;
}

.sidebar {
    width: 220px;
    background: $off-black;
    color: $white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
}

.sidebar-header {
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 1px solid $primary-color;
}

.sidebar-logo {
    font-size: 1.3rem;
    font-family: $font-stack-brand;
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
    color: $base-color;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
}

.nav-item {
    background: none;
    border: none;
    color: $white;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    text-align: left;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: background 0.2s;
}

.nav-item.active,
.nav-item:hover {
    background: $base-color;
    color: $off-black;
}

.nav-icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: $off-white;
}

.top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2rem 1.2rem 2rem;
    background: $white;
    border-bottom: 1px solid $text-gray-100;
}

.search-bar {
    flex: 1;
    max-width: 350px;
}

.search-input {
    width: 100%;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    border: 1px solid $text-gray-100;
    font-size: 1rem;
    outline: none;
    background: $off-white;
    color: $off-black;
}

.user-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.btn {
    background: none;
    border: 1px solid $text-gray-100;
    color: $off-black;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 1.1rem;
    cursor: pointer;
    transition:
        background 0.2s,
        border-color 0.2s;
}

.btn-outline:hover {
    background: $base-color;
    border-color: $off-black;
    color: $off-black;
}

.content-area {
    padding: 2rem;
    flex: 1;
    background: $off-white;
    min-height: 0;
}
</style>
