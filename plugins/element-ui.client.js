// import ElementPlus, { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import en from 'element-plus/es/locale/lang/en'

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, { current: 0 })
  // nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
  //   prefix: Math.floor(Math.random() * 1000),
  //   current: 0,
  // })
  nuxtApp.vueApp.use(ElementPlus, { locale: en, zindex: 3000 })
})
