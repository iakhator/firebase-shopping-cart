<script setup>
import { ref, computed } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'

definePageMeta({
    layout: 'admin',
    middleware: 'admin',
})

const showModal = ref(false)
const selectedOrder = ref(null)
const statusFilter = ref('')

const orders = ref([
    {
        id: '#12345',
        customer: 'John Doe',
        email: 'john@example.com',
        amount: '$299.99',
        status: 'pending',
        date: '2024-01-15',
        items: 2,
    },
    {
        id: '#12346',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        amount: '$149.99',
        status: 'processing',
        date: '2024-01-14',
        items: 1,
    },
    {
        id: '#12347',
        customer: 'Bob Johnson',
        email: 'bob@example.com',
        amount: '$89.99',
        status: 'shipped',
        date: '2024-01-13',
        items: 3,
    },
    {
        id: '#12348',
        customer: 'Alice Brown',
        email: 'alice@example.com',
        amount: '$199.99',
        status: 'delivered',
        date: '2024-01-12',
        items: 1,
    },
])

const filteredOrders = computed(() => {
    if (!statusFilter.value) return orders.value
    return orders.value.filter((order) => order.status === statusFilter.value)
})

function handleStatusUpdate(orderId, newStatus) {
    const order = orders.value.find((o) => o.id === orderId)
    if (order) order.status = newStatus
}

function handleDeleteOrder(orderId) {
    if (window.confirm('Are you sure you want to delete this order?')) {
        orders.value = orders.value.filter((o) => o.id !== orderId)
        if (selectedOrder.value && selectedOrder.value.id === orderId) {
            showModal.value = false
            selectedOrder.value = null
        }
    }
}

function openOrderModal(order) {
    selectedOrder.value = { ...order }
    showModal.value = true
}

function closeModal() {
    showModal.value = false
    selectedOrder.value = null
}

function updateOrder() {
    if (selectedOrder.value) {
        const idx = orders.value.findIndex(
            (o) => o.id === selectedOrder.value.id,
        )
        if (idx !== -1) {
            orders.value[idx] = { ...selectedOrder.value }
        }
        showModal.value = false
    }
}

function exportOrders() {
    window.alert('Exporting orders...')
}

function capitalize(str) {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
    <div>
        <div class="page-header">
            <h1 class="page-title">Orders Management</h1>
            <p class="page-subtitle">Manage and track all customer orders</p>
        </div>

        <div class="data-table">
            <div class="table-header">
                <h2 class="table-title">All Orders</h2>
                <div class="table-actions">
                    <el-select
                        v-model="statusFilter"
                        placeholder="All Status"
                        style="width: 160px"
                    >
                        <el-option label="All Status" value="" />
                        <el-option label="Pending" value="pending" />
                        <el-option label="Processing" value="processing" />
                        <el-option label="Shipped" value="shipped" />
                        <el-option label="Delivered" value="delivered" />
                        <el-option label="Cancelled" value="cancelled" />
                    </el-select>
                    <el-button type="primary" @click="exportOrders"
                        >Export Orders</el-button
                    >
                </div>
            </div>
            <el-table :data="filteredOrders" style="width: 100%">
                <el-table-column prop="id" label="Order ID" />
                <el-table-column prop="customer" label="Customer" />
                <el-table-column prop="email" label="Email" />
                <el-table-column prop="amount" label="Amount" />
                <el-table-column prop="items" label="Items" />
                <el-table-column prop="date" label="Date" />
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
                <el-table-column label="Actions" width="250">
                    <template #default="{ row }">
                        <el-select
                            v-model="row.status"
                            size="small"
                            style="width: 110px; margin: 0 8px"
                            @change="handleStatusUpdate(row.id, row.status)"
                        >
                            <el-option label="Pending" value="pending" />
                            <el-option label="Processing" value="processing" />
                            <el-option label="Shipped" value="shipped" />
                            <el-option label="Delivered" value="delivered" />
                            <el-option label="Cancelled" value="cancelled" />
                        </el-select>
                        <el-button
                            size="small"
                            circle
                            aria-label="View"
                            @click="openOrderModal(row)"
                        >
                            <el-icon><Edit /></el-icon>
                        </el-button>
                        <el-button
                            size="small"
                            type="danger"
                            circle
                            aria-label="Delete"
                            @click="handleDeleteOrder(row.id)"
                        >
                            <el-icon><Delete /></el-icon>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog
            v-model="showModal"
            :title="selectedOrder ? `Order Details - ${selectedOrder.id}` : ''"
            width="500px"
        >
            <div v-if="selectedOrder">
                <el-descriptions :column="1" border>
                    <el-descriptions-item label="Customer">{{
                        selectedOrder.customer
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Email">{{
                        selectedOrder.email
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Amount">{{
                        selectedOrder.amount
                    }}</el-descriptions-item>
                    <el-descriptions-item label="Status">
                        <el-select
                            v-model="selectedOrder.status"
                            @change="
                                handleStatusUpdate(
                                    selectedOrder.id,
                                    selectedOrder.status,
                                )
                            "
                        >
                            <el-option label="Pending" value="pending" />
                            <el-option label="Processing" value="processing" />
                            <el-option label="Shipped" value="shipped" />
                            <el-option label="Delivered" value="delivered" />
                            <el-option label="Cancelled" value="cancelled" />
                        </el-select>
                    </el-descriptions-item>
                </el-descriptions>
                <div class="form-actions" style="margin-top: 1.5rem">
                    <el-button @click="closeModal">Close</el-button>
                    <el-button type="primary" @click="updateOrder"
                        >Update Order</el-button
                    >
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
.form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    .el-button {
        min-width: 120px;
    }
}

.el-dialog__header {
    .modal-title {
        font-size: 1.2rem;
        font-weight: $font-weight-bold;
        color: $text-primary;
        font-family: $font-stack-brand;
    }
}

.el-descriptions__label {
    font-weight: $font-weight-semibold;
    color: $text-gray-600;
    font-size: 0.95rem;
    font-family: $font-stack-body;
}

.el-input,
.el-select,
.el-textarea,
.el-input-number {
    font-size: 1rem;
    font-family: $font-stack-body;
    color: $text-primary;
    background: $off-white;
}

.el-dialog {
    border-radius: 12px;
    box-shadow: 0 2px 16px rgba($black, 0.12);
    min-width: 340px;
    max-width: 95vw;
}
</style>
