import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',
  nitro: {
    externals: {
      inline: ['nodemailer'],
    },
  },
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
  css: ['element-plus/dist/index.css', '~/assets/scss/main.scss'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    // 'nuxt-security',
    // 'nuxt-nodemailer',
  ],
  // nodemailer: {
  //   from: '"John Doe" <john@doe.com>',
  //   host: 'maildev',
  //   port: 1025,
  //   secure: true,
  //   auth: null,
  //   // auth: {
  //   //   user: 'john@doe.com',
  //   //   pass: '',
  //   // },
  // },

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
  // security: {
  //   nonce: true, // Enables nonce for scripts
  //   headers: {
  //     crossOriginEmbedderPolicy: false,
  //     contentSecurityPolicy: {
  //       'default-src': ["'self'"],
  //       'script-src': [
  //         "'self'",
  //         "'strict-dynamic'",
  //         "'nonce-{{nonce}}'", // Ensure scripts use the nonce
  //         'https://js.stripe.com',
  //         'https://m.stripe.network',
  //         'https://q.stripe.com',
  //         "'unsafe-eval'", // Allow eval() (last resort)
  //       ],
  //       'frame-src': ["'self'", 'https://js.stripe.com'],
  //       'connect-src': [
  //         "'self'",
  //         'https://api.stripe.com',
  //         'https://m.stripe.network',
  //         'https://identitytoolkit.googleapis.com', // ✅ Allows Firebase Authentication
  //         'https://securetoken.googleapis.com', // ✅ Needed for Firebase tokens
  //         'https://firestore.googleapis.com', // ✅ If you're using Firestore
  //         'https://storage.googleapis.com', // ✅ If Firebase Storage is used
  //         'https://www.googleapis.com',
  //       ],
  //       'img-src': [
  //         "'self'",
  //         'data:',
  //         'https://*.stripe.com',
  //         'https://firebasestorage.googleapis.com',
  //       ],
  //       'style-src': [
  //         "'self'",
  //         "'unsafe-inline'",
  //         'https://fonts.googleapis.com',
  //       ],
  //       'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
  //       'object-src': ["'none'"],
  //       'upgrade-insecure-requests': true,
  //     },
  //   },
  //   sri: true,
  // },
})
