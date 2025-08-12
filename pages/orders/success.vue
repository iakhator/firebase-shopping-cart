<script setup>
import UIButton from '@/components/ui/UIButton.vue'
import { useOrderStore } from '@/stores/orderStore'
import { CreditCard, ArrowRight, Van } from '@element-plus/icons-vue'
import Spinner from '~/components/icons/Spinner.vue'

const route = useRoute()
const router = useRouter()

const orderId = route.query.ref
const orderStore = useOrderStore()

const order = computed(() => orderStore.order)
const isLoading = computed(() => orderStore.isLoading)

onMounted(async () => {
    console.log('Order ID from route:', orderId)

    if (!orderId) {
        error.value = 'No order ID provided'
        router.push('/payment/error?error=Missing order information')
        return
    }

    await orderStore.fetchOrderById(orderId)
})

watch(order, (newOrder) => {
    if (newOrder) {
        console.log(newOrder, 'new order')
        // Perform actions when order changes
    }
})

const viewOrderDetails = () => {
    router.push(`/orders/${orderId}`)
}

const continueShopping = () => {
    router.push('/')
}
</script>

<template>
    <ClientOnly>
        <div class="order-confirmation">
            <Spinner v-if="isLoading" />
            <el-container v-else>
                <el-main class="confirmation-container">
                    <el-card shadow="never" class="confirmation-card">
                        <!-- Header with Check Icon -->
                        <div class="confirmation-header">
                            <div class="check-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="64"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                    ></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <h1 class="title">Order Confirmed!</h1>
                            <p class="subtitle">
                                Thank you for your purchase. Your order has been
                                successfully placed.
                            </p>
                        </div>

                        <!-- Order Details -->
                        <div class="order-details">
                            <div class="order-title">
                                <h2 class="section-title flex items-center">
                                    <span class="flex"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-package h-5 w-5 mr-2"
                                        >
                                            <path d="m7.5 4.27 9 5.15"></path>
                                            <path
                                                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
                                            ></path>
                                            <path d="m3.3 7 8.7 5 8.7-5"></path>
                                            <path d="M12 22V12"></path></svg
                                    ></span>
                                    Order Details
                                </h2>
                            </div>

                            <div class="order-info">
                                <div class="order-info-number">
                                    <span class="label">Order Number:</span
                                    ><span class="value">{{
                                        order?.orderId
                                    }}</span>
                                </div>
                                <div class="order-info-number">
                                    <span class="label">Order Date:</span
                                    ><span class="value">6/28/2025</span>
                                </div>
                                <div class="order-info-number">
                                    <span class="label">Payment Method:</span
                                    ><span class="value">
                                        <el-icon class="el-icon--left"
                                            ><CreditCard /></el-icon
                                        >Credit Card</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="order-summary py-6">
                            <h2>Item Ordered</h2>
                            <div
                                v-for="item in order.items"
                                :key="item.id"
                                class="flex justify-between items-center py-3"
                            >
                                <div>
                                    <h4 class="font-medium text-gray-900">
                                        {{ item.name }}
                                    </h4>
                                    <p class="text-sm text-gray-500">
                                        Midnight Black, 128GB • Qty:
                                        {{ item.quantity }}
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p
                                        class="font-medium text-gray-900 text-sm"
                                    >
                                        ${{ item.price }}
                                    </p>
                                    <p class="text-sm text-gray-500 text-sm">
                                        ${{ item.price }} each
                                    </p>
                                </div>
                            </div>

                            <el-divider></el-divider>

                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Subtotal:</span
                                    ><span class="font-medium"
                                        >${{ order.amount }}</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Shipping:</span
                                    ><span class="font-medium">Free</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Tax:</span
                                    ><span class="font-medium">$95.92</span>
                                </div>
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    class="shrink-0 bg-border h-[1px] w-full"
                                ></div>
                                <el-divider></el-divider>
                                <div
                                    class="flex justify-between text-lg font-bold"
                                >
                                    <span class="font-bold">Total:</span
                                    ><span class="font-bold"
                                        >${{ order.amount }}</span
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- Shipping Information -->
                        <div class="shipping-info flex items-start gap-2">
                            <span
                                ><el-icon class="subsection-title"
                                    ><Van /></el-icon
                            ></span>
                            <div>
                                <h3 class="subsection-title">
                                    Shipping Information
                                </h3>
                                <p>
                                    Your order will be processed within 1-2
                                    business days and shipped via standard
                                    delivery.
                                </p>

                                <p class="estimated-delivery">
                                    <span class="font-bold"
                                        >Estimated delivery:</span
                                    >
                                    3-5 business days
                                </p>
                            </div>
                        </div>

                        <p class="text-center">
                            A confirmation email has been sent to your email
                            address with order details and tracking information.
                        </p>
                        <!-- Action Buttons -->
                        <div class="action-buttons">
                            <UIButton
                                label="Continue Shopping"
                                size="large"
                                style="width: auto"
                                @click="continueShopping"
                            >
                                <template #icon-right
                                    ><el-icon class="ml-2"
                                        ><ArrowRight /></el-icon
                                ></template>
                            </UIButton>
                            <UIButton
                                label="View Order History"
                                size="large"
                                variant="secondary"
                                style="width: auto"
                                @click="viewOrderDetails"
                            />
                        </div>

                        <el-divider></el-divider>

                        <!-- Help Section -->
                        <div class="help-section">
                            <h3 class="subsection-title">Need Help?</h3>
                            <p class="text-sm">
                                If you have any questions about your order,
                                please don't hesitate to contact us.
                            </p>

                            <div class="contact-info text-sm">
                                <span>Email: support@ringcart.app</span>
                                <span class="separation">|</span>
                                <span>Phone: 1-800-ringcart</span>
                            </div>
                        </div>
                    </el-card>
                </el-main>
            </el-container>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
