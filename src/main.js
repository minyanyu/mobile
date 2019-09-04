import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import './styles/index.less'
import VeeValidate, { Validator } from 'vee-validate'
import zhCn from 'vee-validate/dist/locale/zh_CN'
Vue.config.productionTip = false
Vue.use(VeeValidate, {
  events: '' // 文本框中触发的事件，默认是input
})
Validator.localize('zhCn', zhCn)
Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
