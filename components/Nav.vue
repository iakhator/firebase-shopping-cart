<template>
  <nav class="el-menu-demo">
    <el-menu
      :default-active="activeIndex2"
      mode="horizontal"
      background-color="#1B1A1A"
      text-color="#fff"
      class="custom-menu"
      active-text-color="#ffd04b"
    >
      <div class="el-menu-top" role="li">
        <el-menu-item index="1" class="el-menu-logo">
          <NuxtLink to="/">Shop Center</NuxtLink>
        </el-menu-item>

        <div class="el-menu-right">
          <template v-if="isAuthenticated">
            <el-menu-item index="2" class="el-menu-navlist" @click="logOut()"
              >Sign out</el-menu-item
            >
            <el-menu-item class="el-menu-navlist" @click="profileDrawer = true">
              {{ loggedInUser.displayName }}
              <user-icon />
            </el-menu-item>
          </template>
          <!-- <el-menu-item
            v-else
            index="2"
            class="el-menu-navlist"
            @click="accountDrawer = true"
          >
            <user-icon />
          </el-menu-item> -->

          <el-menu-item
            v-else
            index="5"
            class="el-menu-navlist"
            @click="dialogVisible = true"
          >
            <user-icon />
          </el-menu-item>
          <el-menu-item
            index="3"
            class="el-menu-navlist"
            @click="cartDrawer = true"
          >
            <el-badge :value="quantity" class="item">
              <shopping-bag />
            </el-badge>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
    <ProductCategories :categories="categories" />
  </nav>

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

  <el-drawer v-model="profileDrawer" size="35%">
    <profile-drawer />
  </el-drawer>

  <Teleport to="body">
    <el-dialog v-model="dialogVisible" width="400" :before-close="handleClose">
      <AuthModal @close-dialog="handleClose" />
    </el-dialog>
  </Teleport>
</template>

<script setup>
import ShoppingBag from '~/components/icons/ShoppingBag.vue'
import UserIcon from '~/components/icons/UserIcon.vue'
import CartDrawer from '~/components/drawer/CartDrawer.vue'
import AuthModal from '~/components/account/AuthModal.vue'
import Login from '~/components/account/Login.vue'
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/authStore'
// const data = ref({})

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const dialogVisible = ref(false)
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

  cartStore.getCart()
})

const cartItems = computed(() => cartStore.state.cartItems)
const quantity = computed(() => cartStore.totalQty)
const isAuthenticated = computed(() => authStore.isAuthenticated)
const loggedInUser = computed(() => authStore.user || {})
const emptyCart = computed(() => quantity.value <= 0)

function closeCartDrawer(value) {
  cartDrawer.value = value
  router.push('/')
}

function closeOnCheckout(value) {
  cartDrawer.value = value
}

function handleClose() {
  dialogVisible.value = false
}

async function logOut() {
  try {
    await authStore.logout()
  } catch (error) {
    console.error(error)
  }
}
</script>

<style lang="scss" scoped>
$off-white: #f8f5f2;
$off-black: #1b1a1a;

.custom-menu {
  display: flex;
  justify-content: center;
}
.el-menu-demo {
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.el-menu-top {
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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
  margin-top: -30px;
}

.svg-inline--fa {
  color: $off-white;
}
</style>
