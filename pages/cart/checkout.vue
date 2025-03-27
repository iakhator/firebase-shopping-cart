<!-- <template>
    <el-row class="checkout__grid pay__grid">
        <div class="checkout__grid-left">
            <div
                class="cart__wrapper"
                v-for="cartItem in cartItems"
                :key="cartItem.itemId"
            >
                <p>{{ cartItem.name }}</p>
                <div class="cart__wrapper-content">
                    <div class="cart__wrapper-image">
                        <img :src="cartItem.imageUrl" alt />
                        <p>{{ cartItem.variantId }}</p>
                    </div>
                    <div class="checkout__wrapper-quantity">
                        <span class="cart__quantity">{{
                            cartItem.quantity
                        }}</span>
                    </div>
                    <div class="cart__wrapper-price">
                        {{ toUSD(cartItem.price) }}
                    </div>
                </div>
            </div>
            <div class="checkout__wrapper-subdesc">
                <div class="cart__wrapper-subtotal">
                    <span>Subtotal:</span>
                    {{ totalPrice }}
                </div>
                <div class="cart__wrapper-subtotal">
                    <span>Discount:</span>
                    5%
                </div>
                <div class="checkout__wrapper-subtotal">
                    <span>Shipping:</span> {{ toUSD(deliveryFee) }}
                </div>
                <div class="checkout__wrapper-total">
                    <span>Total:</span>
                    {{ totalPrice }}
                </div>
            </div>
        </div>
        <div class="checkout__grid-right">
            <p>Payment</p>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                class="demo-ruleForm"
            >
                <el-form-item label="Name" prop="name">
                    <el-input
                        class="form__input"
                        v-model="ruleForm.name"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Address" prop="address">
                    <el-input
                        class="form__input"
                        v-model="ruleForm.address"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <div class="card-details">Card Information</div>
                <div class="form-row">
                    <label for="card-number">Card Number</label>
                    <div ref="card"></div>
                </div>
                <div class="pay form-row">
                    <el-button
                        class="el-button black pay__btn"
                        :loading="loading"
                        @click="pay"
                        >Pay</el-button
                    >
                </div>
            </el-form>
        </div>
    </el-row>
</template>

<script setup>
const authStore = useAuthStore()
const cartStore = useCartStore()
const { toUSD } = useCurrency()
const card = ref('')
const loading = ref(false)
const deliveryFee = 15

const isAuthenticated = computed(() => authStore.isAuthenticated)
const loggedInUser = computed(() => authStore.loggedInUser)
const cartItems = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.totalPrice)
const discount = computed(() => Math.round(subtotal.value * 0.05))
const totalPrice = computed(() => subtotal.value - discount.value + deliveryFee)

const ruleForm = {
    name: isAuthenticated ? loggedInUser : '',
    address: '',
}
const rules = {
    name: [{ message: 'is required', trigger: 'blur' }],
    address: [{ message: 'is required', trigger: 'blur' }],
}

onMounted(() => {
    // stripeCard()
})

function stripeCard() {
    // const elements = this.$stripe.elements()
    // card.value = elements.create('card')
    // card.value.mount(this.$refs.card)
}

function pay() {
    console.log('pay')
    // loading.value = true
    // const user = isAuthenticated.value
    //     ? loggedInUser.value.displayName
    //     : ruleForm.value.name

    // const clientSecret = this.$store.state.clientSecret
    // this.$axios
    //     .post('/api/saveorder', this.cartItems)
    //     .then((response) => {
    //         this.$stripe
    //             .confirmCardPayment(clientSecret, {
    //                 payment_method: {
    //                     card: this.card,
    //                     billing_details: {
    //                         name: user,
    //                     },
    //                 },
    //             })
    //             .then(function (result) {
    //                 if (result.error) {
    //                     // Show error to your customer (e.g., insufficient funds)
    //                     _that.$noty.error(result.error, {
    //                         timeout: 500,
    //                     })
    //                     this.loading = false
    //                 } else {
    //                     // The payment has been processed!
    //                     // eslint-disable-next-line no-lonely-if
    //                     if (result.paymentIntent.status === 'succeeded') {
    //                         // Show a success message to your customer
    //                         _that.$store.commit('ADD_ITEM', {
    //                             totalQty: 0,
    //                             cartIem: [],
    //                         })
    //                         _that.$router.push('/payment/success')
    //                     }
    //                 }
    //             })
    //     })
    //     .catch((err) => console.error(err))
}
</script>

<style lang="scss">
.checkout__grid {
    box-shadow: 1px 1px 5px #cdcdcd;
    margin: -1px auto 0;
    display: flex;
    font-weight: 500;
}

