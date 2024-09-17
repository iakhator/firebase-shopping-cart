import { defineNuxtConfig } from 'nuxt/config'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-01-01',
  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: process.env.npm_package_name || '',
      script: [
        {
          hid: 'stripe',
          src: 'https://js.stripe.com/v3/',
          defer: true,
        },
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
  css: ['element-plus/dist/index.css', '~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/element-ui.client',
    '~/plugins/custom-filter.client',
    '~/plugins/bus.client',
    '~/plugins/stripe.client',
    { src: '~/plugins/noty.client', mode: 'client' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@sidebase/nuxt-auth', '@pinia/nuxt', '@element-plus/nuxt'],

  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { url: '/login', method: 'post' },
        signOut: { url: '/logout', method: 'post' },
        user: { url: '/user', method: 'get', propertyName: false },
        getSession: { url: '/session', method: 'get' },
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['element-plus'],
  },
  alias: {
    '@': path.resolve(__dirname, './'),
    '~': path.resolve(__dirname, './'),
  },
  serverMiddleware: [],
})
