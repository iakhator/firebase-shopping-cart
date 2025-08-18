<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Edit } from '@element-plus/icons-vue'

definePageMeta({
    layout: 'admin',
    middleware: 'admin',
})

const router = useRouter()

const stats = ref([
    { label: 'Total Revenue', value: '$124,563', change: '+12.5%' },
    { label: 'Total Orders', value: '1,234', change: '+8.2%' },
    { label: 'Total Products', value: '456', change: '+3.1%' },
    { label: 'Total Users', value: '2,891', change: '+15.3%' },
])

const recentOrders = ref([
    {
        id: '#12345',
        customer: 'John Doe',
        amount: '$299.99',
        status: 'delivered',
    },
    {
        id: '#12346',
        customer: 'Jane Smith',
        amount: '$149.99',
        status: 'shipped',
    },
    {
        id: '#12347',
        customer: 'Bob Johnson',
        amount: '$89.99',
        status: 'processing',
    },
    {
        id: '#12348',
        customer: 'Alice Brown',
        amount: '$199.99',
        status: 'pending',
    },
])

function goToOrders() {
    router.push('/admin/orders')
}

function viewOrder(orderId) {
    router.push(`/admin/orders/${orderId.replace('#', '')}`)
}

function capitalize(str) {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
    <div>
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
            <p class="page-subtitle">
                Welcome back! Here's what's happening with your store.
            </p>
        </div>

        <el-row :gutter="20" class="stats-grid">
            <el-col
                v-for="(stat, index) in stats"
                :key="index"
                :xs="24"
                :sm="12"
                :md="6"
            >
                <el-card class="stat-card">
                    <div class="stat-label">{{ stat.label }}</div>
                    <div class="stat-value">{{ stat.value }}</div>
                    <div class="stat-change">{{ stat.change }}</div>
                </el-card>
            </el-col>
        </el-row>

        <div class="data-table">
            <div class="table-header">
                <h2 class="table-title">Recent Orders</h2>
                <div>
                    <el-button type="primary" @click="goToOrders"
                        >View All Orders</el-button
                    >
                </div>
            </div>
            <el-table :data="recentOrders" style="width: 100%">
                <el-table-column prop="id" label="Order ID" />
                <el-table-column prop="customer" label="Customer" />
                <el-table-column prop="amount" label="Amount" />
                <el-table-column prop="status" label="Status">
                    <template #default="{ row }">
                        <el-tag
                            :type="
                                row.status === 'delivered'
                                    ? 'success'
                                    : row.status === 'shipped'
                                      ? 'info'
                                      : row.status === 'processing'
                                        ? 'warning'
                                        : row.status === 'pending'
                                          ? 'danger'
                                          : 'default'
                            "
                        >
                            {{ capitalize(row.status) }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="Actions" width="120">
                    <template #default="{ row }">
                        <el-button
                            size="small"
                            circle
                            aria-label="View"
                            @click="viewOrder(row.id)"
                        >
                            <el-icon><Edit /></el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
