import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '../views/Tabbar'
import home from '../views/home/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
    },
    {
      path: '/',
      component: Tabbar,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})
