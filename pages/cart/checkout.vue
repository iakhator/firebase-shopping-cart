
<template>
  <el-row class="checkout__grid pay__grid">
    <div class="checkout__grid-left">Products</div>
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
          <div ref="cardNumber">
          </div>
        </div>
        <el-form-item class="form-row">
          <el-col :span="11" class="card-cvc">
            <label for="cardcvc">Card Cvc</label>
            <div ref="cardcvc">
            </div>
          </el-col>
          <el-col :span="12">
            <label for="cardexp">Card Expiry</label>
            <div ref="cardexp">
            </div>
          </el-col>
        </el-form-item>
        <div class="pay form-row">
          <el-button class="el-button black pay__btn">Pay</el-button>
        </div>
      </el-form>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
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

  mounted() {
    console.log(this.$stripe, 'refssss')
    const elements = this.$stripe.elements()
    const cardNumber = elements.create('cardNumber')
    const cardCVC = elements.create('cardCvc')
    const cardExpiry = elements.create('cardExpiry')
    cardNumber.mount(this.$refs.cardNumber)
    cardCVC.mount(this.$refs.cardcvc)
    cardExpiry.mount(this.$refs.cardexp)
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

.checkout__grid-left{
  width: 50%;
  padding: 10px;
}

 .checkout__grid-right {
   padding: 10px 20px;;
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
  background: #1b1a1a;
  color: #f8f5f2;
}

.el-input__inner {
  border: 1px solid #cdc9c6;
  font-weight: normal;

  &:focus{
    border: 1px solid #cdc9c6;
  }
}

.el-form{
  margin-top: 20px;
}

.el-form-item__label {
  line-height: 0;
  font-size: 13px;
  font-weight: 600;
}

.card-details{
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

.card-cvc{
  margin-right: 13px;
}

.el-col{
  line-height: 1.3;
}

.pay__btn{
  width: 100%;

  &:active, &:focus, &:hover{
    width: 100%
  }
}

.pay__grid{
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
</style>
