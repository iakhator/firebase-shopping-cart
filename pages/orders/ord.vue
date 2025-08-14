<template>
    <div class="order-list-container">
        <div class="filter-bar">
            <div class="filter-buttons">
                <UIButton
                    v-for="option in filterOptions"
                    :key="option.value"
                    :label="option.label"
                    size="small"
                    variant="success"
                    style="flex-basis: fit-content"
                    @click="selectedFilter = option.value"
                    :type="
                        selectedFilter === option.value ? 'primary' : 'default'
                    "
                >
                </UIButton>
            </div>
        </div>
        <Spinner v-if="orderStore.isLoading" />
        <div v-else-if="!filteredOrders?.length" class="empty-state">
            <el-icon><Box /></el-icon>
            <h3>No orders found</h3>
            <p>Start shopping to fill your cart!</p>
        </div>

        <div class="orders-container" v-else>
            <div
                v-for="order in filteredOrders"
                :key="order.id"
                class="order-card"
            >
                <div class="order-header">
                    <div class="order-header-left">
                        <el-button
                            @click="toggleOrderExpansion(order.id)"
                            circle
                            size="small"
                            class="expand-button"
                        >
                            <el-icon>
                                <Plus
                                    :class="{
                                        rotated: expandedOrderId === order.id,
                                    }"
                                />
                            </el-icon>
                        </el-button>
                        <div class="order-info">
                            <h3>{{ order.id }}</h3>
                            <p>
                                Ordered on
                                {{ formatDate(order.createdAt) }}
                            </p>
                        </div>
                    </div>
                    <div
                        class="status-badge"
                        :class="statusConfig[order.status]?.className"
                    >
                        <el-icon>
                            <component
                                :is="statusConfig[order.status]?.icon"
                                class="status-icon"
                            />
                        </el-icon>
                        {{ statusConfig[order.status]?.label }}
                    </div>
                </div>

                <el-collapse-transition>
                    <div
                        v-if="expandedOrderId === order.id"
                        class="order-details"
                    >
                        <div class="order-details-content">
                            <div>
                                <h4 class="section-title">Order Items</h4>
                                <div class="order-items">
                                    <div
                                        v-for="(item, idx) in order.items"
                                        :key="idx"
                                        class="order-item"
                                    >
                                        <img
                                            :src="item.imageUrl || ''"
                                            :alt="item.name"
                                            class="item-image"
                                        />
                                        <div class="item-info">
                                            <h5>{{ item.name }}</h5>
                                            <p>Quantity: {{ item.quantity }}</p>
                                        </div>
                                        <div class="item-price">
                                            <p>
                                                ${{
                                                    (
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="order-total">
                                <span>Total</span>
                                <span>${{ order.amount.toFixed(2) }}</span>
                            </div>

                            <div class="info-section">
                                <h4 class="info-section-title">
                                    <el-icon><User /></el-icon>
                                    Customer Information
                                </h4>
                                <div class="customer-info">
                                    <p class="customer-name">
                                        {{ order.customer?.name }}
                                    </p>
                                    <div class="contact-info">
                                        <el-icon><Message /></el-icon>
                                        {{ order.customer?.email || 'N/A' }}
                                    </div>
                                    <div class="contact-info">
                                        <el-icon><Phone /></el-icon>
                                        {{ order.customer?.phone || 'N/A' }}
                                    </div>
                                </div>
                            </div>

                            <div class="info-section">
                                <h4 class="info-section-title">
                                    <el-icon><Location /></el-icon>
                                    Shipping Address
                                </h4>
                                <div class="address-info">
                                    <p>{{ order.shippingAddress.street }}</p>
                                    <p>
                                        {{ order.shippingAddress.city }},
                                        {{ order.shippingAddress.state }}
                                        {{ order.shippingAddress.postalCode }}
                                    </p>
                                    <p>{{ order.shippingAddress.country }}</p>
                                </div>
                            </div>

                            <div class="info-grid">
                                <div class="info-section">
                                    <h4 class="info-section-title">
                                        <el-icon><CreditCard /></el-icon>
                                        Payment Method
                                    </h4>
                                    <p>{{ order?.paymentMethod || 'N/A' }}</p>
                                </div>
                                <div
                                    v-if="order?.estimatedDelivery"
                                    class="info-section"
                                >
                                    <h4 class="info-section-title">
                                        <el-icon><Calendar /></el-icon>
                                        Estimated Delivery
                                    </h4>
                                    <p>
                                        {{
                                            formatDate(order.estimatedDelivery)
                                        }}
                                    </p>
                                </div>
                            </div>

                            <div v-if="order?.orderNotes" class="order-notes">
                                <h4>Order Notes</h4>
                                <p>{{ order.orderNotes }}</p>
                            </div>

                            <div
                                v-if="order?.trackingNumber"
                                class="tracking-info"
                            >
                                <el-icon><Location /></el-icon>
                                <span>Tracking:</span>
                                <span class="tracking-number">{{
                                    order.trackingNumber
                                }}</span>
                            </div>

                            <div class="action-buttons">
                                <UIButton
                                    v-if="order?.status === 'delivered'"
                                    label="Reorder"
                                    style="flex-basis: fit-content"
                                >
                                    <template #icon>
                                        <el-icon><Refresh /></el-icon>
                                    </template>
                                    Reorder
                                </UIButton>

                                <UIButton
                                    v-if="
                                        (order?.status === 'shipped' ||
                                            order.status === 'pending') &&
                                        order.trackingNumber
                                    "
                                    label="Track Shipment"
                                    variant="success"
                                    style="flex-basis: fit-content"
                                >
                                    <template #icon>
                                        <el-icon><Van /></el-icon>
                                    </template>
                                    Reorder
                                </UIButton>
                            </div>
                        </div>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    Box,
    Van,
    Check,
    Close,
    Clock,
    Refresh,
    Location,
    Plus,
    Calendar,
    CreditCard,
    User,
    Phone,
    Message,
} from '@element-plus/icons-vue'
import Spinner from '~/components/icons/Spinner.vue'

const orderStore = useOrderStore()

const statusConfig = {
    processing: {
        label: 'Processing',
        icon: Clock,
        className: 'status-pending',
    },
    shipped: {
        label: 'Shipped',
        icon: Van,
        className: 'status-shipped',
    },
    delivered: {
        label: 'Delivered',
        icon: Check,
        className: 'status-delivered',
    },
    cancelled: {
        label: 'Cancelled',
        icon: Close,
        className: 'status-cancelled',
    },
}

const filterOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
]

const mockOrders = [
    {
        id: '1',
        orderNumber: 'ORD-2024-001',
        date: '2024-01-15',
        items: [
            {
                name: 'Wireless Headphones',
                quantity: 1,
                price: 199.99,
                image: '/placeholder.svg?height=60&width=60',
            },
            {
                name: 'Phone Case',
                quantity: 2,
                price: 24.99,
                image: '/placeholder.svg?height=60&width=60',
            },
        ],
        total: 249.97,
        status: 'delivered',
        trackingNumber: 'TRK123456789',
        customer: {
            name: 'John Smith',
            email: 'john.smith@email.com',
            phone: '+1 (555) 123-4567',
        },
        shippingAddress: {
            street: '123 Main Street, Apt 4B',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            country: 'United States',
        },
        paymentMethod: 'Visa ending in 4242',
        estimatedDelivery: '2024-01-18',
        orderNotes: 'Leave package at front door',
    },
    {
        id: '2',
        orderNumber: 'ORD-2024-002',
        date: '2024-01-18',
        items: [
            {
                name: 'Laptop Stand',
                quantity: 1,
                price: 89.99,
                image: '/placeholder.svg?height=60&width=60',
            },
        ],
        total: 89.99,
        status: 'shipped',
        trackingNumber: 'TRK987654321',
        customer: {
            name: 'Sarah Johnson',
            email: 'sarah.j@email.com',
            phone: '+1 (555) 987-6543',
        },
        shippingAddress: {
            street: '456 Oak Avenue',
            city: 'Los Angeles',
            state: 'CA',
            zipCode: '90210',
            country: 'United States',
        },
        paymentMethod: 'Mastercard ending in 8888',
        estimatedDelivery: '2024-01-22',
    },
    {
        id: '3',
        orderNumber: 'ORD-2024-003',
        date: '2024-01-20',
        items: [
            {
                name: 'Bluetooth Speaker',
                quantity: 1,
                price: 149.99,
                image: '/placeholder.svg?height=60&width=60',
            },
            {
                name: 'USB Cable',
                quantity: 3,
                price: 12.99,
                image: '/placeholder.svg?height=60&width=60',
            },
        ],
        total: 188.96,
        status: 'pending',
        customer: {
            name: 'Mike Davis',
            email: 'mike.davis@email.com',
            phone: '+1 (555) 456-7890',
        },
        shippingAddress: {
            street: '789 Pine Street',
            city: 'Chicago',
            state: 'IL',
            zipCode: '60601',
            country: 'United States',
        },
        paymentMethod: 'PayPal',
        estimatedDelivery: '2024-01-25',
    },
    {
        id: '4',
        orderNumber: 'ORD-2024-004',
        date: '2024-01-12',
        items: [
            {
                name: 'Smart Watch',
                quantity: 1,
                price: 299.99,
                image: '/placeholder.svg?height=60&width=60',
            },
        ],
        total: 299.99,
        status: 'cancelled',
        customer: {
            name: 'Emily Wilson',
            email: 'emily.w@email.com',
            phone: '+1 (555) 321-0987',
        },
        shippingAddress: {
            street: '321 Elm Drive',
            city: 'Miami',
            state: 'FL',
            zipCode: '33101',
            country: 'United States',
        },
        paymentMethod: 'American Express ending in 1234',
    },
]

const selectedFilter = ref('all')
const expandedOrderId = ref(null)

onMounted(async () => {
    await orderStore.fetchOrders()

    console.log(orderStore.orders, 'orderStore.orders')
})

const filteredOrders = computed(() => {
    if (!Array.isArray(orderStore.orders)) return []
    if (selectedFilter.value === 'all') return orderStore.orders
    return orderStore.orders.filter(
        (order) => order.status === selectedFilter.value,
    )
})

// const filteredOrders = computed(() => {
//     console.log(orderStore.orders, 'computed')
//     if (selectedFilter.value === 'all') return mockOrders
//     return orderStore.orders.filter(
//         (order) => order.status === selectedFilter.value,
//     )
// })

function toggleOrderExpansion(orderId) {
    expandedOrderId.value = expandedOrderId.value === orderId ? null : orderId
}

function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
</script>

<style scoped lang="scss">
.filter-buttons {
    display: flex;
    gap: 0.5rem;
}

/* .orders-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
} */

.order-card {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    transition: box-shadow 0.2s;
}

.order-card:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
}

