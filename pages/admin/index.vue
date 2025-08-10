<template>
    <div v-if="isAdmin" class="admin-layout">
        <AdminSidebar :active="activeTab" @change="activeTab = $event" />
        <div class="admin-content">
            <div v-if="activeTab === 'users'">
                <AdminTable
                    :columns="userColumns"
                    :rows="users"
                    @changeRole="changeUserRole"
                />
            </div>
            <div v-if="activeTab === 'products'">
                <AdminTable
                    :columns="productColumns"
                    :rows="products"
                    @add="showProductForm = true"
                    @edit="editProduct"
                    @delete="deleteProduct"
                />
                <ProductForm
                    v-if="showProductForm"
                    @save="addProduct"
                    @close="showProductForm = false"
                />
            </div>
            <div v-if="activeTab === 'orders'">
                <AdminTable
                    :columns="orderColumns"
                    :rows="orders"
                    @updateStatus="updateOrderStatus"
                    @fulfill="fulfillOrder"
                />
            </div>
        </div>
    </div>
    <div v-else class="forbidden">
        <div class="forbidden-card">
            <h2>Forbidden</h2>
            <p>You do not have permission to access this page.</p>
            <UIButton label="Go Home" @click="goHome" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AdminSidebar from '~/components/admin/AdminSidebar.vue'
import AdminTable from '~/components/admin/AdminTable.vue'
import ProductForm from '~/components/admin/ProductForm.vue'
import UIButton from '~/components/ui/UIButton.vue'

const router = useRouter()
const activeTab = ref('users')
const isAdmin = ref(true)
const showProductForm = ref(false)

// Dummy columns and rows for scaffolding
const userColumns = [
    { label: 'Name', key: 'displayName' },
    { label: 'Email', key: 'email' },
    { label: 'Role', key: 'role' },
    { label: 'Status', key: 'status' },
]
const users = ref([])

const productColumns = [
    { label: 'Name', key: 'name' },
    { label: 'Price', key: 'price' },
    { label: 'Stock', key: 'stock' },
    { label: 'Category', key: 'category' },
]
const products = ref([])

const orderColumns = [
    { label: 'Order ID', key: 'id' },
    { label: 'User', key: 'user' },
    { label: 'Status', key: 'status' },
    { label: 'Total', key: 'total' },
    { label: 'Date', key: 'date' },
]
const orders = ref([])

function goHome() {
    router.push('/')
}

// RBAC check: fetch current user and check role
onMounted(async () => {
    // try {
    //     // Replace with your actual API/session logic
    //     const res = await $fetch('/api/auth/me')
    //     if (res && res.user && res.user.role === 'admin') {
    //         isAdmin.value = true
    //         // Fetch data for tables (stubbed here)
    //         users.value = res.users || []
    //         products.value = res.products || []
    //         orders.value = res.orders || []
    //     } else {
    //         isAdmin.value = false
    //     }
    // } catch (err) {
    //     isAdmin.value = false
    // }
})

// Dummy handlers for scaffolding
function changeUserRole(userId, newRole) {}
function addProduct(product) {}
function editProduct(product) {}
function deleteProduct(productId) {}
function updateOrderStatus(orderId, newStatus) {}
function fulfillOrder(orderId) {}
</script>

<style scoped>
.admin-layout {
    display: flex;
    gap: 10px;
    min-height: 100vh;
    width: 100%;
}
.admin-content {
    flex: 1;
    padding: 2rem;
    background: #fff;
    border-radius: 5px;
}
.forbidden {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f8fa;
}
.forbidden-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
    padding: 2.5rem 2rem;
    max-width: 400px;
    width: 100%;
    text-align: center;
}
</style>
