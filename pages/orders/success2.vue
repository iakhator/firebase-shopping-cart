<template>
    <div class="order-confirmation">
        <el-container>
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
                            <h2 class="section-title">Order Details</h2>
                        </div>

                        <div class="order-info">
                            <div class="order-info-number">
                                <span class="label">Order Number:</span
                                ><span class="value">ORD–YTHPDDPXB</span>
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

                    <div class="order-summary">
                        <h2>Item Ordered</h2>
                        order summary
                    </div>
                    <!-- Shipping Information -->
                    <div class="shipping-info">
                        <h3 class="subsection-title">
                            <el-icon><Van /></el-icon> Shipping Information
                        </h3>
                        <p>
                            Your order will be processed within 1-2 business
                            days and shipped via standard delivery.
                        </p>

                        <p class="estimated-delivery">
                            <span>Estimated delivery:</span> 3-5 business days
                        </p>
                    </div>

                    <p>
                        A confirmation email has been sent to your email address
                        with order details and tracking information.
                    </p>
                    <!-- Action Buttons -->
                    <div class="action-buttons">
                        <UIButton
                            label="Continue Shopping"
                            size="large"
                            style="width: auto"
                        />
                        <UIButton
                            label="View Order History"
                            size="large"
                            variant="secondary"
                            style="width: auto"
                        />
                    </div>

                    <el-divider></el-divider>

                    <!-- Help Section -->
                    <h3 class="subsection-title">Need Help?</h3>
                    <p>
                        If you have any questions about your order, please don't
                        hesitate to contact us.
                    </p>

                    <div class="contact-info">
                        <p><strong>Email:</strong> support@ringcart.app</p>
                        <p><strong>Phone:</strong> 1-800-ringcart</p>
                    </div>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import UIButton from '@/components/ui/UIButton.vue'
import {
    CreditCard,
    Location,
    ArrowRight,
    ArrowLeft,
    Van,
} from '@element-plus/icons-vue'

// head() {
//     return {
//         title: 'Order Confirmation - PhoneHub',
//     }
</script>

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
    background: $bg-green-100;
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
    padding: 30px;
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
    margin-top: 15px;
}

.contact-info p {
    margin-bottom: 8px;
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
