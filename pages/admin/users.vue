<script setup>
import { ref, onMounted } from 'vue'
import AdminTable from '~/components/admin/AdminTable.vue'

const users = ref([])
const page = ref(1)
const pageSize = 20
const loading = ref(false)

async function loadUsers() {
    loading.value = true
    const res = await $fetch('/api/admin/users', {
        params: { page: page.value, pageSize },
    })
    users.value.push(...res.data)
    loading.value = false
}

onMounted(() => {
    loadUsers()
    setupObserver()
})

const userColumns = [
    { label: 'Name', key: 'displayName' },
    { label: 'Email', key: 'email' },
    { label: 'Role', key: 'role' },
    { label: 'Status', key: 'status' },
]

function setupObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                loadUsers()
            }
        },
        { threshold: 1.0 },
    )

    // Wait for DOM to render
    setTimeout(() => {
        const el = document.getElementById('infinite-scroll-trigger')
        if (el) observer.observe(el)
    }, 100)
}
</script>

<template>
    <AdminTable :columns="userColumns" :rows="users" />
    <div id="infinite-scroll-trigger" style="height: 1px"></div>
    <div v-if="loading" class="loading-spinner">Loading...</div>
    <!-- Infinite scroll trigger here -->
</template>
