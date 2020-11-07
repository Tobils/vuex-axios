import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import routes from './router/index'
import AOS from 'aos'
import "aos/dist/aos.css"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
const router = new VueRouter({routes})

Vue.config.productionTip = false




new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
