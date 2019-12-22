<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#1B1A1A"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="el-menu-logo">
        <nuxt-link to="/">Shop Center</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3" class="el-menu-navlist" @click="cartDrawer = true">
        <el-badge :value="quantity" class="item">
          <shopping-bag />
        </el-badge>
      </el-menu-item>
      <el-menu-item index="2" class="el-menu-navlist" @click="accountDrawer = true">
        Account
        <user-icon />
      </el-menu-item>
      <el-menu-item index="4" class="el-menu-navlist">
        <nuxt-link to="/orders">Orders</nuxt-link>
      </el-menu-item>
    </el-menu>
    <product-categories :categories="categories" />

    <el-drawer title="Your Shopping Cart" :visible.sync="cartDrawer" size="35%" class="cart__body">
      <cart-drawer :empty-cart="emptyCart" @close-cart-drawer="closeCartDrawer" />
    </el-drawer>
    <el-drawer :visible.sync="accountDrawer" size="35%">
      <account-drawer />
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCategories from './ProductCategories'
import ShoppingBag from './icons/ShoppingBag'
import UserIcon from './icons/UserIcon'
import CartDrawer from './drawer/CartDrawer'
import AccountDrawer from './drawer/AccountDrawer'

export default {
  components: {
    ProductCategories,
    ShoppingBag,
    UserIcon,
    CartDrawer,
    AccountDrawer
  },

  data() {
    return {
      activeIndex2: '1',
      cartDrawer: false,
      accountDrawer: false,
      categories: []
    }
  },

  computed: {
    ...mapState(['quantity']),
    emptyCart() {
      return this.$store.state.quantity <= 0
    }
  },

  async mounted() {
    const categories = await this.$axios.$get('/api/categories')
    this.categories = categories.data
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },

    closeCartDrawer(value) {
      this.cartDrawer = value
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
$off-white: #f8f5f2;
$off-black: #1b1a1a;

.el-menu-demo .el-menu-navlist {
  float: right;

  a {
    text-decoration: none;
    color: $off-white;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 1px $off-black;
}

.el-menu--horizontal > .el-menu-item a {
  text-decoration: none;
  color: $off-white;
}

.item {
  margin-top: -9px;
  margin-right: 20px;
}

.shopping-bag {
  position: absolute;
}

.svg-inline--fa {
  color: $off-white;
}
</style>
