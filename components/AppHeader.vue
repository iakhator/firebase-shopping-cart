<template>
    <el-header class="app-header" height="auto" padding="0">
        <!-- Desktop Menu -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#000"
            text-color="#fff"
            :ellipsis="false"
            @select="handleSelect"
            aria-label="Main Navigation Menu"
        >
            <el-menu-item index="0">
                <nuxt-link to="/" class="logo-link" aria-label="Home">
                    <span class="brand-name">Your Brand</span>
                </nuxt-link>
            </el-menu-item>

            <!-- Desktop Menu Items (hidden on mobile) -->
            <div class="flex-grow" />
            <div class="desktop-menu">
                <el-menu-item
                    index="5"
                    class="el-menu-navlist"
                    @click="dialogVisible = true"
                >
                    <user-icon />
                </el-menu-item>
                <el-menu-item
                    index="3"
                    class="el-menu-navlist"
                    @click="() => navigateTo('/cart')"
                >
                    <el-badge :value="quantity" class="item">
                        <shopping-bag />
                    </el-badge>
                </el-menu-item>
            </div>

            <!-- Mobile Menu Button -->
            <div class="mobile-menu-button">
                <
                <el-menu-item
                    index="3"
                    class="el-menu-navlist"
                    @click="() => navigateTo('/cart')"
                >
                    <el-badge :value="quantity" class="item">
                        <shopping-bag />
                    </el-badge>
                </el-menu-item>
                <el-button
                    type="primary"
                    circle
                    @click="toggleMobileMenu"
                    aria-label="Toggle mobile menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                >
                    <el-icon v-if="mobileMenuOpen"><Close /></el-icon>
                    <el-icon v-else><Menu /></el-icon>
                </el-button>
            </div>
        </el-menu>

        <!-- Mobile Menu Drawer -->
        <el-drawer
            v-model="mobileMenuOpen"
            title="Menu"
            direction="rtl"
            size="70%"
            id="mobile-menu"
        >
            <el-menu
                :default-active="activeIndex"
                class="mobile-menu-items"
                @select="handleMobileSelect"
            >
                <el-menu-item index="1">
                    <nuxt-link to="/" aria-label="Home">Home</nuxt-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <nuxt-link to="/about" aria-label="About">About</nuxt-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <nuxt-link to="/services" aria-label="Services"
                        >Services</nuxt-link
                    >
                </el-menu-item>
                <el-menu-item index="4">
                    <nuxt-link to="/contact" aria-label="Contact"
                        >Contact</nuxt-link
                    >
                </el-menu-item>
            </el-menu>
        </el-drawer>
    </el-header>

    <Teleport to="body">
        <el-dialog
            v-model="dialogVisible"
            width="400"
            :before-close="handleClose"
        >
            <AuthModal @close-dialog="handleClose" />
        </el-dialog>
    </Teleport>
</template>

<script setup>
import { Menu, Close } from '@element-plus/icons-vue'
import ShoppingBag from '~/components/icons/ShoppingBag.vue'
import UserIcon from '~/components/icons/UserIcon.vue'
import AuthModal from '~/components/account/AuthModal.vue'
import PopOver from '~/components/ui/PopOver.vue'
import UIButton from '~/components/ui/UIButton.vue'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const dialogVisible = ref(false)
// const activeIndex2 = ref('1')
// const profileDrawer = ref(false)
const categories = ref([])

const activeIndex = ref('1')
const mobileMenuOpen = ref(false)

// Handle desktop menu selection
const handleSelect = (key) => {
    activeIndex.value = key
}

// Handle mobile menu selection
const handleMobileSelect = (key) => {
    activeIndex.value = key
    mobileMenuOpen.value = false
}

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(async () => {
    const { categories: cat } = await $fetch('/api/categories')
    categories.value = cat
})

const quantity = computed(() => cartStore.totalQuantity)
const isAuthenticated = computed(() => authStore.isAuthenticated)
const loggedInUser = computed(
    () => authStore.user?.name || authStore.user?.displayName || '',
)

function handleClose() {
    dialogVisible.value = false
}

async function signOut() {
    await authStore.logout()
    navigateTo('/')
}
</script>

<style lang="scss" scoped>
.app-header {
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    background-color: $black;
}

.el-menu-demo {
    width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.flex-grow {
    flex-grow: 1;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
}

.logo {
    height: 32px;
    margin-right: 10px;
}

.brand-name {
    font-weight: bold;
    font-size: 1.2rem;
}

/* Desktop styles */
.desktop-menu {
    display: flex;
}

.mobile-menu-button {
    display: none;
}

.item {
    display: flex;
    align-items: baseline;
    justify-content: baseline;
}

/* Mobile styles */
@media (max-width: 768px) {
    .desktop-menu {
        display: none;
    }

    .el-menu-demo {
        width: 100%;
    }

    .mobile-menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: 16px;
    }

    .mobile-menu-items {
        border-right: none;
    }

    .logo {
        height: 24px;
    }

    .brand-name {
        font-size: 1rem;
    }
}

/* Accessible focus indicators */
a:focus,
button:focus {
    outline: 2px solid var(--el-color-primary);
    outline-offset: 2px;
}

/* Ensure links inside menu items are full width */
.el-menu-item a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
}
</style>
