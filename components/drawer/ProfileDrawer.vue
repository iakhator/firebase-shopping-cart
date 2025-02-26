<script setup>
defineOptions({
  name: 'ProfileDrawer',
})
const emit = defineEmits(['close-profile-drawer'])
const authStore = useAuthStore()

const userId = computed(() => authStore.user.uid)

async function logOut() {
  try {
    await authStore.logout()
  } catch (error) {
    console.error(error)
  }
}

function handleNavigation(route) {
  navigateTo(route)
  emit('close-profile-drawer', route)
}
</script>

<template>
  <div class="el-menu-navlist" @click="logOut()">Sign out</div>

  <ul class="el-menu-logo">
    <li>
      <nuxt-link
        role="button"
        @click="() => handleNavigation(`/profile/${userId}`)"
        >Profile</nuxt-link
      >
    </li>
    <li class="el-menu-navlist">
      <nuxt-link to="/orders">Orders</nuxt-link>
    </li>
  </ul>
</template>