h1,
h2,
h3 {
    font-family: $font-stack-brand;
}
.el-card,
.el-card-body {
    background: inherit;
    padding: 0;
}
.order-summary,
.shipping-info {
    border: 1px solid $border-gray-300;
    border-radius: 5px;
    padding: 10px 30px;
    margin: 30px 0;
}
.order-details {
    border-radius: 5px;
    border: 1px solid $border-gray-300;
}

.order-info {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: $text-base;

    &-number {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .label {
            font-weight: $font-weight-semibold;
        }

        .value {
            display: flex;
            align-items: center;
        }
    }
}

.order-title {
    background: $bg-green-200;
    padding: 15px 30px;
    display: flex;
    color: $text-green-900;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.order-confirmation {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
}

.confirmation-card {
    padding: 0 30px;
    border: none;
}

.confirmation-header {
    text-align: center;
    margin-bottom: 30px;
}

.check-icon {
    margin: 0 auto 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-green-500;
}

.check-icon svg {
    width: 100%;
    height: 100%;
}

.title {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
}

.shipping-info {
    background: $bg-blue-100;
    border: 1px solid $border-blue-300;
    padding-bottom: 20px;

    .subsection-title {
        font-size: $text-md;
        color: #333;
        margin: 25px 0 15px;
        display: flex;
        align-items: center;
        gap: 5px;
        color: $text-blue-900;
    }

    p {
        color: $text-blue-800;
        font-size: $text-sm;
        margin-bottom: 10px;
    }
}

.action-buttons {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.contact-info {
    /* margin-top: 15px;
    padding: 20px; */
}

.contact-info p {
    /* margin-bottom: 8px; */
}

.help-section {
    background: $bg-gray-100;
    border-radius: 10px;
    padding: 30px;

    h3 {
        font-size: $text-md;
    }

    .contact-info {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .check-icon {
        width: 60px;
        height: 60px;
    }

    .order-confirmation {
        max-width: 100%;
        margin: 0;
        padding: 0 20px;
    }

    .confirmation-card {
        padding: 0;
    }

    .el-main {
        padding: 30px 0;
        -el-main-padding: 0;
    }
}

@media (max-width: 480px) {
    .action-buttons {
        flex-direction: column;
    }
}
</style>
