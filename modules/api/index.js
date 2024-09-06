export default function (moduleOptions, nuxt) {
  // Add middleware only with `nuxt dev` or `nuxt start`
  if (nuxt.options.dev || nuxtoptions._start) {
    nuxt.hook('nitro:config', (nitroConfig) => {
      nitroConfig.handlers = nitroConfig.handlers || []
      nitroConfig.handlers.push({
        route: '/api',
        handler: '~/server/api/index.js',
      })
    })
  }
}
