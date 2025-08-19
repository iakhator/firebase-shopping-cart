<template>
  <div class="loading-container" :class="{ fullscreen: fullscreen }">
    <div v-if="type === 'spinner'" class="spinner-wrapper">
      <div class="spinner">
        <div class="spinner-circle"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <div v-else-if="type === 'dots'" class="dots-wrapper">
      <div class="dots">
        <div class="dot dot-1"></div>
        <div class="dot dot-2"></div>
        <div class="dot dot-3"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <div v-else-if="type === 'pulse'" class="pulse-wrapper">
      <div class="pulse">
        <div class="pulse-ring pulse-ring-1"></div>
        <div class="pulse-ring pulse-ring-2"></div>
        <div class="pulse-ring pulse-ring-3"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>

    <!-- Default: Progress bar like NuxtLoadingIndicator -->
    <div v-else class="progress-wrapper">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
<<<<<<< HEAD
    type: {
        type: String,
        default: 'spinner', // 'spinner', 'dots', 'pulse', 'progress'
        validator: (value) =>
            ['spinner', 'dots', 'pulse', 'progress'].includes(value),
    },
    size: {
        type: String,
        default: 'medium', // 'small', 'medium', 'large'
        validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    color: {
        type: String,
        default: '#409eff', // Element Plus primary color
    },
    message: {
        type: String,
        default: '',
    },
    fullscreen: {
        type: Boolean,
        default: false,
    },
=======
  type: {
    type: String,
    default: 'spinner', // 'spinner', 'dots', 'pulse', 'progress'
    validator: (value) => ['spinner', 'dots', 'pulse', 'progress'].includes(value)
  },
  size: {
    type: String,
    default: 'medium', // 'small', 'medium', 'large'
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  color: {
    type: String,
    default: '#409eff' // Element Plus primary color
  },
  message: {
    type: String,
    default: ''
  },
  fullscreen: {
    type: Boolean,
    default: false
  }
>>>>>>> 60a92ec (update loading indicator)
})

// Progress animation for progress bar type
const progress = ref(0)

onMounted(() => {
<<<<<<< HEAD
    if (props.type === 'progress') {
        // Animate progress bar
        const interval = setInterval(() => {
            if (progress.value < 90) {
                progress.value += Math.random() * 10
            }
        }, 200)

        // Clean up on unmount
        onUnmounted(() => {
            clearInterval(interval)
        })
    }
=======
  if (props.type === 'progress') {
    // Animate progress bar
    const interval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.random() * 10
      }
    }, 200)

    // Clean up on unmount
    onUnmounted(() => {
      clearInterval(interval)
    })
  }
>>>>>>> 60a92ec (update loading indicator)
})

// Use Nuxt's loading indicator programmatically
const { $loadingIndicator } = useNuxtApp()

// Watch for loading state changes
<<<<<<< HEAD
watch(
    () => props.type,
    (newType) => {
        if (newType === 'progress' && $loadingIndicator) {
            $loadingIndicator.start()
        }
    },
    { immediate: true },
)

