<template>
  <svg
    :width="width"
    :height="height"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
  >
    <g :fill="iconFill" :stroke="iconStroke">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconFill: {
      type: String,
      default: 'fillColor',
    },
    iconStroke: {
      type: String,
      default: 'strokeColor',
    },
    viewBox: {
      type: String,
      default: '0 0 129 129',
    },
  },
}
</script>
