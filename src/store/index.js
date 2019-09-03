import Vue from 'vue'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import * as storageTools from '../utils/localStorge'
Vue.use(Vant)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 这个user要存储token令牌
    user: storageTools.getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      storageTools.setItem('user', user)
    }
  },
  actions: {

  }
})
