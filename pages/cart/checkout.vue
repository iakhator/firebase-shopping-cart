<template>
    <ClientOnly>
        <div class="checkout">
            <h2 class="font-briscolade">Checkout</h2>
            <div class="checkout-container">
                <!-- Payment Section (Left) -->
                <div class="payment-section">
                    <div class="payment-form">
                        <h3 class="section-title font-briscolade">
                            Contact Information
                        </h3>
                        <el-form
                            :model="ruleForm"
                            :rules="rules"
                            ref="ruleFormRef"
                            label-position="top"
                        >
                            <el-row :gutter="12">
                                <el-col :span="12">
                                    <el-form-item
                                        label="First Name"
                                        prop="firstName"
                                        class="custom-select"
                                    >
                                        <el-input
                                            v-model="ruleForm.firstName"
                                            placeholder="First Name"
                                            :value="firstName"
                                            size="large"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item
                                        label="Last Name"
                                        prop="lastName"
                                    >
                                        <el-input
                                            v-model="ruleForm.lastName"
                                            placeholder="Last Name"
                                            size="large"
                                            :value="lastName"
                                        />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-form-item label="Email" prop="email">
                                <el-input
                                    v-model="ruleForm.email"
                                    :value="authStore.user?.email"
                                    placeholder="your@email.com"
                                    size="large"
                                >
                                    <template #prefix>
                                        <el-icon><Message /></el-icon>
                                    </template>
                                </el-input>
                            </el-form-item>

                            <h3 class="section-title font-briscolade">
                                Shipping Address
                            </h3>

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

                            <el-form-item label="Country" class="custom-select">
                                <el-select
                                    v-model="ruleForm.country"
                                    placeholder="Select Country"
                                    style="width: 100%"
                                    size="large"
                                >
                                    <el-option
                                        label="United States"
                                        value="us"
                                    />
                                    <el-option label="Canada" value="ca" />
                                    <el-option label="Nigeria" value="na" />
                                    <el-option
                                        label="United Kingdom"
                                        value="uk"
                                    />
                                </el-select>
                            </el-form-item>

                            <div class="stripe-container">
                                <h3 class="section-title font-briscolade">
                                    Card Information
                                </h3>
                                <!-- Stripe Card Element -->
                                <div class="stripe-element-container">
                                    <div class="card-field">
                                        <label id="card-number-label"
                                            >Card Number</label
                                        >
                                        <div
                                            id="card-number-element"
                                            class="stripe-element"
                                            aria-labelledby="card-number-label"
                                        ></div>
                                    </div>

                                    <div class="card-row">
                                        <div class="card-field expiry">
                                            <label id="card-expiry-label"
                                                >Expiry Date</label
                                            >
                                            <div
                                                id="card-expiry-element"
                                                class="stripe-element"
                                                aria-labelledby="card-expiry-label"
                                            ></div>
                                        </div>

                                        <div class="card-field cvc">
                                            <label id="card-cvc-label"
                                                >CVC</label
                                            >
                                            <div
                                                id="card-cvc-element"
                                                aria-labelledby="card-cvc-label"
                                                class="stripe-element"
                                            ></div>
                                        </div>
                                    </div>

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
                            </div>
                        </el-form>
                    </div>
                </div>
                <!-- Product Section (Right) -->
                <div class="product-section">
                    <div class="product-content">
                        <h2 class="product-order-summary font-briscolade">
                            Order Summary
                        </h2>

                        <div class="product-card" v-for="item in cartItems">
                            <div class="product-image">
                                <img
                                    :src="item.variant?.imageUrl"
                                    alt="OnePlus 12 Dual 5G"
                                />
                            </div>
                            <div class="product-details">
                                <h3 class="font-medium">
                                    {{ item.name }}
                                </h3>
                                <p class="product-variant text-sm">
                                    {{ capitalize(item.variant?.color) }},
                                    {{ item.bundle }}
                                </p>
                                <div class="product-price text-sm">
                                    {{ toUSD(item.price) }} x
                                    {{ item.quantity }}
                                </div>
                            </div>
                        </div>

                        <div class="price-breakdown">
                            <div class="price-row">
                                <span>Subtotal</span>
                                <span>{{ toUSD(subtotal) }}</span>
                            </div>
                            <div class="price-row discount">
                                <span>
                                    <el-tag
                                        size="small"
                                        effect="dark"
                                        type="success"
                                    >
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

                        <div class="actions">
                            <UIButton
                                variant="mild"
                                @click="processPayment"
                                :loading="loading"
                                size="large"
                                label="Place Order"
                            >
                                <template #icon>
                                    <el-icon class="el-icon--left"
                                        ><CreditCard
                                    /></el-icon>
                                </template>
                                Place Order {{ toUSD(totalPrice) }}
                            </UIButton>
                        </div>
                        <div class="secure-badge">
                            <el-icon><Lock /></el-icon>
                            <span>Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ClientOnly>
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
const { $stripe } = useNuxtApp()
const authStore = useAuthStore()
const cartStore = useCartStore()
const { toUSD } = useCurrency()
const router = useRouter()

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
const cardNumberElement = ref(null)
const cardExpiryElement = ref(null)
const cardCvcElement = ref(null)
const cardError = ref('')
const loading = ref(false)
const saveCard = ref(false)
const currentStep = ref(1)

