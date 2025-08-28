import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        overrides: {
          // Disable SSR for testing
          ssr: false,
        },
      },
    },
  },
})
