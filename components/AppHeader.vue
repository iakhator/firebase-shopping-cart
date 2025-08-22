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
                        <span class="brand-name">
                            RingCart
                            <IconShoppingBag :size="10" color="white"
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
                                isAuthenticatedUser
                                    ? toggleDrawer()
                                    : navigateTo('/auth/login')
                            "
                            class="el-menu-navlist"
                        >
                            <template v-if="!isAuthenticatedUser">
                                <p class="display-name">Account</p>
                            </template>
                            <template v-else>
                                <el-dropdown
                                    ref="profileDropdown"
                                    trigger="click"
                                    placement="bottom-end"
                                >
                                    <span
                                        class="el-dropdown-link"
                                        style="cursor: pointer"
                                    >
                                        <IconCircleUserRound color="white" />
                                    </span>
                                    <template #dropdown>
                                        <div
                                            class="profile-content"
                                            style="
                                                padding: 16px;
                                                min-width: 220px;
                                            "
                                        >
                                            <div
                                                class="profile-avatar"
                                                style="
                                                    text-align: center;
                                                    margin-bottom: 12px;
                                                "
                                            >
                                                <el-avatar
                                                    :icon="UserFilled"
                                                    :size="70"
                                                />
                                                <p>
                                                    {{
                                                        capitalize(loggedInUser)
                                                    }}
                                                </p>
                                            </div>
                                            <div
                                                class="el-menu-link"
                                                style="margin-bottom: 12px"
                                            >
                                                <NuxtLink
                                                    class="link"
                                                    :to="`/user/${uid}`"
                                                    @click="closeDropdown"
                                                >
                                                    <el-icon
                                                        ><Avatar
                                                    /></el-icon>
                                                    <span>Profile</span>
                                                </NuxtLink>
                                                <NuxtLink
                                                    class="link"
                                                    to="/orders"
                                                    @click="closeDropdown"
                                                >
                                                    <el-icon><Grid /></el-icon>
                                                    <span>View Orders</span>
                                                </NuxtLink>

                                                <NuxtLink
                                                    class="link"
                                                    to="/profile/preference"
                                                    @click="closeDropdown"
                                                >
                                                    <el-icon
                                                        ><Setting
                                                    /></el-icon>
                                                    <span>Preference</span>
                                                </NuxtLink>
                                            </div>
                                            <UIButton
                                                variant="primary"
                                                size="large"
                                                @click="signOut"
                                                label="SIGN OUT"
                                                style="width: 100%"
                                            >
                                                <template #icon-right>
                                                    <span class="ml-2">
                                                        <el-icon
                                                            ><SwitchButton
                                                        /></el-icon>
                                                    </span>
                                                </template>
                                            </UIButton>
                                        </div>
                                    </template>
                                </el-dropdown>
                            </template>
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
        </el-menu>
    </el-header>
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
const profileDropdown = ref(null)

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

const closeDropdown = () => {
    if (profileDropdown.value) {
        profileDropdown.value.handleClose()
    }
}

onMounted(async () => {
    await cartStore.fetchCart()
    // const { categories: cat } = await $fetch('/api/categories')
    // categories.value = cat
})

const quantity = computed(() => cartStore.totalQuantity)
const isAuthenticatedUser = computed(() => authStore.isAuthenticatedUser)
const loggedInUser = computed(
    () => authStore.user?.name || authStore.user?.displayName || '',
)
const uid = computed(() => authStore.user?.uid)

async function signOut() {
    await authStore.logout()
    navigateTo('/')
    await nextTick()
    closeDropdown()
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

    &:hover {
        color: $off-white;
    }

    svg {
        position: absolute;
        top: 15px;
        right: -5;
    }
}

/* Desktop styles */
.desktop-menu {
    display: flex;
}

.item {
    display: flex;
    align-items: baseline;
    justify-content: baseline;
}

.display-name {
    margin-right: 5px;
    color: $white;
    font-weight: $font-weight-medium;
    font-size: $text-base;
    font-family: $font-brand;
}

.profile-avatar {
    font-family: $font-brand;
    font-size: $text-sm;
    font-weight: $font-weight-medium;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 20px;
}

.el-avatar {
    background-color: $black;
    width: 28px;
    height: 28px;

    &--icon {
        font-size: 20px;
    }
}

/* Mobile styles */
@media (max-width: 768px) {
    .el-menu-demo {
        width: 100%;
    }

    .logo {
        height: 24px;
    }

    .brand-name {
        font-size: $text-md;
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
