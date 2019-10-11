<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#1B1A1A"
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
      <el-menu-item index="3" class="el-menu-navlist" @click="drawer = true">
        <el-badge :value="cartTotal" class="item">
          <font-awesome-icon icon="shopping-bag" class="shopping-bag" />
        </el-badge>
      </el-menu-item>
      <el-menu-item index="4" class="el-menu-navlist">
        <nuxt-link to="/orders">Orders</nuxt-link>
      </el-menu-item>
    </el-menu>
    <!-- <items-nav /> -->

    <el-drawer title="Cart" :visible.sync="drawer" size="35%">
      <div>me</div>
    </el-drawer>
  </div>
</template>

<script>
// import ItemsNav from './ItemsNav'
export default {
  // components: {
  //   ItemsNav
  // },
  data() {
    return {
      activeIndex2: '1',
      cartTotal: 1,
      drawer: false
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
$off-white: #f8f5f2;
$off-black: #1b1a1a;

.el-menu-demo .el-menu-navlist {
  float: right;

  a {
    text-decoration: none;
    color: $off-white;
  }
}

.el-menu.el-menu--horizontal {
  border-bottom: solid 1px $off-black;
}

.el-menu--horizontal > .el-menu-item a {
  text-decoration: none;
  color: $off-white;
}

.item {
  margin-top: -9px;
  margin-right: 20px;
}

.shopping-bag {
  position: absolute;
}

.svg-inline--fa {
  color: $off-white;
}
</style>
