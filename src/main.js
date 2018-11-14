import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/element'

import './config/axios'
import constant from './config/constant'
import utils from './config/utils';
Vue.use(utils)
Vue.use(constant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