const isAuthenticated = computed(() => authStore.isAuthenticated)
// const loggedInUser = computed(() => authStore.loggedInUser)
const cartItems = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.totalPrice)
const discount = computed(() => Math.round(subtotal.value * 0.05))
const totalPrice = computed(() => subtotal.value + deliveryFee - discount.value)
const firstName = computed(() => authStore.user?.firstName || '')
const lastName = computed(() => authStore.user?.lastName || '')

// Initialize Stripe elements when component is mounted
onMounted(async () => {
    // In a real app, you would load Stripe.js from their CDN
    // and initialize it with your publishable key
    if (process.client) {
        // Simulating Stripe initialization for demo purposes
        // setTimeout(() => {
        //     console.log('Stripe elements would be initialized here')
        // }, 500)
        // stripeCard()
    }

    const user = authStore.user

    ruleForm.value = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: user?.email || '',
        address: user?.shippingAddress?.address || '',
        street: user?.shippingAddress?.street || '',
        city: user?.shippingAddress?.city || '',
        country: user?.shippingAddress?.country || '',
        postalCode: user?.shippingAddress?.postalCode || '',
    }
})

onMounted(() => {
    if (import.meta.client) {
        nextTick(() => {
            try {
                // Define base styles for all elements
                const elementStyle = {
                    base: {
                        // fontSize: '10px',
                        color: '#1b1a1a',
                        fontFamily: 'inherit',
                        '::placeholder': {
                            color: '#acafb7',
                        },
                    },
                    invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a',
                    },
                }

                // Create Stripe elements instance
                cardElement.value = $stripe.elements()

                // Helper to create, mount and bind focus/blur handlers
                const setupElement = (type, elementId, placeholder) => {
                    const el = cardElement.value.create(type, {
                        style: elementStyle,
                        placeholder,
                    })
                    el.mount(`#${elementId}`)
                    el.on('focus', () =>
                        document
                            .getElementById(elementId)
                            ?.classList.add('focused'),
                    )
                    el.on('blur', () =>
                        document
                            .getElementById(elementId)
                            ?.classList.remove('focused'),
                    )

                    el.on('change', (event) => {
                        cardError.value = event.error?.message || ''
                    })
                    return el
                }

                // Create and bind all elements
                cardNumberElement.value = setupElement(
                    'cardNumber',
                    'card-number-element',
                    '1234 5678 9012 3456',
                )

                cardExpiryElement.value = setupElement(
                    'cardExpiry',
                    'card-expiry-element',
                    'MM/YY',
                )

                cardCvcElement.value = setupElement(
                    'cardCvc',
                    'card-cvc-element',
                    '123',
                )
            } catch (err) {
                console.error('Error mounting Stripe elements:', err)
            }
        })
    }

    const user = authStore.user

    ruleForm.value = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: user?.email || '',
        address: user?.shippingAddress?.address || '',
        street: user?.shippingAddress?.street || '',
        city: user?.shippingAddress?.city || '',
        country: user?.shippingAddress?.country || '',
        postalCode: user?.shippingAddress?.postalCode || '',
    }
})

onUnmounted(() => {
    if (cardNumberElement.value) {
        cardNumberElement.value.unmount()
    }
    if (cardExpiryElement.value) {
        cardExpiryElement.value.unmount()
    }
    if (cardCvcElement.value) {
        cardCvcElement.value.unmount()
    }
})

function goToPayment(formEl) {
    if (!formEl) return

    formEl.validate((valid) => {
        if (valid) {
            const userData = {
                shippingAddress: {
                    address: ruleForm.value.address,
                    street: ruleForm.value.street,
                    city: ruleForm.value.city,
                    country: ruleForm.value.country,
                    postalCode: ruleForm.value.postalCode,
                },
                email: ruleForm.value.email,
                firstName: ruleForm.value.firstName,
                lastName: ruleForm.value.lastName,
            }
            const updatedUser = authStore.updateUser(userData)
            if (updatedUser) {
                currentStep.value = 2
            }
        }
    })

    currentStep.value = 2
}

