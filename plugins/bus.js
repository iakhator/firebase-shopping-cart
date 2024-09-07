// plugins/mitt.js
import { defineNuxtPlugin } from '#app'
import mitt from 'mitt'

export default defineNuxtPlugin((nuxtApp) => {
  const emitter = mitt()
  nuxtApp.vueApp.config.globalProperties.$bus = emitter

  nuxtApp.provide('bus', emitter)
})