.checkout__grid-left {
    width: 50%;
    padding: 10px;
}

.checkout__grid-right {
    padding: 10px 20px;
    width: 50%;

    p {
        text-align: center;
        font-size: 1.5rem;
        margin: auto;
        font-weight: 600;
        color: #606266;
    }
}

.checkout__grid-left {
    padding: 25px 55px;
    background: #1b1a1a;
    color: #f8f5f2;
}

.el-input__inner {
    border: 1px solid #cdc9c6;
    font-weight: normal;

    &:focus {
        border: 1px solid #cdc9c6;
    }
}

.el-form {
    margin-top: 20px;
}

.el-form-item__label {
    line-height: 0;
    font-size: 13px;
    font-weight: 600;
}

.card-details {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 10px;
    color: #606266;
    border-bottom: 1px solid #606266;
}

.form-row {
    color: #606266;
    margin-bottom: 10px;

    label {
        font-size: 0.8rem;
        color: #606266;
        font-weight: 600;
    }
}

.card-cvc {
    margin-right: 13px;
}

.el-col {
    line-height: 1.3;
}

.pay__btn {
    width: 100%;

    &:active,
    &:focus,
    &:hover {
        width: 100%;
    }
}

.pay__grid {
    margin-top: 50px;
}

input,
.StripeElement {
    height: 40px;
    padding: 10px 12px;

    color: #32325d;
    border: 1px solid transparent;
    border-radius: 4px;
    border: 1px solid #cdc9c6;
}

input:focus,
.StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
    border-color: #fa755a;
}

.StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
}

