<template>
    <el-button
        :class="buttonClass"
        :size="size"
        :icon="loading ? null : icon"
        :loading="loading"
        :disabled="disabled || loading"
    >
        <span class="mr-2"><slot name="icon"/></span>{{ label }}
        <slot name="icon-right"/>
    </el-button>
</template>

<script setup>
const props = defineProps({
    variant: { type: String, default: 'primary' }, // "primary" or "secondary"
    size: { type: String, default: 'default' }, // "small" | "default" | "large"
    icon: { type: Object, default: null },
    disabled: { type: Boolean, default: false },
    label: { type: String, default: 'Save' },
    loading: { type: Boolean, default: false },
})

const buttonClass = computed(() => ({
    primary: props.variant === 'primary',
    secondary: props.variant === 'secondary',
    'is-plain': props.variant === 'plain',
    'is-transparent': props.variant === 'transparent',
    'is-mild': props.variant === 'mild',
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
    background: $off-black;
    color: $off-white;
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
