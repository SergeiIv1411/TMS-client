import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import car from './modules/car'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category, car
  }
})
