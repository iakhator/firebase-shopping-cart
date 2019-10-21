<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-for="category in categories"
      :key="category.id"
      :label="category.name"
      :name="category.id"
    />
  </el-tabs>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
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
