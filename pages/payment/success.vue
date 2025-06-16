<script setup>
const orderNumber = ref(
    Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0'),
)

// Navigate to orders page
const goToOrders = () => {
    // In a real app, this would navigate to the orders page
    console.log('Navigate to orders page')
}
</script>
<template>
    <el-row class="success__grid">
        <div class="confirmation">
            <div class="success-icon">
                <el-icon><CircleCheckFilled /></el-icon>
            </div>
            <h3>Payment Successful!</h3>
            <p>Your order has been placed and will be processed soon.</p>
            <p class="order-number">Order #: ORD-{{ orderNumber }}</p>
            <p>
                A confirmation email has been sent to
                {{ ruleForm.email }}
            </p>
            <el-button type="primary" size="large" @click="goToOrders"
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

<style lang="scss">
.el-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.success__grid {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.success-btn {
    margin-top: 20px;
}

.success-text {
    font-size: 20px;
}
.confirmation {
    text-align: center;
    padding: 2rem 0;
}
</style>
