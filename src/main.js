import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import dateFilter from '@/filters/date.filter'
import telephoneFilter from '@/filters/telephone.filter'


Vue.config.productionTip = false


Vue.filter('date', dateFilter)
Vue.filter('telephone', telephoneFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
