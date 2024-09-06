import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import en from 'element-plus/es/locale/lang/en'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide('ZINDEX_INJECTION_KEY', { current: 0 })
  nuxtApp.vueApp.provide('ID_INJECTION_KEY', {
    prefix: 0,
    current: 1,
  })
  nuxtApp.vueApp.use(ElementPlus, { locale: en })
})
