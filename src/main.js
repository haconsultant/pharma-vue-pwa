// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD4kNuVILhaW93g2DoaL8Q-Vj2kKIe5lw0',
    libraries: 'places' // necessary for places input
  }
})

Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/* {
  primary: "#FAFAFA",
  secondary: "#0091EA",
  accent: "#03A9F4",
  error: "#f44336",
  warning: "#FFD54F",
  info: "#00E676",
  success: "#00C853"
} */
