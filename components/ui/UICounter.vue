<script setup>
import { Plus, Minus } from '@element-plus/icons-vue'

const props = defineProps({
    modelValue: Number,
    min: { type: Number, default: 1 },
})

const emit = defineEmits(['update:modelValue', 'increment', 'decrement'])

const countSpan = ref(null) // Reference to the span element

const increase = () => {
    emit('update:modelValue', props.modelValue + 1)
    emit('increment')
}
const decrease = () => {
    if (props.modelValue > 1) emit('update:modelValue', props.modelValue - 1)
    emit('decrement')
}

const handleInput = (event) => {
    const selection = window.getSelection()
    const range = selection.getRangeAt(0)
    const offset = range.startOffset

    let value = event.target.innerText.replace(/\D/g, '') // Remove non-numeric characters
    value = value ? parseInt(value, 10) : props.min
    emit('update:modelValue', value)

    nextTick(() => {
        const newRange = document.createRange()
        newRange.setStart(
            countSpan.value.childNodes[0],
            Math.min(offset, value.toString().length),
        )
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
    })
}

const validateInput = (event) => {
    let value = parseInt(event.target.innerText.trim())
    if (isNaN(value) || value < props.min) {
        value = props.min
    }
    event.target.innerText = value
    emit('update:modelValue', value)
}

const allowOnlyNumbers = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault()
    }
}
</script>

<template>
    <div class="counter">
        <div
            @click="decrease"
            :aria-disabled="modelValue <= min"
            class="btn"
            role="button"
            tabindex="0"
        >
            <el-icon><Minus /></el-icon>
        </div>
        <span
            class="count"
            contenteditable="true"
            ref="countSpan"
            @input="handleInput"
            @blur="validateInput"
            @keypress="allowOnlyNumbers"
            >{{ modelValue }}</span
        >
        <div @click="increase" class="btn" role="button" tabindex="0">
            <el-icon><Plus /></el-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    display: grid;
    grid-template-columns: auto 35px auto;
    align-items: center;
    border: 1px solid $black;
    border-radius: 5px;
    padding: 10px;
    gap: 2px;
    width: max-content;
}

.count {
    font-weight: bold;
    color: black;
    text-align: center;
    outline: none;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    // border-radius: 50%;
    cursor: pointer;
    user-select: none;
    background: transparent;
    color: black;
}

.btn[aria-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
}
</style>
