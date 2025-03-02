<template>
  <el-row class="product__grid product">
    <el-col :md="10">
      <div>
        <img
          :src="item.imageUrl"
          class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt
        />
      </div>
    </el-col>
    <el-col :md="8" class="item__contents">
      <h3 class="capitalize item__contents-name">{{ item.name }}</h3>
      <span class="item__contents-quantity-price">{{ toUSD(itemPrice) }}</span>
      <p class="item__contents-description">{{ item.description }}</p>
      <el-form ref="form" :model="form">
        <div class="variant">
          <div class="item__contents-quantity">
            <span class="item__contents-spec-variant">Quantity :</span>
            <el-input-number
              v-model="form.qty"
              :min="1"
              :max="3"
              @change="handleQtyChange"
            ></el-input-number>
          </div>

          <div class="item__contents-variant">
            <p class="item__contents-spec-variant">Select variant:</p>
            <el-radio-group v-model="variant">
              <el-radio-button
                v-for="variant in item.variant"
                :key="variant"
                :label="variant"
                :value="variant"
              ></el-radio-button>
            </el-radio-group>
            <p class="error el-tag--danger" v-if="errorMessage">
              {{ errorMessage }}
            </p>
          </div>
        </div>
        <div class="action-button">
          <el-button round class="action-button-cart" @click="updateCart">
            Add to cart
          </el-button>
          <el-button round class="black" @click="buyNow">Buy now</el-button>
        </div>
      </el-form>
    </el-col>
    <el-col :md="6"> Shipped to you by <strong>Monaco</strong> </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-tabs class="el-card-options">
        <el-tab-pane label="Product Details">
          <div class="item__contents-specifications">
            <p v-for="(specification, key) in item.specification" :key="key">
              <span class="item__contents-spec">{{ key }} :</span>
              {{ specification }}
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Ratings/Review">Ratings/Review</el-tab-pane>
        <el-tab-pane label="FAQ">FAQ</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const route = useRoute()
const { toUSD } = useCurrency()

const variant = ref('')
const form = reactive({
  qty: 1,
})
let errorMessage = ref('')
const loading = ref(true)

const productId = route.params.itemId

const itemPrice = computed(() => item.value.price * form.qty)

const { data: item } = await useAsyncData('items', () =>
  $fetch(`/api/products/${productId}`)
)

function handleQtyChange(value) {
  form.qty = value
}

function updateCart() {
  const cartObject = {
    variantId: variant.value,
    quantity: form.qty,
    title: item.value.itemTitle,
    price: itemPrice.value || item.value.price,
    itemPhoto: item.value?.imageUrl || '',
    productId,
  }
  if (!cartObject.variantId) {
    errorMessage.value = 'You must select a variant'
  } else {
    // store.dispatch('addToCart', cartObject)
    cartStore.addToCart(cartObject, productId)
    errorMessage.value = ''
  }
}

function buyNow() {}
</script>

<style scoped lang="scss">
// variables
$font-weight-bold: 600;
$off-black: #1b1a1a;
$gray: #dcdfe6;

:deep(.el-tabs__nav) {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.item__contents {
  padding: 2px 35px;

  h3 {
    font-weight: $font-weight-bold;
    font-size: 1.5rem;
  }

  &-specifications {
    margin-top: 20px;
    position: relative;
    font-size: 0.89rem;

    &:after {
      content: '';
      width: 100%;
      border-bottom: solid 1px $gray;
      position: absolute;
      left: 0;
      top: 107%;
      z-index: 99;
    }

    p {
      margin-bottom: 4px;
    }

    .item__contents-spec {
      font-weight: $font-weight-bold;
    }
  }
}

.variant {
  margin-top: 20px;
}

.item__contents-spec-variant {
  font-weight: $font-weight-bold;
  margin-bottom: 5px;
  font-size: 0.89rem;
}

.item__contents-variant {
  position: relative;
  margin-top: 18px;
  &:after {
    content: '';
    width: 100%;
    border-bottom: solid 1px $gray;
    position: absolute;
    left: 0;
    top: 120%;
    z-index: 99;
  }
}

.item__contents-quantity {
  position: relative;
  margin-top: 18px;
  font-size: 0.89rem;

  &:after {
    content: '';
    width: 100%;
    border-bottom: solid 1px $gray;
    position: absolute;
    left: 0;
    top: 120%;
    z-index: 99;
  }

  &-price {
    display: flex;
    // font-weight: 600;
    font-size: 1.8rem;
    margin-top: 10px;
  }

  &-label {
    font-weight: 600;
  }
}

.action-button {
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
}

.error {
  color: #f56c6c;
  font-size: 0.75rem;
}
</style>
