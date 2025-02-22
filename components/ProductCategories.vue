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

<script setup>
const router = useRouter()

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})

const activeName = ref('first')

function handleClick(tab) {
  const categoryId = tab.paneName
  if (categoryId === 'all') {
    router.push('/')
    return
  }
  router.push(`/categories/${categoryId}`)
}
</script>

<style lang="scss">
.el-tabs {
  position: fixed;
  top: 50px;
  padding: 12px;
  z-index: 1000;
  // background: #f8f5f2;
  // margin-bottom: 95px;
  width: 1600px;
  margin: 0 auto;
}
.el-tabs__nav-scroll {
  overflow: hidden;
  padding: 0 10px;
}
</style>
