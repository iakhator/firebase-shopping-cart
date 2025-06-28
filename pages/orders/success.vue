<script setup>
import { CircleCheckFilled } from '@element-plus/icons-vue'
const route = useRoute()
const order = ref(null)

onMounted(async () => {
    const orderId = route.query.ref
    if (orderId) {
        const res = await $fetch(`/api/orders/${orderId}`, {
            method: 'GET',
        })
        order.value = res.order
    }
})

// Navigate to orders page
const goToOrders = () => {
    // In a real app, this would navigate to the orders page
    console.log('Navigate to orders page')
    // navigateTo(`/orders/${order.orderId}`)
}
</script>
<template>
    <el-row class="success__grid">
        <div class="confirmation">
            <div class="success-icon">
                <el-icon><CircleCheckFilled /></el-icon>
            </div>
            <h1>🎉 Thank You!</h1>
            <p>Your order has been placed below is the list of orderdetails.</p>

            <p v-if="order">
                Order #: <strong>{{ order.orderId }}</strong>
            </p>

            <div v-if="order">
                <h4>Items:</h4>
                <ul>
                    <li v-for="item in order.items" :key="item.id">
                        {{ item.name }} × {{ item.quantity }} — ${{
                            item.price
                        }}
                    </li>
                </ul>
                <p><strong>Total:</strong> ${{ order.amount }}</p>
            </div>
            <p>
                A confirmation email has been sent to
                <!-- {{ ruleForm.email }} -->
            </p>
            <el-button
                class="view-order-btn"
                type="primary"
                size="large"
                @click="goToOrders"
                >View Order Details</el-button
            >
        </div>
        <div class="success-btn">
            <el-button
                ><nuxt-link to="/">Continue shopping</nuxt-link></el-button
            >
        </div>
    </el-row>
</template>

<style lang="scss" scoped>
.success__grid {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.success-btn {
    margin: 20px 0;
}

.success-text {
    font-size: 20px;
}
.confirmation {
    text-align: center;
    padding: 2rem 0;
}

.view-order-btn {
    margin: 20px;
}

:deep(.el-icon) {
    font-size: 40px;
    color: green;
    margin-bottom: 10px;
}
</style>
