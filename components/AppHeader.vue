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
            <div class="el-top-menu">
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
                        role="button"
                        @click="
                            isAuthenticated
                                ? toggleDrawer()
                                : (dialogVisible = true)
                        "
                        class="el-menu-navlist"
                    >
                        <p class="display-name">
                            {{ capitalize(loggedInUser) }}
                        </p>
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
                <el-menu-item
                    v-if="!isAuthenticated"
                    index="5"
                    role="button"
                    @click="() => navigateTo('/auth/login')"
                    class="el-menu-navlist"
                >
                    <user-icon />
                </el-menu-item>
                <el-button
                    v-else
                    type="primary"
                    circle
                    @click="toggleDrawer"
                    aria-label="Toggle mobile menu"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                >
                    <el-icon v-if="profileOpen"><Close /></el-icon>
                    <el-icon v-else><Menu /></el-icon>
                </el-button>
            </div>
        </el-menu>
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

    <!-- Profile Drawer -->
    <el-drawer v-model="profileOpen" direction="rtl" id="mobile-menu">
        <!-- <template #header="{ close, titleId, titleClass, title }">
            <b>{{ title }}</b>
        </template> -->
        <div class="profile-content">
            <div class="profile-avatar">
                <el-avatar :icon="UserFilled" :size="70" />
                <p>{{ capitalize(loggedInUser) }}</p>
            </div>
            <div class="el-menu-link">
                <NuxtLink class="link" to="/profile" @click="close">
                    <el-icon><Avatar /></el-icon><span>Profile</span></NuxtLink
                >
                <NuxtLink class="link" to="/order" @click="close"
                    ><el-icon><Grid /></el-icon><span>Order</span></NuxtLink
                >
                <NuxtLink class="link" to="/about" @click="close"
                    ><el-icon><Setting /></el-icon>
                    <span>Preference</span></NuxtLink
                >
            </div>
        </div>
        <UIButton
            variant="primary"
            size="large"
            @click="signOut"
            label="SIGN OUT"
        />
    </el-drawer>
</template>

<script setup>
import { Menu, Close } from '@element-plus/icons-vue'
import ShoppingBag from '~/components/icons/ShoppingBag.vue'
import UserIcon from '~/components/icons/UserIcon.vue'
import AuthModal from '~/components/account/AuthModal.vue'
import PopOver from '~/components/ui/PopOver.vue'
import UIButton from '~/components/ui/UIButton.vue'
import { UserFilled, Setting, Grid, Avatar } from '@element-plus/icons-vue'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const dialogVisible = ref(false)
// const activeIndex2 = ref('1')
// const profileDrawer = ref(false)
const categories = ref([])

const activeIndex = ref('1')
const profileOpen = ref(false)

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
const toggleDrawer = () => {
    console.log('toggleDrawer')
    profileOpen.value = !profileOpen.value
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
    await nextTick()
    toggleDrawer()
}
</script>

<style lang="scss" scoped>
/* .el-menu-demo {
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
} */

.app-header {
    position: fixed;
    width: 100vw;
    z-index: 100;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    background-color: $black;
}

.el-top-menu {
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

.display-name {
    margin-right: 5px;
    color: $white;
}

.profile-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
}

.el-avatar {
    background-color: $black;

    &--icon {
        font-size: 40px;
    }
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

.profile-content {
    flex: 1;
}
</style>
