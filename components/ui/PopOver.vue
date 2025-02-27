<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom"
    :width="width"
    :height="height"
    trigger="click"
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
    default: 400,
  },
  height: {
    type: Number,
    default: 500,
  },
})

const visible = ref(false)
</script>

<style scoped>
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
  right: 5px;
  top: 0;
}

.close-icon:hover {
  color: #000;
  font-weight: bold;
}
</style>
