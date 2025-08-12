<template>
    <aside class="admin-sidebar">
        <nav>
            <ul>
                <li
                    v-for="tab in tabs"
                    :key="tab.name"
                    :class="{ active: active === tab.name }"
                >
                    <span class="icon">
                        <el-icon :size="22">
                            <component :is="tab.icon" />
                        </el-icon>
                    </span>
                    <NuxtLink class="label" :to="`/admin/${tab.name}`">
                        {{ tab.label }}</NuxtLink
                    >
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
import { User, Box, Document } from '@element-plus/icons-vue'
const props = defineProps({
    active: {
        type: String,
        default: 'users',
    },
})

const tabs = [
    { name: 'users', label: 'Users', icon: User },
    { name: 'products', label: 'Products', icon: Box },
    { name: 'orders', label: 'Orders', icon: Document },
]
</script>

<style scoped lang="scss">
.admin-sidebar {
    height: 100vh;
    width: 220px;
    border-right: 1px solid $border-gray-200;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.admin-sidebar nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}
.admin-sidebar nav ul li {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0.75rem 2rem;
    cursor: pointer;
    color: #444;
    border-radius: 5px;
    margin-bottom: 8px;
    transition:
        background 0.18s,
        color 0.18s;

    a {
        text-decoration: none;
    }
}
.admin-sidebar nav ul li.active,
.admin-sidebar nav ul li:hover,
.admin-sidebar nav ul li.active a,
.admin-sidebar nav ul li:hover a {
    background: $off-black;
    color: $white;
    decoration: none;
}
.admin-sidebar .icon {
    display: flex;
    align-items: center;
    justify-content: center;
}
.admin-sidebar .label {
    font-weight: 500;
    font-family: 'Bricolage Grotesque', Arial, sans-serif;
}
</style>
