<script setup>
import ShoppingBagBlack from '~/components/icons/ShoppingBagBlack'
// import { useCartStore } from '~/stores/cart.js'
import { useCurrency } from '~/composables/useCurrency.js'

const cartStore = useCartStore()
const { toUSD } = useCurrency(0)

const loading = ref(false)

const emptyCart = computed(() => quantity.value <= 0)
const quantity = computed(() => cartStore.totalQty)
const cartItems = computed(() => cartStore.cartItems)
const totalPrice = computed(() => cartStore.totalPrice)

// function closeCartDrawer() {
//   emit('close-cart-drawer', false)
// }

//   computed: {
//     ...mapGetters(['cartItems', 'isAuthenticated']),
//   },

//   methods: {
//     formatPrice(value) {
//       return this.$toUSD(value)
//     },
//     closeCartDrawer() {
//       this.$emit('close-cart-drawer', false)
//     },

//     checkOut() {
//       if (this.isAuthenticated) {
//         this.loading = true
//         this.$store
//           .dispatch('checkOut', {
//             amount: Math.round(this.cartItems.totalPrice * 100),
//           })
//           .then(() => {
//             this.$router.push({ path: '/cart/checkout' })
//             this.$emit('close-on-checkout', false)
//             this.loading = false
//           })
//           .catch((error) => {
//             console.error(error)
//             this.loading = false
//           })
//       } else {
//         this.closeCartDrawer()
//         this.$bus.emit('open-account-drawer', true)
//       }
//     },

//     deleteItem(id) {
//       this.$store
//         .dispatch('removeFromCart', { data: { id } })
//         .then(() => {
//           // this.$noty.success('Item deleted', {
//           //   timeout: 500
//           // })
//           TODO: console.log('yeappp')
//         })
//         .catch((err) => {
//           // this.$noty.error(err.response.message, {
//           //   timeout: 500
//           // })
//           TODO: console.error(err)
//         })
//     },

//     decreaseCartQty(id) {
//       this.$store.dispatch('decrementQty', id)
//     },

//     increaseCartQty(id) {
//       this.$store.dispatch('incrementQty', id)
//     },
//   },
// }
</script>

<template>
  <div>
    <div v-if="emptyCart">
      <h6>Your bag is empty</h6>
      <shopping-bag-black class="no__cart" />
    </div>
    <div
      v-else
      class="cart__wrapper"
      v-for="cartItem in cartItems"
      :key="cartItem.itemId"
    >
      <p>{{ cartItem.title }}</p>
      <div class="cart__wrapper-content">
        <div class="cart__wrapper-image">
          <img :src="cartItem.itemPhoto" alt />
          <p>{{ cartItem.variantId }}</p>
        </div>
        <div class="cart__wrapper-quantity">
          <button
            class="quantity__btn"
            @click="cartStore.decrementQty(cartItem.productId)"
          >
            -
          </button>
          <span class="cart__quantity">{{ cartItem.quantity }}</span>
          <button
            class="quantity__btn"
            @click="cartStore.incrementQty(cartItem.productId)"
          >
            +
          </button>
        </div>
        <div class="cart__wrapper-price">{{ toUSD(cartItem.price) }}</div>
        <el-button
          type="danger"
          icon="el-icon-delete"
          circle
          @click="cartStore.removeFromCart(cartItem.productId)"
        ></el-button>
      </div>
    </div>
    <div class="cart__wrapper-total" v-show="!emptyCart">
      <span>Total:</span>
      {{ toUSD(totalPrice) }}
    </div>
    <el-button
      v-show="!emptyCart"
      round
      class="black checkout"
      :loading="loading"
      @click="checkOut"
    >
      checkout
    </el-button>
    <el-button round class="no__cart-btn" @click="closeCartDrawer">
      Browse Products
    </el-button>
  </div>
</template>

<style lang="scss">
.cart-wrapper {
  // position: relative;
}

.no__cart {
  width: 100px;
  position: absolute;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  &-btn {
    position: absolute;
    bottom: 0;
    margin: 0 0 50px;
    min-height: 40px;
    width: 100%;
  }
}

.cart__wrapper {
  font-size: 0.7rem;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  padding-bottom: 5px;
}

.cart__wrapper-content {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 2fr 2fr 1fr;
}

.cart__wrapper-price {
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  align-items: center;
}

.cart__wrapper-quantity {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

.cart__wrapper-total {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0px;
  font-weight: 600;
}

.el-drawer__body {
  width: 25.36111vw !important;
}

.el-button.checkout {
  display: block;
  float: right;
}

.quantity__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
}

.quantity__btn {
  border: 1px solid black;
  height: 20px;
  padding: 0 6px;
  cursor: pointer;
  box-shadow: 1px 1px 0px #a1a1a1;
}

.el-button.is-circle {
  border: none;

  &:hover,
  &:focus,
  &:active {
    background: none;
    color: #f78989;
  }
}
</style>
