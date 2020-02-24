const redis = require('redis')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [
      {
        hid: 'stripe',
        src: 'https://js.stripe.com/v3/',
        defer: true
      }
    ],
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/font-awesome',
    '@/plugins/custom-filter',
    '@/plugins/bus',
    '@/plugins/stripe',
    { src: '@/plugins/noty', mode: 'client' }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv',
    '~/modules/api'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/signin', method: 'post', propertyName: 'token' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: false }
        }
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  serverMiddleware: [
    session({
      store:
        process.env.REDIS_URL
          ? new RedisStore({
            url: process.env.REDIS_URL,
            client: redisClient
          })
          : new RedisStore({
            client: redisClient,
            host: 'localhost',
            port: 6380,
            prefix: 'sess'
          }),
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 604800000 }
    })
  ]
}
