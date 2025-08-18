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

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
@import '@/assets/scss/_global.scss';

.page-header {
    margin-bottom: 2rem;
    .page-title {
        font-size: 2rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        margin-bottom: 0.3rem;
        font-family: $font-stack-brand;
    }
    .page-subtitle {
        color: $text-gray-600;
        font-size: 1rem;
        font-family: $font-stack-body;
    }
}

.stats-grid {
    margin-bottom: 2.5rem;
}

.stat-card {
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba($black, 0.04);
    padding: 1.5rem 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid $text-gray-100;
    .stat-label {
        font-size: 1rem;
        color: $text-gray-600;
        margin-bottom: 0.5rem;
        font-family: $font-stack-body;
    }
    .stat-value {
        font-size: 1.5rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        margin-bottom: 0.3rem;
        font-family: $font-stack-brand;
    }
    .stat-change {
        color: $base-color;
        font-size: 0.875rem;
        margin-top: 0.5rem;
        font-family: $font-stack-body;
    }
}

.data-table {
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba($black, 0.04);
    padding: 2rem 1.5rem;
    border: 1px solid $text-gray-100;
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.2rem;
        .table-title {
            font-size: 1.2rem;
            font-weight: $font-weight-bold;
            color: $text-primary;
            font-family: $font-stack-brand;
        }
        .el-button--primary {
            background: $base-color !important;
            color: $text-primary !important;
            border: none;
            font-weight: $font-weight-semibold;
        }
    }
}

:deep(.el-table) {
    background: $white;
    border-radius: 12px;
    font-family: $font-stack-body;
    th {
        color: $text-gray-600;
        font-weight: $font-weight-semibold;
        background: $off-white;
        border-bottom: 1px solid $text-gray-100;
    }
    td {
        color: $text-primary;
        border-bottom: 1px solid $text-gray-100;
        vertical-align: middle;
        background: $white;
    }

    .cell {
        line-height: 34px;
    }
}

.el-tag {
    font-weight: $font-weight-medium;
    border-radius: 12px;
    text-transform: capitalize;
}
</style>
