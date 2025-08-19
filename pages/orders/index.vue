<!-- <script setup>
import Spinner from '~/components/icons/Spinner.vue'

const orderStore = useOrderStore()
// const {
//     data: orders,
//     pending,
//     error,
// } = await useAsyncData('orders', async () => {
//     const { data: orders } = await useFetch('/api/orders')
//     console.log(orders.value, 'data')
//     return orders.value || []
// })
//

const orders = computed(() => orderStore.orders)
const isLoading = computed(() => orderStore.isLoading)

// Initial fetch with SSR support
// await orderStore.fetchOrders()

// const refreshOrders = async () => {
//     await orderStore.refreshOrders()
// }

// const retryFetch = async () => {
//     await orderStore.fetchOrdersWithRetry()
// }
//
onMounted(async () => {
    await orderStore.fetchOrders()
})
</script>

<template>
    <p>Order Page</p>
    <LoadingSpinner
        v-if="isLoading && !orders.length"
        type="dots"
        message="Loading your orders..."
    />
    <div v-else>
        <pre>
        {{ orders }}
    </pre
        >
    </div>
</template> -->

<script setup>
import LoadingSpinner from '~/components/ui/LoadingSpinner.vue'

const orderStore = useOrderStore()
const search = ref('')

const filteredOrders = computed(() =>
    orderStore.orders.filter((order) =>
        order.id.toLowerCase().includes(search.value.toLowerCase()),
    ),
)

onMounted(async () => {
    await orderStore.fetchOrders()
})
</script>

<template>
    <div class="p-6 w-full">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
            <el-breadcrumb-item>My Orders</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="order-header flex justify-between items-end mb-4">
            <div class="order-desc">
                <h2 class="text-2xl font-semibold mt-4 mb-1 font-briscolade">
                    My Orders
                </h2>
                <p class="mb-6 text-gray-500">Track and manage your orders</p>
            </div>

            <div class="order-search">
                <el-input
                    v-model="search"
                    placeholder="Search orders..."
                    prefix-icon="el-icon-search"
                    class="mb-4 w-96"
                />
            </div>
        </div>

        <LoadingSpinner
            v-if="orderStore.isLoading && !orderStore.orders.length"
            type="pulse"
            message="Fetching orders..."
        />
        <!-- <div v-else-if="orderStore.orders.length < 1" class="text-center mt-8">
            <p class="text-gray-500">No orders found</p>
        </div> -->
        <template v-else>
            <div
                v-for="order in filteredOrders"
                :key="order.orderId"
                class="mb-6"
            >
                <el-card shadow="never">
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="font-semibold">
                                Order {{ order.orderId }}
                            </div>
                            <div class="text-gray-500 text-sm">
                                Placed on {{ order.createdAt }}
                            </div>
                        </div>
                        <div class="text-right">
                            <el-tag
                                :type="
                                    order.status === 'Delivered'
                                        ? 'success'
                                        : 'info'
                                "
                            >
                                {{ order.status }}
                            </el-tag>
                            <div class="mt-2 font-semibold">
                                ${{ order.amount }}
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ order.items?.length }} item<span
                                    v-if="order.items?.length > 1"
                                    >s</span
                                >
                            </div>
                        </div>
                    </div>

                    <el-divider></el-divider>

                    <div
                        v-for="item in order.items"
                        :key="item.id"
                        class="mb-3"
                    >
                        <div class="font-medium">{{ item.name }}</div>
                        <div class="text-sm text-gray-500">
                            {{ item.variant }}, {{ item.bundle }} • Qty:
                            {{ item.quantity }}
                        </div>
                    </div>

                    <div class="flex justify-between items-end">
                        <div v-if="order.status === 'Delivered'">
                            Delivered: 1/17/2024
                        </div>
                        <div
                            v-if="order.tracking"
                            class="text-sm text-gray-500 mb-2"
                        >
                            <strong>Tracking:</strong>
                            {{ order?.tracking || 'N/A' }}<br />
                            <strong>Estimated delivery:</strong>
                            {{ order?.eta || 'N/A' }}
                        </div>

                        <div class="flex justify-end space-x-2">
                            <el-button v-if="order?.tracking" type="primary"
                                >Track Package</el-button
                            >
                            <el-button
                                v-if="order.status === 'Delivered'"
                                type="default"
                                >Reorder</el-button
                            >
                        </div>
                    </div>
                </el-card>
            </div>
        </template>
    </div>
</template>

<style scoped>
.el-card {
    border-radius: 12px;
}
</style>
