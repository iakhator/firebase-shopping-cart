
<template>
  <el-row class="checkout__grid pay__grid">
    <div class="checkout__grid-left">
      <div class="cart__wrapper" v-for="cartItem in cartItems.cartItem" :key="cartItem.itemId">
        <p>{{ cartItem.title }}</p>
        <div class="cart__wrapper-content">
          <div class="cart__wrapper-image">
            <img :src="cartItem.itemPhoto" alt />
            <p>{{ cartItem.variantId }}</p>
          </div>
          <div class="checkout__wrapper-quantity">
            <span class="cart__quantity">{{ cartItem.quantity }}</span>
          </div>
          <div class="cart__wrapper-price">{{ cartItem.price | toUSD }}</div>
        </div>
      </div>
      <div class="checkout__wrapper-subdesc">
        <div class="cart__wrapper-subtotal">
          <span>Subtotal:</span>
          {{ cartItems.totalPrice | toUSD }}
        </div>
        <div class="checkout__wrapper-subtotal">
          <span>Shipping:</span> Free
        </div>
        <div class="checkout__wrapper-total">
          <span>Total:</span>
          {{ cartItems.totalPrice | toUSD }}
        </div>
      </div>
    </div>
    <div class="checkout__grid-right">
      <p>Payment</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input class="form__input" v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input class="form__input" v-model="ruleForm.address" autocomplete="off"></el-input>
        </el-form-item>
        <div class="card-details">Card Information</div>
        <div class="form-row">
          <label for="card-number">Card Number</label>
          <div ref="card"></div>
        </div>
        <div class="pay form-row">
          <el-button class="el-button black pay__btn" :loading="loading" @click="pay">Pay</el-button>
        </div>
      </el-form>
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'incart',
  data() {
    return {
      card: '',
      loading: false,
      ruleForm: {
        name: this.$store.state.auth.user ? this.$store.state.auth.user.displayName : '',
        address: ''
      },
      rules: {
        name: [
          { message: 'is required', trigger: 'blur' }
        ],
        address: [
          { message: 'is required', trigger: 'blur' }
        ]
      }
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser', 'cartItems'])
  },

  mounted() {
    this.stripeCard()
  },

  methods: {
    stripeCard() {
      const elements = this.$stripe.elements()
      this.card = elements.create('card')
      this.card.mount(this.$refs.card)
    },

    pay() {
      const _that = this
      this.loading = true
      const user = this.isAuthenticated ? this.loggedInUser.displayName : this.ruleForm.name

      const clientSecret = this.$store.state.clientSecret
      this.$axios.post('/api/saveorder', this.cartItems).then((response) => {
        this.$stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: this.card,
            billing_details: {
              name: user
            }
          }
        }).then(function (result) {
          if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
            _that.$noty.error(result.error, {
              timeout: 500
            })
            this.loading = false
          } else {
          // The payment has been processed!
          // eslint-disable-next-line no-lonely-if
            if (result.paymentIntent.status === 'succeeded') {
            // Show a success message to your customer
              console.log('successful')
              _that.$store.commit('ADD_ITEM', {
                totalQty: 0,
                cartIem: []
              })
              _that.$router.push('/payment/success')
            }
          }
        })
      }).catch(err => console.error(err))
    }
  }
}
</script>

<style lang="scss">
.checkout__grid {
  width: 70.77778vw;
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
</style>
