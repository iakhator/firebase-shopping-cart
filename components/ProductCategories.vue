<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="All" name="all" />
    <el-tab-pane label="Samsung" name="samsung" />
    <el-tab-pane label="Xiaomi" name="xiaomi" />
    <el-tab-pane label="Iphone" name="iphone" />
    <el-tab-pane label="Lg" name="lg" />
    {{ categories }}
  </el-tabs>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      activeName: 'first'
    }
  },

  methods: {
    handleClick(tab) {
      const itemId = tab.$el.id.split('-')[1]
      if (itemId === 'all') {
        this.$router.push('/')
        return
      }
      this.$router.push(`/${itemId}`)
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
