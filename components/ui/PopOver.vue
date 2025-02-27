<template>
  <el-popover
    v-model:visible="visible"
    placement="top-start"
    :width="width"
    trigger="click"
    style="height: 400px"
  >
    <template #reference> <slot name="trigger" /></template>

    <div class="popover-content">
      <el-icon class="close-icon" @click="visible = false"><Close /></el-icon>
      <slot name="content" />
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
</script>

<style lang="scss" scoped>
:deep(.el-popper.el-popover) {
  height: 400px !important;
}

.popover-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
