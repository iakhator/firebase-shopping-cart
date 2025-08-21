<template>
    <div class="order-list-container">
        <ElBreadcrumb separator="/">
            <ElBreadcrumbItem to="/">Home</ElBreadcrumbItem>
            <ElBreadcrumbItem>Orders</ElBreadcrumbItem>
        </ElBreadcrumb>
        <div class="mb-4">
            <h2 class="mb-2 font-briscolade text-2xl">My Orders</h2>
            <p class="text-gray-600">
                View and manage all your orders, track shipments, and review
                your purchase history.
            </p>
        </div>
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
        <LoadingSpinner
            v-if="isLoading"
            type="spinner"
            message="Loading orders..."
        />
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
                                {{
                                    $dayjs(order.createdAt).format(
                                        'MMMM D, YYYY',
                                    )
                                }}
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
                                            <p>
                                                Quantity:
                                                {{ item.quantity }}
                                            </p>
                                        </div>
                                        <div class="item-price">
                                            <p>
                                                {{
                                                    toUSD(
                                                        item.price *
                                                            item.quantity,
                                                    )
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="order-total">
                                <span>Total</span>
                                <span>{{ toUSD(order.amount / 100) }}</span>
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
                                    <p>
                                        {{ order.shippingAddress.street }}
                                    </p>
                                    <p>
                                        {{ order.shippingAddress.city }},
                                        {{ order.shippingAddress.state }}
                                        {{ order.shippingAddress.postalCode }}
                                    </p>
                                    <p>
                                        {{
                                            countryMap[
                                                order.shippingAddress.country
                                            ] || order.shippingAddress.country
                                        }}
                                    </p>
                                </div>
                            </div>

                            <div class="info-grid">
                                <div class="info-section">
                                    <h4 class="info-section-title">
                                        <el-icon><CreditCard /></el-icon>
                                        Payment Method
                                    </h4>
                                    <p>
                                        {{ order?.paymentMethod || 'N/A' }}
                                    </p>
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
                                            $dayjs(
                                                order.estimatedDelivery,
                                            ).format('MMMM D, YYYY')
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
import LoadingSpinner from '~/components/ui/LoadingSpinner.vue'

// import { countryMap } from '~/utils'
const { toUSD } = useCurrency()
const { orders, isLoading, error, fetchOrders } = useOrderStore()
// const orderStore = useOrderStore()
const { $dayjs } = useNuxtApp()

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
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
]

const selectedFilter = ref('all')
const expandedOrderId = ref(null)

onMounted(async () => {
    await fetchOrders()
})

const filteredOrders = computed(() => {
    if (!Array.isArray(orders.value)) return []
    if (selectedFilter.value === 'all') return orders.value
    return orders.value.filter((order) => order.status === selectedFilter.value)
})

function toggleOrderExpansion(orderId) {
    expandedOrderId.value = expandedOrderId.value === orderId ? null : orderId
}
</script>

<style scoped lang="scss">
.filter-buttons {
    display: flex;
    gap: 0.5rem;
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
