<template>
    <el-header class="app-header" height="auto" padding="0">
        <nav class="header-nav">
            <!-- Logo -->
            <NuxtLink to="/" class="logo-link" aria-label="Home">
                <span class="brand-name">RingCart</span>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <div class="nav-links desktop-nav">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.label"
                    :to="item.to"
                    class="nav-link"
                    active-class="active"
                >
                    <el-icon v-if="item.icon" class="nav-icon"
                        ><component :is="item.icon"
                    /></el-icon>
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </div>

            <!-- Spacer -->
            <div class="flex-grow"/>

            <!-- Desktop Actions -->
            <div class="actions desktop-actions">
                <el-badge :value="cartQuantity" class="cart-badge">
                    <el-button
                        circle
                        aria-label="Cart"
                        class="icon-btn"
                        @click="goToCart"
                    >
                        <el-icon><IconShoppingBag /></el-icon>
                    </el-button>
                </el-badge>
                <el-dropdown
                    v-if="isAuthenticated"
                    trigger="click"
                    class="user-dropdown"
                >
                    <el-button circle aria-label="Account" class="icon-btn">
                        <el-icon><IconCircleUserRound /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="goToProfile">
                                <el-icon><Avatar /></el-icon>
                                Profile
                            </el-dropdown-item>
                            <el-dropdown-item @click="goToOrders">
                                <el-icon><Grid /></el-icon>
                                Orders
                            </el-dropdown-item>
                            <el-dropdown-item @click="goToSettings">
                                <el-icon><Setting /></el-icon>
                                Preferences
                            </el-dropdown-item>
                            <el-dropdown-item divided @click="signOut">
                                <el-icon><SwitchButton /></el-icon>
                                Sign Out
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <el-button
                    v-else
                    circle
                    aria-label="Login"
                    class="icon-btn"
                    @click="goToLogin"
                >
                    <el-icon><IconCircleUserRound /></el-icon>
                </el-button>
            </div>

            <!-- Mobile Hamburger -->
            <el-button
                class="mobile-menu-btn"
                circle
                aria-label="Open menu"
                @click="mobileDrawer = true"
            >
                <el-icon><Menu /></el-icon>
            </el-button>
        </nav>

        <!-- Mobile Drawer -->
        <el-drawer
            v-model="mobileDrawer"
            direction="ltr"
            size="80vw"
            class="mobile-drawer"
            :with-header="false"
        >
            <div class="drawer-header">
                <NuxtLink
                    to="/"
                    class="logo-link"
                    @click="mobileDrawer = false"
                >
                    <span class="brand-name">RingCart</span>
                </NuxtLink>
                <el-button
                    class="close-btn"
                    circle
                    @click="mobileDrawer = false"
                >
                    <el-icon><Close /></el-icon>
                </el-button>
            </div>
            <div class="drawer-links">
                <NuxtLink
                    v-for="item in navItems"
                    :key="item.label"
                    :to="item.to"
                    class="drawer-link"
                    active-class="active"
                    @click="mobileDrawer = false"
                >
                    <el-icon v-if="item.icon" class="nav-icon"
                        ><component :is="item.icon"
                    /></el-icon>
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </div>
            <div class="drawer-actions">
                <el-badge :value="cartQuantity" class="cart-badge">
                    <el-button
                        circle
                        aria-label="Cart"
                        class="icon-btn"
                        @click="goToCart"
                    >
                        <el-icon><IconShoppingBag /></el-icon>
                    </el-button>
                </el-badge>
                <el-button
                    v-if="!isAuthenticated"
                    circle
                    aria-label="Login"
                    class="icon-btn"
                    @click="goToLogin"
                >
                    <el-icon><IconCircleUserRound /></el-icon>
                </el-button>
                <div v-else class="drawer-user">
                    <div class="user-info">
                        <el-avatar :icon="UserFilled" :size="48" />
                        <span class="user-name">{{ displayName }}</span>
                    </div>
                    <el-divider />
                    <el-button
                        class="drawer-user-btn"
                        link
                        @click="goToProfile"
                    >
                        <el-icon><Avatar /></el-icon> Profile
                    </el-button>
                    <el-button class="drawer-user-btn" link @click="goToOrders">
                        <el-icon><Grid /></el-icon> Orders
                    </el-button>
                    <el-button
                        class="drawer-user-btn"
                        link
                        @click="goToSettings"
                    >
                        <el-icon><Setting /></el-icon> Preferences
                    </el-button>
                    <el-divider />
                    <el-button class="drawer-user-btn" link @click="signOut">
                        <el-icon><SwitchButton /></el-icon> Sign Out
                    </el-button>
                </div>
            </div>
        </el-drawer>
    </el-header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
    Menu,
    Close,
    Avatar,
    Setting,
    Grid,
    SwitchButton,
    UserFilled,
} from '@element-plus/icons-vue'
import { useAuthStore } from '~/stores/authStore'
import { useCartStore } from '~/stores/cartStore'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const mobileDrawer = ref(false)