.order-header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.expand-button {
    margin-right: 0.5rem;
}

.expand-icon.rotated {
    transform: rotate(90deg);
    transition: transform 0.2s;
}

.order-details {
    padding: 1.5rem;
    background: #fff;
}

.order-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
}

.order-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #f3f4f6;
    padding-bottom: 0.5rem;
}

.item-image {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 6px;
    background: #f3f4f6;
}

.item-info h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
}

.item-info p {
    margin: 0;
    font-size: 0.9rem;
    color: #6b7280;
}

.item-price p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #374151;
}

.order-total {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.info-section {
    margin-bottom: 1rem;
}

.customer-info {
    margin-left: 1.5rem;
}

.customer-name {
    font-weight: 500;
    margin-bottom: 0.2rem;
}

.contact-info {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.95rem;
    color: #6b7280;
}

.address-info {
    margin-left: 1.5rem;
    font-size: 0.95rem;
    color: #374151;
}

.info-grid {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
}

.order-notes {
    background: #f9fafb;
    padding: 0.7rem 1rem;
    border-radius: 6px;
    margin-bottom: 1rem;
}

.tracking-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    margin-bottom: 1rem;
}

.tracking-number {
    font-weight: 600;
    color: #2563eb;
}

.action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.action-button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
}

.empty-state .el-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #d1d5db;
}
</style>
