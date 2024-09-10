<template>
  <pre>{{ data }}</pre>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#1B1A1A"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1" class="el-menu-logo">
      <NuxtLink to="/">Shop Center</NuxtLink>
    </el-menu-item>
    <template v-if="isAuthenticated">
      <el-menu-item index="2" class="el-menu-navlist" @click="logOut()"
        >Sign out</el-menu-item
      >
      <el-menu-item class="el-menu-navlist" @click="profileDrawer = true">
        {{ loggedInUser.displayName }}
        <user-icon />
      </el-menu-item>
    </template>
    <el-menu-item
      v-else
      index="2"
      class="el-menu-navlist"
      @click="accountDrawer = true"
    >
      Account
      <user-icon />
    </el-menu-item>
    <el-menu-item index="3" class="el-menu-navlist" @click="cartDrawer = true">
      <el-badge :value="quantity" class="item">
        <shopping-bag />
      </el-badge>
    </el-menu-item>
  </el-menu>
  <ProductCategories :categories="categories" />

  <el-drawer
    title="Your Shopping Cart"
    v-model="cartDrawer"
    size="35%"
    class="cart__body"
  >
    <cart-drawer
      :empty-cart="emptyCart"
      @close-cart-drawer="closeCartDrawer"
      @close-on-checkout="closeOnCheckout"
    />
  </el-drawer>

  <el-drawer v-model="accountDrawer" size="35%">
    <account-drawer />
  </el-drawer>

  <el-drawer v-model="profileDrawer" size="35%">
    <profile-drawer />
  </el-drawer>
</template>

<script setup>
import ShoppingBag from '~/components/icons/ShoppingBag.vue'
import UserIcon from '~/components/icons/UserIcon.vue'
import AccountDrawer from '~/components/drawer/AccountDrawer.vue'

import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const { data } = useAuth()

const activeIndex2 = ref('1')
const cartDrawer = ref(false)
const accountDrawer = ref(false)
const profileDrawer = ref(false)
const categories = ref([])

onMounted(async () => {
  const bus = useNuxtApp().$bus
  const { categories: cat } = await $fetch('/api/categories')
  categories.value = cat

  bus.on('close-account-drawer', (value) => {
    accountDrawer.value = value
  })
  bus.on('open-account-drawer', (value) => {
    accountDrawer.value = value
  })
})

const cartItems = computed(() => store.state.cartItems)
const isAuthenticated = computed(() => data.value !== undefined)
const loggedInUser = computed(() => data.value?.user || {})
const quantity = computed(() => store.getters.quantity)
const emptyCart = computed(() => quantity.value <= 0)

function closeCartDrawer(value) {
  cartDrawer.value = value
  router.push('/')
}

function closeOnCheckout(value) {
  cartDrawer.value = value
}

async function logOut() {
  try {
    await auth.logout()
  } catch (error) {
    console.error(error)
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
