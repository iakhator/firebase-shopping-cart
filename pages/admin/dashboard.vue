<template>
    <div>
        <div class="page-header">
            <h1 class="page-title">Dashboard</h1>
            <p class="page-subtitle">
                Welcome back! Here's what's happening with your store.
            </p>
        </div>

        <div class="stats-grid">
            <div v-for="(stat, index) in stats" :key="index" class="stat-card">
                <div class="stat-label">{{ stat.label }}</div>
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-change">{{ stat.change }}</div>
            </div>
        </div>

        <div class="data-table">
            <div class="table-header">
                <h2 class="table-title">Recent Orders</h2>
                <button class="btn btn-primary" @click="goToOrders">
                    View All Orders
                </button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in recentOrders" :key="order.id">
                        <td>{{ order.id }}</td>
                        <td>{{ order.customer }}</td>
                        <td>{{ order.amount }}</td>
                        <td>
                            <span
                                :class="[
                                    'status-badge',
                                    `status-${order.status}`,
                                ]"
                            >
                                {{ capitalize(order.status) }}
                            </span>
                        </td>
                        <td>
                            <div class="actions">
                                <button
                                    class="btn btn-outline"
                                    @click="viewOrder(order.id)"
                                >
                                    View
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
    layout: 'admin',
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

<style lang="scss" scoped>
.page-header {
    margin-bottom: 2rem;
    .page-title {
        font-size: 2rem;
        font-weight: $font-weight-bold;
        color: $black;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
}

.stat-card {
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
        color: $black;
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
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
            color: $black;
            font-family: $font-stack-brand;
        }
        .btn-primary {
            background: $base-color;
            color: $black;
            border: none;
            padding: 0.5rem 1.2rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: $font-weight-semibold;
            cursor: pointer;
            transition: background 0.2s;
            &:hover {
                background: darken($base-color, 8%);
            }
        }
    }
    .table {
        width: 100%;
        border-collapse: collapse;
        th,
        td {
            padding: 0.7rem 1rem;
            text-align: left;
            font-size: 1rem;
            font-family: $font-stack-body;
        }
        th {
            color: $text-gray-600;
            font-weight: $font-weight-semibold;
            border-bottom: 1px solid $text-gray-100;
        }
        td {
            color: $black;
            border-bottom: 1px solid $text-gray-100;
            vertical-align: middle;
        }
        tr:last-child td {
            border-bottom: none;
        }
    }
    .status-badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 12px;
        font-size: 0.95rem;
        font-weight: $font-weight-medium;
        text-transform: capitalize;
        &.status-delivered {
            background: #dcfce7;
            color: #22c55e;
            border: 1px solid #22c55e;
        }
        &.status-shipped {
            background: #e0f2fe;
            color: #38bdf8;
            border: 1px solid #38bdf8;
        }
        &.status-processing {
            background: #fff7ed;
            color: #f59e42;
            border: 1px solid #f59e42;
        }
        &.status-pending {
            background: #fee2e2;
            color: #ef4444;
            border: 1px solid #ef4444;
        }
    }
    .actions {
        display: flex;
        gap: 0.5rem;
        .btn-outline {
            background: none;
            border: 1px solid $text-gray-100;
            color: $black;
            padding: 0.3rem 0.9rem;
            border-radius: 6px;
            font-size: 1rem;
            font-weight: $font-weight-medium;
            cursor: pointer;
            transition:
                background 0.2s,
                border-color 0.2s;
            &:hover {
                background: $base-color;
                border-color: $base-color;
                color: $black;
            }
        }
    }
}
</style>
