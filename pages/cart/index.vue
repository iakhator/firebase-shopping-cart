<template>
  <h3>YOUR BAG</h3>
  <div class="cart">
    <!-- <div v-if="emptyCart" class="cart__empty">
      <span><shopping-bag-black class="no__cart" /></span>
      <p>Your bag is empty</p>
    </div> -->
    <div class="cart-container">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p>Size: {{ item.size }}</p>
            <p>Color: {{ item.color }}</p>
            <p class="price">${{ item.price }}</p>
          </div>
          <div class="item-actions">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
          <button class="delete-btn" @click="removeItem(item)">🗑</button>
        </div>
      </div>

      <div class="order-summary">
        <h2>Order Summary</h2>
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

        <button class="checkout-btn">Go to Checkout →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cartItems = ref([
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    image: '/tshirt.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    image: '/shirt.png',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Skinny Fit Jeans',
    size: 'Large',
    color: 'Blue',
    price: 240,
    image: '/jeans.png',
    quantity: 1,
  },
])

const deliveryFee = 15

const subtotal = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
const discount = computed(() => Math.round(subtotal.value * 0.2))
const total = computed(() => subtotal.value - discount.value + deliveryFee)

const increaseQuantity = (item) => item.quantity++
const decreaseQuantity = (item) =>
  item.quantity > 1 ? item.quantity-- : removeItem(item)
const removeItem = (item) => {
  cartItems.value = cartItems.value.filter((i) => i.id !== item.id)
}
</script>

<style lang="scss" scoped>
.cart-container {
  display: flex;
  gap: 20px;
  max-width: 1600px;
  margin: 20px auto;
  align-items: flex-start;

  // padding: 20px;

  .cart-items {
    flex: 2;
    // background: #fff;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid #cac1c1;

    .cart-item {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px 0;
      border-bottom: 1px solid #cac1c1;

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
        align-items: center;
        background: #f5f5f5;
        border-radius: 10px;
        padding: 5px 10px;

        button {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }

        span {
          margin: 0 10px;
          font-weight: bold;
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
      width: 100%;
      padding: 12px;
      background: black;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
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
