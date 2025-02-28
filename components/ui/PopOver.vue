<template>
  <el-popover
    v-model:visible="visible"
    placement="top-start"
    :width="width"
    popper-style="height: 400px; overflow: auto;"
    trigger="click"
    style="height: 400px; background-color: red !important"
  >
    <template #reference> <slot name="trigger" /></template>

    <div class="popover-content">
      <el-icon class="close-icon" @click="visible = false"><Close /></el-icon>
      <slot name="content" :close="closePopover" />
    </div>
  </el-popover>
</template>

<script setup>
import { Close } from '@element-plus/icons-vue'

const props = defineProps({
  width: {
    type: Number,
    default: 350,
  },
})

const visible = ref(false)

const closePopover = () => {
  visible.value = false
}
</script>

<style lang="scss" scoped>
:deep(.el-popover.is-light) {
  height: 400px !important;
  background: red;
  color: pink;
}
:deep(.el-popper) {
  min-height: 400px;
}
:deep(.el-popover.el-popper) {
  height: 400px !important;
  background: red;
  color: pink;
}

.popover-content {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  position: relative;
  height: 100%;
}

.close-icon {
  cursor: pointer;
  font-size: 18px;
  color: #000;
  transition: color 0.2s;
  position: absolute;
  right: 10px;
  top: 15;
}

.close-icon:hover {
  color: #000;
  font-weight: bold;
}
</style>
