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
    <Spinner v-if="isLoading && !orders.length" />
    <div v-else>
        <pre>
        {{ orders }}
    </pre
        >
    </div>
</template> -->

<template>
    <div class="p-6 w-full">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
            <el-breadcrumb-item>My Orders</el-breadcrumb-item>
        </el-breadcrumb>

        <h2 class="text-2xl font-semibold mt-4 mb-1">My Orders</h2>
        <p class="mb-6 text-gray-500">Track and manage your orders</p>

        <el-input
            v-model="search"
            placeholder="Search orders..."
            prefix-icon="el-icon-search"
            class="mb-4 w-96"
        />

        <div v-for="order in filteredOrders" :key="order.id" class="mb-6">
            <el-card shadow="never">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-semibold">Order {{ order.id }}</div>
                        <div class="text-gray-500 text-sm">
                            Placed on {{ order.placed }}
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
                        <div class="mt-2 font-semibold">${{ order.total }}</div>
                        <div class="text-sm text-gray-500">
                            {{ order.items.length }} item<span
                                v-if="order.items.length > 1"
                                >s</span
                            >
                        </div>
                    </div>
                </div>

                <el-divider></el-divider>

                <div v-for="item in order.items" :key="item.name" class="mb-3">
                    <div class="font-medium">{{ item.name }}</div>
                    <div class="text-sm text-gray-500">{{ item.details }}</div>
                </div>

                <div class="flex justify-between">
                    <div if="item.status === 'Delivered'">
                        Delivered: 1/17/2024
                    </div>
                    <div
                        v-if="order.tracking"
                        class="text-sm text-gray-500 mb-2"
                    >
                        <strong>Tracking:</strong> {{ order.tracking }}<br />
                        <strong>Estimated delivery:</strong> {{ order.eta }}
                    </div>

                    <div class="flex justify-end space-x-2">
                        <el-button>View Details</el-button>
                        <el-button v-if="order.tracking" type="primary"
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
    </div>
</template>

<script setup>
const search = ref('')

const orders = ref([
    {
        id: 'ORD-2024-001',
        placed: 'January 15, 2024',
        status: 'Delivered',
        total: 1299.0,
        items: [
            {
                name: 'iPhone 15 Pro Max',
                details: 'Midnight Black, 256GB • Qty: 1',
            },
        ],
        delivered: '1/17/2024',
    },
    {
        id: 'ORD-2024-002',
        placed: 'January 20, 2024',
        status: 'Shipped',
        total: 2698.0,
        tracking: '1Z999AA1234567891',
        eta: '1/25/2024',
        items: [
            {
                name: 'Galaxy S24 Ultra',
                details: 'Titanium Gray, 512GB • Qty: 1',
            },
            {
                name: 'iPhone 15',
                details: 'Blue, 128GB • Qty: 1',
            },
        ],
    },
])

const filteredOrders = computed(() =>
    orders.value.filter((order) =>
        order.id.toLowerCase().includes(search.value.toLowerCase()),
    ),
)
</script>

<style scoped>
.el-card {
    border-radius: 12px;
}
</style>