onUnmounted(() => {
    if ($loadingIndicator) {
        $loadingIndicator.finish()
    }
=======
watch(() => props.type, (newType) => {
  if (newType === 'progress' && $loadingIndicator) {
    $loadingIndicator.start()
  }
}, { immediate: true })

onUnmounted(() => {
  if ($loadingIndicator) {
    $loadingIndicator.finish()
  }
>>>>>>> 60a92ec (update loading indicator)
})
</script>

<style scoped>
.loading-container {
<<<<<<< HEAD
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.loading-container.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    z-index: 9999;
}

.loading-message {
    margin-top: 16px;
    font-size: 14px;
    color: #666;
    text-align: center;
=======
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.loading-container.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  z-index: 9999;
}

.loading-message {
  margin-top: 16px;
  font-size: 14px;
  color: #666;
  text-align: center;
>>>>>>> 60a92ec (update loading indicator)
}

/* Spinner Animation */
.spinner-wrapper {
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    align-items: center;
}

.spinner {
    width: var(--spinner-size, 40px);
    height: var(--spinner-size, 40px);
}

.spinner-circle {
    width: 100%;
    height: 100%;
    border: 3px solid #f0f0f0;
    border-top: 3px solid v-bind(color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
=======
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  width: var(--spinner-size, 40px);
  height: var(--spinner-size, 40px);
}

.spinner-circle {
  width: 100%;
  height: 100%;
  border: 3px solid #f0f0f0;
  border-top: 3px solid v-bind(color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
>>>>>>> 60a92ec (update loading indicator)
}

/* Size variants for spinner */
.loading-container:has(.spinner) {
<<<<<<< HEAD
    --spinner-size: 24px;
}

.loading-container:has(.spinner) {
    --spinner-size: 40px;
}

.loading-container:has(.spinner) {
    --spinner-size: 56px;
=======
  --spinner-size: 24px;
}

.loading-container:has(.spinner) {
  --spinner-size: 40px;
}

.loading-container:has(.spinner) {
  --spinner-size: 56px;
>>>>>>> 60a92ec (update loading indicator)
}

/* Dots Animation */
.dots-wrapper {
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: v-bind(color);
    animation: bounce-dots 1.4s infinite both;
}

.dot-1 {
    animation-delay: -0.32s;
}

.dot-2 {
    animation-delay: -0.16s;
}

.dot-3 {
    animation-delay: 0s;
=======
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: v-bind(color);
  animation: bounce-dots 1.4s infinite both;
}

.dot-1 {
  animation-delay: -0.32s;
}

.dot-2 {
  animation-delay: -0.16s;
}

.dot-3 {
  animation-delay: 0s;
>>>>>>> 60a92ec (update loading indicator)
}

/* Pulse Animation */
.pulse-wrapper {
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pulse {
    position: relative;
    width: 60px;
    height: 60px;
}

.pulse-ring {
    position: absolute;
    border: 2px solid v-bind(color);
    border-radius: 50%;
    animation: pulse-ring 2s linear infinite;
}

.pulse-ring-1 {
    animation-delay: 0s;
}

.pulse-ring-2 {
    animation-delay: 0.5s;
}

.pulse-ring-3 {
    animation-delay: 1s;
=======
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pulse {
  position: relative;
  width: 60px;
  height: 60px;
}

.pulse-ring {
  position: absolute;
  border: 2px solid v-bind(color);
  border-radius: 50%;
  animation: pulse-ring 2s linear infinite;
}

.pulse-ring-1 {
  animation-delay: 0s;
}

.pulse-ring-2 {
  animation-delay: 0.5s;
}

.pulse-ring-3 {
  animation-delay: 1s;
>>>>>>> 60a92ec (update loading indicator)
}

/* Progress Bar */
.progress-wrapper {
<<<<<<< HEAD
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: #f0f0f0;
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(
        90deg,
        v-bind(color),
        lighten(v-bind(color), 20%)
    );
    border-radius: 2px;
    transition: width 0.3s ease;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
    );
    animation: shimmer 2s infinite;
=======
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, v-bind(color), lighten(v-bind(color), 20%));
  border-radius: 2px;
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
>>>>>>> 60a92ec (update loading indicator)
}

/* Animations */
@keyframes spin {
<<<<<<< HEAD
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes bounce-dots {
    0%,
    80%,
    100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes pulse-ring {
    0% {
        transform: scale(0.1);
        opacity: 1;
    }
    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Size variants */
.loading-container[data-size='small'] {
    padding: 10px;
}

.loading-container[data-size='small'] .spinner {
    --spinner-size: 24px;
}

.loading-container[data-size='small'] .dots .dot {
    width: 8px;
    height: 8px;
}

.loading-container[data-size='small'] .pulse {
    width: 40px;
    height: 40px;
}

.loading-container[data-size='large'] {
    padding: 40px;
}

.loading-container[data-size='large'] .spinner {
    --spinner-size: 56px;
}

.loading-container[data-size='large'] .dots .dot {
    width: 16px;
    height: 16px;
}

.loading-container[data-size='large'] .pulse {
    width: 80px;
    height: 80px;
=======
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce-dots {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Size variants */
.loading-container[data-size="small"] {
  padding: 10px;
}

.loading-container[data-size="small"] .spinner {
  --spinner-size: 24px;
}

.loading-container[data-size="small"] .dots .dot {
  width: 8px;
  height: 8px;
}

.loading-container[data-size="small"] .pulse {
  width: 40px;
  height: 40px;
}

.loading-container[data-size="large"] {
  padding: 40px;
}

.loading-container[data-size="large"] .spinner {
  --spinner-size: 56px;
}

.loading-container[data-size="large"] .dots .dot {
  width: 16px;
  height: 16px;
}

.loading-container[data-size="large"] .pulse {
  width: 80px;
  height: 80px;
>>>>>>> 60a92ec (update loading indicator)
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
<<<<<<< HEAD
    .loading-container.fullscreen {
        background: rgba(0, 0, 0, 0.9);
    }

    .loading-message {
        color: #ccc;
    }

    .spinner-circle {
        border-color: #333;
        border-top-color: v-bind(color);
    }

    .progress-bar {
        background: #333;
    }
=======
  .loading-container.fullscreen {
    background: rgba(0, 0, 0, 0.9);
  }

  .loading-message {
    color: #ccc;
  }

  .spinner-circle {
    border-color: #333;
    border-top-color: v-bind(color);
  }

  .progress-bar {
    background: #333;
  }
>>>>>>> 60a92ec (update loading indicator)
}
</style>
