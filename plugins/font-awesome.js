import Vue from 'vue'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingBag,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faShoppingBag, faUser)
Vue.component('font-awesome-icon', FontAwesomeIcon)