const navItems = [
    { label: 'Home', to: '/', icon: null },
    // Add more navigation items as needed, e.g.:
    // { label: 'Shop', to: '/shop', icon: ShopIcon },
    // { label: 'About', to: '/about', icon: InfoIcon },
]

const isAuthenticated = computed(() => authStore.isAuthenticated)
const displayName = computed(
    () => authStore.user?.name || authStore.user?.displayName || 'Account',
)
const cartQuantity = computed(() => cartStore.totalQuantity)

function goToCart() {
    router.push('/cart')
    mobileDrawer.value = false
}
function goToLogin() {
    router.push('/auth/login')
    mobileDrawer.value = false
}
function goToProfile() {
    router.push(`/user/${authStore.user?.uid}`)
    mobileDrawer.value = false
}
function goToOrders() {
    router.push('/orders')
    mobileDrawer.value = false
}
function goToSettings() {
    router.push('/about')
    mobileDrawer.value = false
}
async function signOut() {
    await authStore.logout()
    router.push('/')
    mobileDrawer.value = false
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

.header-nav {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 16px;
    min-height: 64px;
}

.logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    margin-right: 24px;
}

.brand-name {
    font-weight: bold;
    font-size: 1.5rem;
    font-family: $font-stack-brand;
    letter-spacing: 1px;
}

.flex-grow {
    flex-grow: 1;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 18px;
}

.nav-link {
    display: flex;
    align-items: center;
    color: $text-white;
    font-size: 1rem;
    padding: 0 10px;
    text-decoration: none;
    transition: color 0.2s;
    border-radius: 6px;
    height: 48px;
    &:hover,
    &.active {
        color: #3b82f6;
        background: rgba(59, 130, 246, 0.08);
    }
}
.nav-icon {
    margin-right: 6px;
    font-size: 18px;
}

.actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon-btn {
    background: transparent !important;
    border: none !important;
    color: $text-white !important;
    font-size: 20px;
    padding: 0;
    margin: 0 2px;
    transition: background 0.2s;
    &:hover {
        background: rgba(59, 130, 246, 0.08) !important;
        color: #3b82f6 !important;
    }
}

.cart-badge {
    margin-right: 8px;
}

.user-dropdown {
    margin-left: 4px;
}

.mobile-menu-btn {
    display: none;
    margin-left: 12px;
}

.desktop-nav,
.desktop-actions {
    display: flex;
}

@media (max-width: 992px) {
    .header-nav {
        min-height: 56px;
        padding: 0 8px;
    }
    .brand-name {
        font-size: 1.2rem;
    }
    .nav-link {
        font-size: 0.98rem;
        height: 40px;
        padding: 0 8px;
    }
}

@media (max-width: 768px) {
    .desktop-nav,
    .desktop-actions {
        display: none;
    }
    .mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent !important;
        border: none !important;
        color: $text-white !important;
        font-size: 22px;
        margin-left: auto;
    }
}

/* Mobile Drawer Styles */
.mobile-drawer {
    .drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 8px 8px 16px;
        border-bottom: 1px solid #eee;
    }
    .drawer-links {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        gap: 2px;
    }
    .drawer-link {
        display: flex;
        align-items: center;
        color: #22223b;
        font-size: 1.08rem;
        padding: 12px 8px;
        text-decoration: none;
        border-radius: 6px;
        transition: background 0.18s;
        &:hover,
        &.active {
            background: #f3f4f6;
            color: #3b82f6;
        }
        .nav-icon {
            margin-right: 8px;
            font-size: 18px;
        }
    }
    .drawer-actions {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        .cart-badge {
            margin-bottom: 8px;
        }
        .drawer-user {
            width: 100%;
            .user-info {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 8px;
            }
            .user-name {
                font-weight: 600;
                font-size: 1.1rem;
            }
            .drawer-user-btn {
                width: 100%;
                text-align: left;
                padding: 8px 0;
                color: #22223b;
                font-size: 1rem;
                &:hover {
                    color: #3b82f6;
                    background: #f3f4f6;
                }
            }
        }
    }
    .close-btn {
        background: transparent !important;
        border: none !important;
        color: #22223b !important;
        font-size: 22px;
    }
}

/* Focus indicators for accessibility */
a:focus,
button:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}
</style>
