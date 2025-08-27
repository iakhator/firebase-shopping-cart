import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: [],
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
      '@': resolve(__dirname, '.'),
    },
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['vue', '@vue/test-utils'],
  },
  // Fix crypto.hash issue by providing proper Node.js crypto polyfill
  esbuild: {
    target: 'node14',
  },
  // Configure Vite to handle Node.js built-ins properly
  build: {
    rollupOptions: {
      external: ['crypto'],
    },
  },
  // Ensure proper crypto handling in test environment
  config: (env) => {
    if (env.command === 'serve') {
      return {
        define: {
          global: 'globalThis',
        },
      }
    }
  },
})
