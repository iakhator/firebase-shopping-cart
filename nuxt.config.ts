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
      script: [{ src: 'https://js.stripe.com/v3', async: true, defer: true }],
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
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      STRIPE_CLIENT_KEY: process.env.STRIPE_CLIENT_KEY,
    },
  },
  security: {
    nonce: true, // Enables nonce for scripts
    headers: {
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'", // Ensure scripts use the nonce
          'https://js.stripe.com',
          'https://m.stripe.network',
          'https://q.stripe.com',
          "'unsafe-eval'", // Allow eval() (last resort)
        ],
        'frame-src': ["'self'", 'https://js.stripe.com'],
        'connect-src': [
          "'self'",
          'https://api.stripe.com',
          'https://m.stripe.network',
          'https://identitytoolkit.googleapis.com', // ✅ Allows Firebase Authentication
          'https://securetoken.googleapis.com', // ✅ Needed for Firebase tokens
          'https://firestore.googleapis.com', // ✅ If you're using Firestore
          'https://storage.googleapis.com', // ✅ If Firebase Storage is used
          'https://www.googleapis.com',
        ],
        'img-src': [
          "'self'",
          'data:',
          'https://*.stripe.com',
          'https://firebasestorage.googleapis.com',
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
        ],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
        'object-src': ["'none'"],
        'upgrade-insecure-requests': true,
      },
    },
    sri: true,
  },
})
