import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import routes from './router/index'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
