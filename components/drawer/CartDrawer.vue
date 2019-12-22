<template>
  <div v-show="emptyCart">
    <h6>Your bag is empty</h6>
    <shopping-bag-black class="no__cart" />
    <el-button round class="no__cart-btn" @click="closeCartDrawer">
      Browse Products
    </el-button>
  </div>
</template>

<script>
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

  methods: {
    closeCartDrawer() {
      this.$emit('close-cart-drawer', false)
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
