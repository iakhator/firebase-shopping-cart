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
                        <el-menu-item class="el-menu-navlist">
                            <user-icon />
                            <pop-over>
                                <template #trigger>
                                    <span>{{
                                        capitalize(loggedInUser)
                                    }}</span></template
                                >
                                <template #content="{ close }">
                                    <p>{{ capitalize(loggedInUser) }}</p>
                                    <div class="el-menu-link">
                                        <NuxtLink
                                            class="link"
                                            to="/profile"
                                            @click="close"
                                            >Profile</NuxtLink
                                        >
                                        <NuxtLink
                                            class="link"
                                            to="/order"
                                            @click="close"
                                            >Order</NuxtLink
                                        >
                                        <NuxtLink
                                            class="link"
                                            to="/about"
                                            @click="close"
                                            >Preference</NuxtLink
                                        >
                                    </div>
                                    <UIButton
                                        variant="primary"
                                        size="large"
                                        style="
                                            position: absolute;
                                            bottom: 0;
                                            width: 100px;
                                            right: 0;
                                        "
                                        @click="signOut"
                                    >
                                        SIGN OUT
                                    </UIButton>
                                </template>
                            </pop-over>
                        </el-menu-item>
                    </template>

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
                        @click="() => navigateTo('/cart')"
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
import ShoppingBag from '~/components/icons/ShoppingBag.vue'
import UserIcon from '~/components/icons/UserIcon.vue'
import AuthModal from '~/components/account/AuthModal.vue'
import PopOver from '~/components/ui/PopOver.vue'
import UIButton from '~/components/ui/UIButton.vue'

const router = useRouter()
const authStore = useAuthStore()
const cartStore = useCartStore()

const dialogVisible = ref(false)
const activeIndex2 = ref('1')
// const profileDrawer = ref(false)
const categories = ref([])

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
// $off-white: #f8f5f2;
// $off-black: #1b1a1a;

.custom-menu {
    display: flex;
    justify-content: center;
}
.el-menu-demo {
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
}

.el-menu-link {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    a:hover {
        text-decoration: underline;
    }
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
    span {
        margin-left: 3px;
    }
}

.el-menu.el-menu--horizontal {
    border-bottom: solid 1px $off-black;
}

.el-menu-item.is-active a {
    color: $off-white;

    &:hover {
        text-decoration: none;
    }
}

// .el-menu--horizontal > .el-menu-item a {
//   text-decoration: none;
//   color: $off-white;
// }

.item {
    // margin-top: -30px;
    display: flex;
    align-items: baseline;
    justify-content: baseline;
}

.svg-inline--fa {
    color: $off-white;
}
</style>