.checkout__wrapper {
    &-subdesc {
        font-size: 12px;
        float: right;
    }

    &-total {
        font-weight: 600;
    }

    &-subtotal {
        border-bottom: 1px solid white;
        margin-bottom: 10px;
        padding-bottom: 5px;
    }

    &-quantity {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style> -->

<template>
    <div class="checkout-container">
        <!-- Product Section (Left) -->
        <div class="product-section">
            <div class="product-content">
                <h2 class="product-title">Order Summary</h2>

                <div class="product-card" v-for="item in cartItems">
                    <div class="product-image">
                        <img
                            :src="item.variant?.imageUrl"
                            alt="OnePlus 12 Dual 5G"
                        />
                    </div>
                    <div class="product-details">
                        <h3>
                            {{ item.name }}
                        </h3>
                        <p class="product-variant">
                            {{ capitalize(item.variant?.color) }} |
                            {{ item.bundle }} |
                            <span>qty: {{ item.quantity }}</span>
                        </p>
                        <div class="product-price">{{ toUSD(item.price) }}</div>
                    </div>
                </div>

                <div class="price-breakdown">
                    <div class="price-row">
                        <span>Subtotal</span>
                        <span>{{ toUSD(subtotal) }}</span>
                    </div>
                    <div class="price-row discount">
                        <span>
                            <el-tag size="small" effect="dark" type="success">
                                <el-icon><Discount /></el-icon> 15% OFF
                            </el-tag>
                        </span>
                        <span> - {{ toUSD(discount) }}</span>
                    </div>
                    <div class="price-row">
                        <span>Shipping</span>
                        <span>{{ toUSD(deliveryFee) }}</span>
                    </div>
                    <div class="price-row total">
                        <span>Total</span>
                        <span>{{ toUSD(totalPrice) }}</span>
                    </div>
                </div>

                <div class="shipping-info">
                    <el-icon><Van /></el-icon>
                    <span>Estimated delivery: 3-5 business days</span>
                </div>

                <div class="secure-badge">
                    <el-icon><Lock /></el-icon>
                    <span>Secure Checkout</span>
                </div>
            </div>
        </div>

        <!-- Payment Section (Right) -->
        <div class="payment-section">
            <h2 class="payment-title">Payment Details</h2>

            <el-steps :active="currentStep" finish-status="success" simple>
                <el-step title="Information">
                    <template #icon>
                        <el-icon><User /></el-icon>
                    </template>
                </el-step>
                <el-step title="Payment">
                    <template #icon>
                        <el-icon><CreditCard /></el-icon>
                    </template>
                </el-step>
                <el-step title="Confirmation">
                    <template #icon>
                        <el-icon><Check /></el-icon>
                    </template>
                </el-step>
            </el-steps>

            <div class="payment-form">
                <div v-if="currentStep === 1">
                    <h3 class="section-title">Contact Information</h3>
                    <el-form
                        :model="ruleForm"
                        :rules="rules"
                        ref="ruleFormRef"
                        label-position="top"
                    >
                        <el-form-item label="Email" prop="email">
                            <el-input
                                v-model="ruleForm.email"
                                placeholder="your@email.com"
                                size="large"
                            >
                                <template #prefix>
                                    <el-icon><Message /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>

                        <h3 class="section-title">Shipping Address</h3>
                        <el-row :gutter="12">
                            <el-col :span="12">
                                <el-form-item
                                    label="First Name"
                                    prop="firstName"
                                >
                                    <el-input
                                        v-model="ruleForm.firstName"
                                        placeholder="First Name"
                                        size="large"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Last Name" prop="lastName">
                                    <el-input
                                        v-model="ruleForm.lastName"
                                        placeholder="Last Name"
                                        size="large"
                                    />
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-form-item label="Address" prop="address">
                            <el-input
                                v-model="ruleForm.address"
                                placeholder="Street Address"
                                size="large"
                            >
                                <template #prefix>
                                    <el-icon><Location /></el-icon>
                                </template>
                            </el-input>
                        </el-form-item>

                        <el-row :gutter="12">
                            <el-col :span="12">
                                <el-form-item label="City" prop="city">
                                    <el-input
                                        v-model="ruleForm.city"
                                        placeholder="City"
                                        size="large"
                                    />
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Postal Code">
                                    <el-input
                                        v-model="ruleForm.postalCode"
                                        placeholder="Postal Code"
                                        size="large"
                                    />
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-form-item label="Country">
                            <el-select
                                v-model="ruleForm.country"
                                placeholder="Select Country"
                                style="width: 100%"
                                size="large"
                            >
                                <el-option label="United States" value="us" />
                                <el-option label="Canada" value="ca" />
                                <el-option label="Nigeria" value="na" />
                                <el-option label="United Kingdom" value="uk" />
                            </el-select>
                        </el-form-item>
                    </el-form>

                    <el-button
                        type="primary"
                        @click="goToPayment(ruleFormRef)"
                        class="continue-btn"
                        size="large"
                    >
                        Continue to Payment
                        <el-icon class="el-icon--right"><ArrowRight /></el-icon>
                    </el-button>
                </div>

                <div v-if="currentStep === 2" class="stripe-container">
                    <h3 class="section-title">Card Information</h3>

                    <!-- Stripe Card Element -->
                    <div class="stripe-element-container">
                        <div
                            id="card-element"
                            ref="cardElement"
                            class="stripe-element"
                        ></div>
                        <div
                            id="card-errors"
                            class="stripe-errors"
                            v-if="cardError"
                        >
                            {{ cardError }}
                        </div>
                    </div>

                    <div class="card-icons">
                        <img
                            src="/images/visa.svg"
                            alt="Visa"
                            class="card-icon"
                        />
                        <img
                            src="/images/mastercard.svg"
                            alt="Mastercard"
                            class="card-icon"
                        />
                        <img
                            src="/images/amex.svg"
                            alt="American Express"
                            class="card-icon"
                        />
                    </div>

                    <el-checkbox v-model="saveCard"
                        >Save card for future purchases</el-checkbox
                    >

                    <div class="actions">
                        <el-button @click="currentStep = 1" size="large">
                            <el-icon class="el-icon--left"
                                ><ArrowLeft
                            /></el-icon>
                            Back
                        </el-button>
                        <el-button
                            type="primary"
                            @click="processPayment"
                            :loading="loading"
                            size="large"
                        >
                            Pay {{ toUSD(totalPrice) }}
                            <el-icon class="el-icon--right"
                                ><CreditCard
                            /></el-icon>
                        </el-button>
                    </div>
                </div>

                <div v-if="currentStep === 3" class="confirmation">
                    <div class="success-icon">
                        <el-icon><CircleCheckFilled /></el-icon>
                    </div>
                    <h3>Payment Successful!</h3>
                    <p>
                        Your order has been placed and will be processed soon.
                    </p>
                    <p class="order-number">Order #: ORD-{{ orderNumber }}</p>
                    <p>
                        A confirmation email has been sent to
                        {{ ruleForm.email }}
                    </p>
                    <el-button type="primary" size="large" @click="goToOrders"
                        >View Order Details</el-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import UIButton from '@/components/ui/UIButton.vue'
import {
    User,
    CreditCard,
    Check,
    Message,
    Location,
    ArrowRight,
    ArrowLeft,
    Van,
    Lock,
    Discount,
    CircleCheckFilled,
} from '@element-plus/icons-vue'
const authStore = useAuthStore()
const cartStore = useCartStore()
const { toUSD } = useCurrency()

const deliveryFee = 15

// Form data
const ruleForm = ref({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'us',
})

const ruleFormRef = ref(null)

const rules = reactive({
    email: [
        { required: true, message: 'Please enter your email', trigger: 'blur' },
        {
            type: 'email',
            message: 'Email is required',
            trigger: 'blur',
        },
    ],
    firstName: [
        {
            required: true,
            message: 'First name is required',
            trigger: 'blur',
        },
    ],
    lastName: [
        {
            required: true,
            message: 'Last name is required',
            trigger: 'blur',
        },
    ],
    address: [
        {
            required: true,
            message: 'Address is required',
            trigger: 'blur',
        },
    ],
    city: [{ required: true, message: 'City is required', trigger: 'blur' }],
    postalCode: [
        {
            required: false,
            message: 'Please enter your postal code',
            trigger: 'blur',
        },
    ],
})

// Stripe and payment state
const stripe = ref(null)
const cardElement = ref(null)
const elements = ref(null)
const cardError = ref('')
const loading = ref(false)
const saveCard = ref(false)
const currentStep = ref(1)
const orderNumber = ref(
    Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, '0'),
)

const isAuthenticated = computed(() => authStore.isAuthenticated)
const loggedInUser = computed(() => authStore.loggedInUser)
const cartItems = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.totalPrice)
const discount = computed(() => Math.round(subtotal.value * 0.05))
const totalPrice = computed(() => subtotal.value + deliveryFee - discount.value)

