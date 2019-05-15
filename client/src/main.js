import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'

require ('@/assets/styles/style.css')

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
