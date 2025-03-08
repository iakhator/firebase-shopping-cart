<template>
    <div class="input-wrapper">
        <el-form-item
            :label="label"
            :prop="prop"
            :error="error"
            class=".el-input"
        >
            <el-input
                class="custom-input"
                :id="id"
                v-model="inputValue"
                :type="type"
                :placeholder="placeholder"
                :disabled="disabled"
                clearable
                @input="updateValue"
                @focus="handleFocus"
                @blur="handleBlur"
            >
                <template v-if="$slots.prefix" #prefix>
                    <slot name="prefix" />
                </template>
                <template v-if="$slots.suffix" #suffix>
                    <slot name="suffix" />
                </template>
            </el-input>
        </el-form-item>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    label: String,
    type: { type: String, default: 'text' },
    placeholder: String,
    disabled: Boolean,
    error: String,
    id: String,
    prop: String,
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

const inputValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
})

const updateValue = (event) => {
    emit('update:modelValue', event)
}

const handleFocus = () => emit('focus')
const handleBlur = () => emit('blur')
</script>

<style scoped>
.input-wrapper {
    width: 100%;
}

.el-input {
    height: 40px;
}

:deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5) inset;
}
</style>