// Initialize Stripe elements when component is mounted
onMounted(async () => {
    // In a real app, you would load Stripe.js from their CDN
    // and initialize it with your publishable key
    if (process.client) {
        // Simulating Stripe initialization for demo purposes
        setTimeout(() => {
            console.log('Stripe elements would be initialized here')
        }, 500)
    }
})

function goToPayment(formEl) {
    console.log(formEl, 'formEl')

    if (!formEl) return

    formEl.validate((valid) => {
        if (valid) {
            currentStep.value = 2
        }
    })
}

// Process payment method
const processPayment = async () => {
    loading.value = true

    // Simulate payment processing
    setTimeout(() => {
        loading.value = false
        currentStep.value = 3
    }, 2000)
}

// Navigate to orders page
const goToOrders = () => {
    // In a real app, this would navigate to the orders page
    console.log('Navigate to orders page')
}
</script>

<style scoped lang="scss">
.checkout-container {
    display: flex;
    min-height: 60vh;
    background-color: #f8f9fa;
    border-radius: 10px;
}

.product-section {
    flex: 1;
    background-color: #1a1a1a;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.product-content {
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
}

.payment-section {
    flex: 1.2;
    background-color: white;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.payment-form {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
}

.product-title,
.payment-title {
    font-size: $text-lg;
    margin-bottom: 2rem;
    font-weight: 600;
}

.payment-title {
    color: #333;
}

.section-title {
    font-size: $text-md;
    margin: 1.5rem 0 1rem;
    font-weight: 500;
    color: #333;
}

.product-card {
    display: flex;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1.5rem;
}

.product-image {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    background-color: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-details {
    margin-left: 1rem;
    flex: 1;
}

.product-details h3 {
    font-size: $text-base;
    margin: 0 0 0.3rem 0;
}

.product-variant {
    color: #aaa;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
}

.product-price {
    font-weight: 600;
    font-size: 1.2rem;
}

.price-breakdown {
    margin: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1rem;
}

.price-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    font-size: 0.95rem;
}

.price-row.discount {
    color: #67c23a;
}

.price-row.total {
    font-weight: 600;
    font-size: 1.1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.shipping-info,
.secure-badge {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #aaa;
    margin-top: 1rem;
}

.shipping-info .el-icon,
.secure-badge .el-icon {
    margin-right: 0.5rem;
}

.secure-badge {
    margin-top: 1.5rem;
}

.stripe-element-container {
    border: 1px solid #dcdfe6;
    padding: 1rem;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 1rem;
    min-height: 40px;
}

.stripe-element {
    width: 100%;
    min-height: 20px;
}

.stripe-errors {
    color: #f56c6c;
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

.card-icons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.card-icon {
    height: 24px;
}

.actions {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}

.continue-btn {
    width: 100%;
    margin-top: 1.5rem;
}

.confirmation {
    text-align: center;
    padding: 2rem 0;
}

.success-icon {
    font-size: 4rem;
    color: #67c23a;
    margin-bottom: 1rem;
}

.order-number {
    font-weight: 600;
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: #f0f9eb;
    border-radius: 4px;
    color: #67c23a;
}

@media (max-width: 768px) {
    .checkout-container {
        flex-direction: column;
    }

    .product-section,
    .payment-section {
        padding: 1.5rem;
    }

    .product-content,
    .payment-form {
        max-width: 100%;
    }
}
</style>
