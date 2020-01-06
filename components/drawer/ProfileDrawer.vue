<template>
  <div>
    <ul class="el-menu-logo">
      <li><nuxt-link :to="`/profile/${loggedInUser.uid}`">Profile</nuxt-link></li>
      <li class="el-menu-navlist">
        <nuxt-link to="/orders">Orders</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
