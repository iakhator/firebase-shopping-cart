<script setup>
import { ref, reactive } from 'vue'
import {
    User,
    Bell,
    Shield,
    CreditCard,
    Truck,
    Palette,
    MapPin,
    Camera,
    Save,
    Settings,
    Edit,
    Trash2,
    Lock,
    Eye,
    EyeOff,
    Globe,
    Sun,
    Moon,
    Languages,
    DollarSign,
} from 'lucide-vue-next'
import Profile from '~/components/preference/Profile.vue'
import Notifications from '~/components/preference/Notifications.vue'
import Privacy from '~/components/preference/Privacy.vue'
import Payment from '~/components/preference/Payment.vue'
import Shipping from '~/components/preference/Shipping.vue'
import Appearance from '~/components/preference/Appearance.vue'

const activeSection = ref('profile')

const preferenceComponents = {
    profile: Profile,
    notifications: Notifications,
    privacy: Privacy,
    payment: Payment,
    shipping: Shipping,
    appearance: Appearance,
}

const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'shipping', label: 'Shipping', icon: Truck },
    { id: 'appearance', label: 'Appearance', icon: Palette },
]

// Privacy section state

// Security section state
const passwordVisible = ref(false)

function handleSaveShipping() {
    // Save shipping logic
}

function handleSaveAppearance() {
    // Save appearance logic
}
</script>

