<template>
    <h3>YOUR BAG</h3>
    <div class="cart">
        <div v-if="!cartItems.length" class="cart__empty">
            <span><shopping-bag-black class="no__cart" /></span>
            <p>Your bag is empty</p>
            <nuxt-link to="/" class="btn btn-primary black"
                >Start Shopping</nuxt-link
            >
        </div>
        <div v-else class="cart-container">
            <div class="cart-items">
                <div v-for="item in cartItems" :key="item.id" class="cart-item">
                    <img
                        :src="item.variant?.imageUrl"
                        :alt="item.name"
                        class="item-image"
                    />
                    <div class="item-details">
                        <p class="item-name">{{ item.name }}</p>
                        <p>Bundle: {{ item.bundle }}</p>
                        <p>Color: {{ item.variant?.color }}</p>
                        <p class="price">${{ item.price }}</p>
                    </div>
                    <div class="item-actions">
                        <UICounter
                            v-model="item.quantity"
                            :readonly="true"
                            @increment="() => increaseQuantity(item)"
                            @decrement="() => decreaseQuantity(item)"
                        />
                        <button class="delete-btn" @click="removeItem(item)">
                            <el-icon><Delete /></el-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div class="order-summary">
                <h3>Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal</span> <span>${{ subtotal }}</span>
                </div>
                <div class="summary-row discount">
                    <span>Discount (-20%)</span>
                    <span class="discount-amount">-${{ discount }}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee</span> <span>${{ deliveryFee }}</span>
                </div>
                <hr />
                <div class="summary-row total">
                    <span>Total</span> <span>${{ total }}</span>
                </div>

                <div class="promo-code">
                    <input type="text" placeholder="Add promo code" />
                    <button>Apply</button>
                </div>

                <UIButton
                    size="large"
                    class="black checkout-btn"
                    @click="register(registerFormRef)"
                    label="Go to Checkout →"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Delete } from '@element-plus/icons-vue'
import ShoppingBagBlack from '~/components/icons/ShoppingBagBlack.vue'
const cartStore = useCartStore()

const deliveryFee = 15

const cartItems = computed(() => cartStore.cart)
const subtotal = computed(() => cartStore.totalPrice)
const discount = computed(() => Math.round(subtotal.value * 0.05))
const total = computed(() => subtotal.value - discount.value + deliveryFee)

const increaseQuantity = (item) => {
    cartStore.incrementCartItem({
        userId: 1,
        productId: item.productId,
        variant: item.variant,
        bundle: item.bundle,
    })
}
const decreaseQuantity = (item) => {
    cartStore.decrementCartItem({
        userId: 1,
        productId: item.productId,
        variant: item.variant,
        bundle: item.bundle,
    })
}
const removeItem = (item) => {
    cartStore.removeCartItem({
        userId: 1,
        productId: item.productId,
        variant: item.variant,
        bundle: item.bundle,
    })
}
</script>

<style lang="scss" scoped>
.cart-container {
    display: flex;
    gap: 20px;
    max-width: 1600px;
    margin: 20px auto;
    align-items: flex-start;

    .cart-items {
        flex: 2;
        border-radius: 12px;
        padding: 20px;
        border: 1px solid #cac1c1;
        width: 100%;

        .cart-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px 0;
            border-bottom: 1px solid #cac1c1;
            width: 100%;

            &:last-child {
                border-bottom: none;
            }

            .item-image {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 8px;
            }

            .item-details {
                flex-grow: 1;

                h3 {
                    font-size: 18px;
                    margin: 0;
                    font-weight: bold;
                }

                p {
                    margin: 2px 0;
                    color: #555;
                    font-size: 14px;
                }

                .price {
                    font-weight: bold;
                    font-size: 18px;
                    margin-top: 15px;
                    color: $black;
                }
            }

            .item-actions {
                display: flex;
                gap: 20px;

                @media (max-width: 768px) {
                    flex-direction: column;
                    align-items: end;
                }
            }

            .delete-btn {
                background: none;
                border: none;
                color: red;
                font-size: 18px;
                cursor: pointer;
            }
        }
    }

    .order-summary {
        flex: 1;
        border: 1px solid #cac1c1;
        padding: 20px;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
            font-size: 18px;
            margin-bottom: 15px;
        }

        hr {
            color: #cac1c1;
            border: none;
            border-top: 1px solid #cac1c1;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
            font-size: 16px;

            &.discount {
                color: red;
                font-weight: bold;
            }

            .discount-amount {
                color: red;
            }

            &.total {
                font-weight: bold;
                font-size: 18px;
            }
        }

        .promo-code {
            display: flex;
            margin-top: 15px;

            input {
                flex: 1;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                margin-right: 10px;
            }

            button {
                padding: 10px 15px;
                background: black;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
        }

        .checkout-btn {
            margin-top: 15px;
        }
    }

    .item-name {
        font-weight: bold;
        font-size: 0.865rem;
    }
}

.cart__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    p {
        font-size: 14px;
        margin-top: 10px;
    }
}

@media (max-width: 768px) {
    .cart-container {
        flex-direction: column;
    }

    .order-summary {
        width: 100%;
    }
}
</style>
