<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#1B1A1A"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="el-menu-logo">
        <nuxt-link to="/">Shop Center</nuxt-link>
      </el-menu-item>
      <template v-if="isAuthenticated">
        <el-menu-item class="el-menu-navlist" @click="logOut()">Sign out</el-menu-item>
        <el-menu-item class="el-menu-navlist" @click="profileDrawer = true">
          {{ loggedInUser.displayName }}
          <user-icon />
        </el-menu-item>
      </template>
      <el-menu-item v-else class="el-menu-navlist" @click="accountDrawer = true">
        Account
        <user-icon />
      </el-menu-item>
      <el-menu-item index="3" class="el-menu-navlist" @click="cartDrawer = true">
        <el-badge :value="quantity" class="item">
          <shopping-bag />
        </el-badge>
      </el-menu-item>
    </el-menu>
    <product-categories :categories="categories" />

    <el-drawer title="Your Shopping Cart" :visible.sync="cartDrawer" size="35%" class="cart__body">
      <cart-drawer
        :empty-cart="emptyCart"
        @close-cart-drawer="closeCartDrawer"
        @close-on-checkout="closeOnCheckout"
      />
    </el-drawer>

    <el-drawer :visible.sync="accountDrawer" size="35%">
      <account-drawer />
    </el-drawer>

    <el-drawer :visible.sync="profileDrawer" size="35%">
      <profile-drawer />
    </el-drawer>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ProductCategories from './ProductCategories'
import ShoppingBag from './icons/ShoppingBag'
import UserIcon from './icons/UserIcon'
import CartDrawer from './drawer/CartDrawer'
import AccountDrawer from './drawer/AccountDrawer'
import ProfileDrawer from './drawer/ProfileDrawer'

export default {
  components: {
    ProductCategories,
    ShoppingBag,
    UserIcon,
    CartDrawer,
    AccountDrawer,
    ProfileDrawer
  },

  data() {
    return {
      activeIndex2: '1',
      cartDrawer: false,
      accountDrawer: false,
      profileDrawer: false,
      categories: []
    }
  },

  computed: {
    ...mapState(['cartItems']),

    ...mapGetters(['isAuthenticated', 'loggedInUser', 'quantity']),

    emptyCart() {
      return this.quantity <= 0
    }
  },

  created() {
    this.$bus.$on('close-account-drawer', (value) => {
      this.accountDrawer = value
    })

    this.$bus.$on('open-account-drawer', (value) => {
      console.log(value)
      this.accountDrawer = value
    })
  },

  async mounted() {
    const categories = await this.$axios.$get('/api/categories')
    this.categories = categories.data
  },

  methods: {
    closeCartDrawer(value) {
      this.cartDrawer = value
      this.$router.push('/')
    },

    closeOnCheckout(value) {
      this.cartDrawer = value
    },

    async logOut() {
      try {
        await this.$auth.logout()
      } catch (error) {
        console.error(error)
      }
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
}

.shopping-bag {
  position: absolute;
}

.svg-inline--fa {
  color: $off-white;
}
</style>
