import Vue from 'vue'
import Router from 'vue-router'
import  home from '../pages/Home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
})
