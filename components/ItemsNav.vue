<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Samsung" name="samsung" />
    <el-tab-pane label="Xiaomi" name="xiaomi" />
    <el-tab-pane label="Iphone" name="iphone" />
    <el-tab-pane label="Lg" name="lg" />
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab) {
      const itemId = tab.$el.id.split('-')[1]
      this.$router.push(itemId)
    }
  }
}
</script>

<style lang="scss">
.el-tabs__nav-scroll {
  overflow: hidden;
  padding: 0 10px;
}
</style>