// Process payment method
const processPayment = async () => {
    if (!ruleFormRef.value) return

    const items = cartItems.value.map((cart) => ({
        id: cart.productId,
        quantity: cart.quantity,
        name: cart.name,
        price: cart.price,
        originalPrice: cart.originalPrice,
        variant: cart.variant?.color || '',
        bundle: cart.bundle || '',
    }))

    const payload = {
        customerName: authStore.user.displayName,
        userId: authStore.user.uid,
        email: authStore.user.email,
        shippingAddress: authStore.user.shippingAddress || {
            address: ruleForm.value?.address || '',
            street: ruleForm.value?.street || '',
            city: ruleForm.value?.city || '',
            country: ruleForm.value?.country || '',
            postalCode: ruleForm.value?.postalCode || '',
        },
        savePaymentMethod: saveCard.value,
        amount: totalPrice.value,
        items,
    }

    try {
        const valid = await ruleFormRef.value.validate()
        if (!valid) return

        loading.value = true
        const paymentIntentResponse = await $fetch(
            '/api/payment/process-payment',
            {
                method: 'POST',
                body: payload,
            },
        )

        const clientSecret = paymentIntentResponse.clientSecret

        if (!clientSecret) {
            throw new Error(
                'Failed to retrieve client secret from payment intent',
            )
        }
        const result = await $stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumberElement.value,
            },
        })
        if (
            result.paymentIntent.status === 'succeeded' &&
            paymentIntentResponse.orderId
        ) {
            await cartStore.clearCart()
            await navigateTo(
                `/orders/success?ref=${paymentIntentResponse.orderId}`,
            )
        }
    } catch (error) {
        console.log(error)
        loading.value = false
    } finally {
        loading.value = false
    }
}

// 4242 4242 4242 4242
</script>

<style scoped lang="scss">
.checkout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    h3 {
        font-size: 1.2rem;
        color: $text-primary;
        font-weight: 600;
    }

    h2 {
        font-size: 1.2rem;
        color: $text-primary;
        font-weight: bold;
    }
}

h2.product-order-summary {
    color: $off-white;
    margin-bottom: 30px;
}

.checkout-container {
    display: flex;
    width: 100%;
    gap: 1rem;
    border-radius: 10px;
}

.product-section {
    flex: 1;
    background-color: #1a1a1a;
    color: white;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: fit-content;
}

.product-content {
    max-width: 450px;
    margin: 0 auto;
    width: 100%;
}

.payment-section {
    flex: 2;
    border: 1px solid black;
    /* background-color: white; */
    padding: 2rem;
    /* box-shadow: -5px 0 15px rgba(0, 0, 0, 0.05); */
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    /* border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; */
}

.payment-form {
    /* max-width: 500px; */
    margin: 0 auto;
    width: 100%;
}

.product-title,
.payment-title {
    font-size: $text-lg;
    margin-bottom: 2rem;
    font-weight: 600;
    color: red;
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
    /* background-color: rgba(255, 255, 255, 0.1); */
    border-radius: 12px;
    /* padding: 1rem; */
    margin-bottom: 1.5rem;
    color: $text-white;
}

.product-image {
    width: 65px;
    height: 65px;
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
    margin: 0 0 0.2rem 0;
    color: $text-white;
}

.product-variant {
    color: #aaa;
    font-size: 0.9rem;
    margin: 0 0 0.2rem 0;
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
    justify-content: center;
}

.stripe-element-container {
    border-radius: 4px;
    /* background-color: #fff; */
    margin-bottom: 1rem;
    min-height: 40px;
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

/* Card */
.card-field {
    margin-bottom: 1rem;
}

.card-field label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #606266;
    font-weight: 600;
}

.card-row {
    display: flex;
    gap: 1rem;
}

.card-field.expiry {
    flex: 1;
}

.card-field.cvc {
    width: 40%;
}

.stripe-element {
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #c0c4cc;
    min-height: 20px;
    height: 40px;
    /* background-color: #ffffff; */
}

/* .stripe-element:focus {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
} */

.stripe-element.focused {
    border-color: $off-black;
}

.stripe-element--invalid {
    border-color: #f56c6c;
}

/* Responsive adjustment */
@media (max-width: 480px) {
    .card-row {
        flex-direction: column;
        gap: 0.5rem;
    }

    .card-field.cvc {
        width: 100%;
    }
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

/* select */
.custom-select :deep(.el-select) {
    width: 100%;
}

.custom-select :deep(.el-select .el-select__wrapper) {
    background-color: transparent;
    transition: all 0.3s ease;
    min-height: 40px;
}
</style>
