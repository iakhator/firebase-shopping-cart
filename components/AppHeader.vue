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
                        <span class="brand-name"
                            ><img src="/images/ringcart.png" />
                            <IconShoppingBag :size="18" color="white"
                        /></span>
                    </nuxt-link>
                </el-menu-item>

                <!-- Desktop Menu Items (hidden on mobile) -->
                <div class="flex-grow" />
                <div class="desktop-menu">
                    <ClientOnly>
                        <el-menu-item
                            index="5"
                            role="button"
                            @click="
                                isAuthenticated
                                    ? toggleDrawer()
                                    : navigateTo('/auth/login')
                            "
                            class="el-menu-navlist"
                        >
                            <p class="display-name">
                                {{ capitalize(loggedInUser) }}
                            </p>
                            <IconCircleUserRound color="white" />
                        </el-menu-item>
                        <el-menu-item
                            index="3"
                            class="el-menu-navlist"
                            @click="() => navigateTo('/cart')"
                        >
                            <el-badge :value="quantity" class="item">
                                <IconShoppingBag color="white" />
                            </el-badge>
                        </el-menu-item>
                    </ClientOnly>
                </div>
            </div>

            <!-- Mobile Menu Button -->

            <ClientOnly>
                <div class="mobile-menu-button">
                    <
                    <el-menu-item
                        index="3"
                        class="el-menu-navlist"
                        @click="() => navigateTo('/cart')"
                    >
                        <el-badge :value="quantity" class="item">
                            <!-- <shopping-bag /> -->
                            <IconShoppingBag color="white" />
                        </el-badge>
                    </el-menu-item>
                    <el-menu-item
                        v-if="!isAuthenticated"
                        index="5"
                        role="button"
                        @click="() => navigateTo('/auth/login')"
                        class="el-menu-navlist"
                    >
                        <IconCircleUserRound color="white" />
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
            </ClientOnly>
        </el-menu>
    </el-header>

    <!-- Profile Drawer -->
    <ClientOnly>
        <el-drawer v-model="profileOpen" direction="rtl" id="mobile-menu">
            <div class="profile-content">
                <div class="profile-avatar">
                    <el-avatar :icon="UserFilled" :size="70" />
                    <p>{{ capitalize(loggedInUser) }}</p>
                </div>
                <div class="el-menu-link">
                    <NuxtLink
                        class="link"
                        :to="`/user/${uid}`"
                        @click="toggleDrawer"
                    >
                        <el-icon><Avatar /></el-icon
                        ><span>Profile</span></NuxtLink
                    >
                    <NuxtLink class="link" to="/orders" @click="toggleDrawer"
                        ><el-icon><Grid /></el-icon
                        ><span>View Orders</span></NuxtLink
                    >
                    <NuxtLink class="link" to="/about" @click="toggleDrawer"
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
            >
                <template #icon-right>
                    <span class="ml-2">
                        <el-icon><SwitchButton /></el-icon
                    ></span>
                </template>
            </UIButton>
        </el-drawer>
    </ClientOnly>
</template>

<script setup>
import { Menu, Close } from '@element-plus/icons-vue'
import UIButton from '~/components/ui/UIButton.vue'
import {
    UserFilled,
    Setting,
    Grid,
    Avatar,
    SwitchButton,
} from '@element-plus/icons-vue'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

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
    profileOpen.value = !profileOpen.value
}

// onMounted(async () => {
//     const { categories: cat } = await $fetch('/api/categories')
//     categories.value = cat
// })

const quantity = computed(() => cartStore.totalQuantity)
const isAuthenticated = computed(() => authStore.isAuthenticated)
const loggedInUser = computed(
    () => authStore.user?.name || authStore.user?.displayName || '',
)
const uid = computed(() => authStore.user?.uid)

async function signOut() {
    await authStore.logout()
    navigateTo('/')
    await nextTick()
    toggleDrawer()
}
</script>

<style lang="scss" scoped>
.app-header {
    position: fixed;
    width: 100vw;
    z-index: 100;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    background-color: $black;
}

.el-top-menu {
    width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
}

.el-menu-item.is-active {
    border: none;
    color: $text-white;
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
    font-size: 1.5rem;
    font-family: $font-stack-brand;
    position: relative;

    img {
        width: 45px;
        height: 45px;
    }

    svg {
        position: absolute;
        top: 25px;
        right: -8px;
    }
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
        font-size: $text-base;
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
    display: flex;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
}

.profile-content {
    flex: 1;
}
</style>
