<template>
    <div class="box-container" role="radiogroup" aria-label="Color Variants">
        <div
            v-for="(color, variant) in variants"
            :key="variant"
            class="box"
            :class="{ active: activeVariant === variant }"
            :style="{ backgroundColor: color }"
            role="radio"
            :aria-checked="activeVariant === variant"
            :tabindex="activeVariant === variant ? '0' : '-1'"
            @click="setActive(variant)"
            @keydown="handleKeydown($event, variant)"
        ></div>
    </div>
</template>

<script setup>
const props = defineProps({
    variants: {
        type: Object,
        required: true,
    },
    activeVariant: {
        type: String,
        default: null,
    },
})

const emit = defineEmits(['update:activeVariant'])

const setActive = (variant) => {
    if (props.activeVariant !== variant) {
        emit('update:activeVariant', variant)
    }
}

const handleKeydown = (event, variant) => {
    if (event.key === 'Enter' || event.key === ' ') {
        setActive(variant)
    }
}
</script>

<style lang="scss" scoped>
.box-container {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 10px 0;
}

.box {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.3s ease;
    user-select: none;
    outline: none;
    border-radius: 4px;
}

.box:hover {
    opacity: 0.8;
}

// .box:focus {
//   outline: 2px solid $black;
//   outline-offset: 2px;
// }

.active {
    // border: 2px solid $black;
    outline: 2px solid $black;
    outline-offset: 2px;
    // border-radius: 12px;
}
</style>
