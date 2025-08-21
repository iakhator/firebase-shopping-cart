import { defineNuxtConfig } from 'nuxt/config'
// import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'

export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',
  nitro: {
    externals: {
      inline: ['nodemailer', 'handlebars', '@faker-js/faker'],
    },
    routeRules: {
      '/.well-known/**': { prerender: false, swr: false },
      // Homepage - prerender for better SEO and performance
      '/': { prerender: true },
      // Auth pages - SPA mode (no SSR needed)
      '/auth/**': { ssr: false },
      // Cart pages - SPA mode (user-specific content)
      '/cart/**': { ssr: false },
      // Profile pages - SPA mode (user-specific content)
      '/profile/**': { ssr: false },
      // Orders pages - SPA mode (user-specific content)
      '/orders/**': { ssr: false },
    },
    esbuild: {
      options: {
        format: 'esm',
      },
    },
  },

  vite: {
    logLevel: 'info',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;',
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus'],
            'vue-vendor': ['vue', 'vue-router'],
            icons: ['@element-plus/icons-vue'],
          },
        },
      },
    },
  },
  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: 'RingCart',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Sofia+Sans:wght@300;400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
    },
  },
  /*
   ** Global CSS
   */
  css: ['element-plus/dist/index.css', '@/assets/scss/main.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@pinia/nuxt', '@element-plus/nuxt', 'nuxt-lucide-icons'],
  lucide: {
    namePrefix: 'Icon',
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['element-plus', 'nodemailer'],
    // styleResources: {
    //   scss: [],
    //   hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
    // },
  },

  runtimeConfig: {
    public: {
      BASE_URL: '',
      FIREBASE_DATABASE_URL: '',
      FIREBASE_API_KEY: '',
      FIREBASE_AUTH_DOMAIN: '',
      FIREBASE_PROJECT_ID: '',
      FIREBASE_STORAGE_BUCKET: '',
      FIREBASE_MESSAGING_SENDER_ID: '',
      FIREBASE_APP_ID: '',
      STRIPE_CLIENT_KEY: '',
    },
  },
})
