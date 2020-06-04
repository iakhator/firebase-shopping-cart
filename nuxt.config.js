const session = require('express-session')
const RedisStore = require('connect-redis')(session)
let redis

if (process.env.NODE_ENV === 'production') {
  redis = require('redis').createClient(process.env.REDIS_URL)
} else {
  redis = require('redis').createClient({
    host: 'localhost',
    port: 6379,
    prefix: 'sess'
  })
}

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
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env._AXIOS_BASE_URL_
  },

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
        new RedisStore({
          client: redis
        }),
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 604800000 }
    }),
    '~/api'
  ]
}
