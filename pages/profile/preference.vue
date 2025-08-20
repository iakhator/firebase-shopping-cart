<script setup>
import { ref, reactive } from 'vue'
import { User, Bell, Shield, CreditCard, Truck, Palette } from 'lucide-vue-next'
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
      <p class="text-gray-600">Manage your account settings and preferences</p>
    </div>
    <ElRow :gutter="32">
      <!-- Sidebar Navigation -->
      <ElCol :xs="24" :sm="8" :md="6">
        <el-card class="nav sticky top-8">
          <template #header>
            <span class="flex items-center gap-2 font-bold font-briscolade">
              <IconSettings class="mr-2" size="15" />
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
                :size="16"
                :class="[activeSection === item.id ? 'active' : '']"
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