<template>
    <div class="container mx-auto px-4">
        <el-breadcrumb separator="/" class="mb-4">
            <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Profile</el-breadcrumb-item>
            <el-breadcrumb-item>Preferences</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="mb-4">
            <h2 class="mb-2 font-briscolade text-2xl">Account Preferences</h2>
            <p class="text-gray-600">
                Manage your account settings and preferences
            </p>
        </div>
        <ElRow :gutter="32">
            <!-- Sidebar Navigation -->
            <ElCol :xs="24" :sm="8" :md="6">
                <el-card class="nav sticky top-8">
                    <template #header>
                        <span
                            class="flex items-center gap-2 font-bold font-briscolade"
                        >
                            <Settings class="h-5 w-5" />
                            Settings
                        </span>
                    </template>
                    <nav>
                        <div
                            v-for="item in menuItems"
                            :key="item.id"
                            :class="[
                                'w-full flex items-center gap-2 px-4 py-3 cursor-pointer transition-colors rounded-none',
                                activeSection === item.id
                                    ? 'active'
                                    : 'text-gray-700 hover:bg-gray-50',
                            ]"
                            @click="activeSection = item.id"
                        >
                            <el-icon
                                :size="18"
                                :class="[
                                    'h-5 w-5',
                                    activeSection === item.id ? 'active' : '',
                                ]"
                            >
                                <component :is="item.icon"
                            /></el-icon>
                            {{ item.label }}
                        </div>
                    </nav>
                </el-card>
            </ElCol>
            <!-- Main Content -->
            <ElCol :xs="24" :sm="16" :md="18">
                <component
                    v-if="activeSection"
                    :is="preferenceComponents[activeSection]"
                />

                <!-- Shipping Section -->
                <!-- <div v-else-if="activeSection === 'shipping'" class="space-y-6">
                    <ElCard>
                        <template #header>
                            <span class="font-bold">Shipping Addresses</span>
                            <div class="text-gray-500 text-sm">
                                Manage your shipping addresses
                            </div>
                        </template>
                        <div class="space-y-4">
                            <div
                                v-for="address in shipping.addresses"
                                :key="address.label"
                                class="border rounded-lg p-4"
                            >
                                <div
                                    class="flex items-start justify-between mb-2"
                                >
                                    <div>
                                        <p class="font-medium">
                                            {{ address.label }}
                                        </p>
                                        <ElTag
                                            v-if="address.default"
                                            type="success"
                                            class="text-xs"
                                            >Default</ElTag
                                        >
                                    </div>
                                    <ElButton type="text" size="small">
                                        <Edit class="h-4 w-4" />
                                        Edit
                                    </ElButton>
                                </div>
                                <div class="text-sm text-gray-600">
                                    <p>{{ address.name }}</p>
                                    <p>{{ address.address }}</p>
                                    <p>
                                        {{ address.city }},
                                        {{ address.zip }}
                                    </p>
                                    <p>{{ address.country }}</p>
                                </div>
                            </div>
                            <ElButton
                                type="default"
                                class="w-full bg-transparent"
                            >
                                <MapPin class="h-4 w-4 mr-2" />
                                Add New Address
                            </ElButton>
                        </div>
                    </ElCard>
                    <ElCard>
                        <template #header>
                            <span class="font-bold">Shipping Preferences</span>
                            <div class="text-gray-500 text-sm">
                                Set your default shipping options
                            </div>
                        </template>
                        <div class="space-y-4">
                            <ElFormItem label="Default Shipping Speed">
                                <ElSelect v-model="shipping.preferences.speed">
                                    <ElOption
                                        label="Standard (5-7 days)"
                                        value="standard"
                                    />
                                    <ElOption
                                        label="Express (2-3 days)"
                                        value="express"
                                    />
                                    <ElOption
                                        label="Overnight"
                                        value="overnight"
                                    />
                                </ElSelect>
                            </ElFormItem>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="font-medium"
                                        >Delivery Instructions</span
                                    >
                                    <p class="text-sm text-gray-600">
                                        Leave packages at door if not home
                                    </p>
                                </div>
                                <ElSwitch
                                    v-model="shipping.preferences.instructions"
                                />
                            </div>
                        </div>
                    </ElCard>
                    <div class="flex justify-end">
                        <ElButton type="primary" @click="handleSaveShipping">
                            <Save class="h-4 w-4 mr-1" />
                            Save Shipping Info
                        </ElButton>
                    </div>
                </div> -->

                <!-- Appearance Section -->
                <!-- <div
                    v-else-if="activeSection === 'appearance'"
                    class="space-y-6"
                >
                    <ElCard>
                        <template #header>
                            <span class="font-bold">Theme</span>
                            <div class="text-gray-500 text-sm">
                                Choose your preferred theme
                            </div>
                        </template>
                        <div class="grid grid-cols-3 gap-4">
                            <div
                                :class="[
                                    'border-2 rounded-lg p-4 cursor-pointer',
                                    appearance.theme === 'light'
                                        ? 'border-blue-500'
                                        : 'border-gray-200',
                                ]"
                                @click="appearance.theme = 'light'"
                            >
                                <Sun class="w-full h-8 mb-2 text-yellow-400" />
                                <p class="text-sm font-medium text-center">
                                    Light
                                </p>
                            </div>
                            <div
                                :class="[
                                    'border-2 rounded-lg p-4 cursor-pointer',
                                    appearance.theme === 'dark'
                                        ? 'border-blue-500'
                                        : 'border-gray-200',
                                ]"
                                @click="appearance.theme = 'dark'"
                            >
                                <Moon class="w-full h-8 mb-2 text-gray-800" />
                                <p class="text-sm font-medium text-center">
                                    Dark
                                </p>
                            </div>
                            <div
                                :class="[
                                    'border-2 rounded-lg p-4 cursor-pointer',
                                    appearance.theme === 'system'
                                        ? 'border-blue-500'
                                        : 'border-gray-200',
                                ]"
                                @click="appearance.theme = 'system'"
                            >
                                <Globe class="w-full h-8 mb-2 text-green-500" />
                                <p class="text-sm font-medium text-center">
                                    System
                                </p>
                            </div>
                        </div>
                    </ElCard>
                    <ElCard>
                        <template #header>
                            <span class="font-bold">Language & Region</span>
                            <div class="text-gray-500 text-sm">
                                Set your language and regional preferences
                            </div>
                        </template>
                        <div class="space-y-4">
                            <ElFormItem label="Language">
                                <ElSelect v-model="appearance.language">
                                    <ElOption label="English" value="en" />
                                    <ElOption label="Español" value="es" />
                                    <ElOption label="Français" value="fr" />
                                    <ElOption label="Deutsch" value="de" />
                                </ElSelect>
                            </ElFormItem>
                            <ElFormItem label="Currency">
                                <ElSelect v-model="appearance.currency">
                                    <ElOption label="USD ($)" value="usd" />
                                    <ElOption label="EUR (€)" value="eur" />
                                    <ElOption label="GBP (£)" value="gbp" />
                                    <ElOption label="CAD ($)" value="cad" />
                                </ElSelect>
                            </ElFormItem>
                            <ElFormItem label="Time Zone">
                                <ElSelect v-model="appearance.timezone">
                                    <ElOption
                                        label="Pacific Standard Time"
                                        value="pst"
                                    />
                                    <ElOption
                                        label="Mountain Standard Time"
                                        value="mst"
                                    />
                                    <ElOption
                                        label="Central Standard Time"
                                        value="cst"
                                    />
                                    <ElOption
                                        label="Eastern Standard Time"
                                        value="est"
                                    />
                                </ElSelect>
                            </ElFormItem>
                        </div>
                    </ElCard>
                    <div class="flex justify-end">
                        <ElButton type="primary" @click="handleSaveAppearance">
                            <Save class="h-4 w-4 mr-1" />
                            Save Appearance
                        </ElButton>
                    </div>
                </div> -->
            </ElCol>
        </ElRow>
    </div>
</template>

<style scoped lang="scss">
:deep(.nav) {
    .el-card__body {
        padding: 0;
    }
}

nav {
    div {
        padding: 10px 2px;
        font-size: $text-sm;

        &.active {
            background: $bg-gray-100;
            color: $off-black;
            font-weight: $font-weight-bold;
            border-right: 4px solid $off-black;
        }
    }
}

.container {
    /*max-width: 1100px;
    */
    width: 100%;
}

.sticky {
    position: sticky;
    top: 32px;
}

.menu-active {
    background: #f5faff;
    color: #2563eb;
    font-weight: 500;
    border-right: 4px solid #2563eb;
}
.menu-inactive {
    color: #374151;
}
</style>
