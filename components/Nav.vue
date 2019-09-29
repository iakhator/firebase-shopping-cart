<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1" class="el-menu-logo">
        <nuxt-link to="/">Shop Center</nuxt-link>
      </el-menu-item>
      <el-submenu index="2" class="el-menu-navlist">
        <template slot="title">
          <font-awesome-icon icon="user" />
        </template>
        <el-menu-item index="2-1">profile</el-menu-item>
        <el-menu-item index="2-2">history</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" class="el-menu-navlist">
        <font-awesome-icon icon="shopping-bag" />
      </el-menu-item>
      <el-menu-item index="4" class="el-menu-navlist">
        <nuxt-link to="/orders">Orders</nuxt-link>
      </el-menu-item>
    </el-menu>
    <items-nav />
  </div>
</template>

<script>
import ItemsNav from './ItemsNav'
export default {
  components: {
    ItemsNav
  },
  data() {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-demo .el-menu-navlist {
  float: right;

  a {
    text-decoration: none;
  }
}

.el-menu--horizontal > .el-menu-item a {
  text-decoration: none;
}
</style>
