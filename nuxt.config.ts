import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from 'url'
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',
  vite: {
    logLevel: 'info',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/assets/scss/variables.scss";`, // Auto-import variables
        },
      },
    },
  },
  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: process.env.npm_package_name || '',
      // script: [
      //   {
      //     hid: 'stripe',
      //     src: 'https://js.stripe.com/v3/',
      //     defer: true,
      //   },
      // ],
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  /*
   ** Global CSS
   */
  css: ['element-plus/dist/index.css', '~/assets/scss/main.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@pinia/nuxt', '@element-plus/nuxt', 'nuxt-security'],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['element-plus'],
    // styleResources: {
    //   scss: [],
    //   hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
    // },
  },

  runtimeConfig: {
    public: {
      FIREBASE_DATABASE_URL: process.env.DATABASE_URL,
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      STRIPE_CLIENT_KEY: process.env.STRIPE_CLIENT_KEY,
    },
  },
})
