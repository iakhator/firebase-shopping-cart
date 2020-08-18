<template>
  <div>
    <div v-if="emptyCart">
      <h6>Your bag is empty</h6>
      <shopping-bag-black class="no__cart" />
    </div>
    <div v-else class="cart__wrapper" v-for="cartItem in cartItems.cartItem" :key="cartItem.itemId">
      <p>{{ cartItem.title }}</p>
      <div class="cart__wrapper-content">
        <div class="cart__wrapper-image">
          <img :src="cartItem.itemPhoto" alt />
          <p>{{ cartItem.variantId }}</p>
        </div>
        <div class="cart__wrapper-quantity">
          <button class="quantity__btn" @click="decreaseCartQty(cartItem.itemId)">-</button>
          <span class="cart__quantity">{{ cartItem.quantity }}</span>
          <button class="quantity__btn" @click="increaseCartQty(cartItem.itemId)">+</button>
        </div>
        <div class="cart__wrapper-price">{{ cartItem.price | toUSD }}</div>
        <el-button type="danger" icon="el-icon-delete" circle @click="deleteItem(cartItem.itemId)"></el-button>
      </div>
    </div>
    <div class="cart__wrapper-total" v-show="!emptyCart">
      <span>Total:</span>
      {{ cartItems.totalPrice | toUSD }}
    </div>
    <el-button
      v-show="!emptyCart"
      round
      class="black checkout"
      :loading="loading"
      @click="checkOut"
    >checkout</el-button>
    <el-button round class="no__cart-btn" @click="closeCartDrawer">Browse Products</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingBagBlack from '../icons/ShoppingBagBlack'

export default {
  components: {
    ShoppingBagBlack
  },

  props: {
    emptyCart: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      loading: false
    }
  },

  computed: {
    ...mapGetters(['cartItems', 'isAuthenticated'])
  },

  methods: {
    closeCartDrawer() {
      this.$emit('close-cart-drawer', false)
    },

    checkOut() {
      if (this.isAuthenticated) {
        this.loading = true
        this.$store.dispatch('checkOut', { amount: (Math.round(this.cartItems.totalPrice * 100)) })
          .then(() => {
            this.$router.push({ path: '/cart/checkout' })
            this.$emit('close-on-checkout', false)
            this.loading = false
          }).catch(err => {
            console.error(err)
            this.loading = false
          })
      } else {
        this.closeCartDrawer()
        this.$bus.$emit('open-account-drawer', true)
      }
    },

    deleteItem(id) {
      this.$store.dispatch('removeFromCart', { data: { id } }).then(() => {
        this.$noty.success('Item deleted', {
          timeout: 500
        })
      }).catch((err) => {
        this.$noty.error(err.response.message, {
          timeout: 500
        })
      })
    },

    decreaseCartQty(id) {
      console.log(id)
      this.$store.dispatch('decrementQty', id).then(data => console.log(data))
    },

    increaseCartQty(id) {
      console.log(id)
      this.$store.dispatch('incrementQty', id).then(data => console.log(data))
    }
  }
}
</script>

<style lang="scss">
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
