<template>
  <el-button
    :class="buttonClass"
    :size="size"
    :icon="icon"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
    {{ label }}
  </el-button>
</template>

<script setup>
const props = defineProps({
  variant: { type: String, default: 'primary' }, // "primary" or "secondary"
  size: { type: String, default: 'default' }, // "small" | "default" | "large"
  icon: { type: Object, default: null },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: 'Save' },
})

const buttonClass = computed(() => ({
  primary: props.variant === 'primary',
  secondary: props.variant === 'secondary',
  'is-plain': props.variant === 'plain',
  'is-transparent': props.variant === 'transparent',
}))
</script>

<style scoped lang="scss">
/* Primary Button */
.primary {
  background: #000;
  color: #fff;
  border: none;
}

.primary:hover {
  background: #ffffff;
  color: #000;
  border: 1px solid #303133;
}

/* Secondary Button */
.secondary {
  background: white;
  color: #000;
  border: 1px solid #303133;
}

.secondary:hover {
  background: #000;
  color: white;
}

.el-button {
  margin-left: 0;
}
</style>
