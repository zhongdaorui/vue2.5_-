import Vue from 'vue'
import Router from 'vue-router'
import  home from '../pages/Home/home.vue'
import search from '../pages/search/search.vue'
import denglu from '../pages/denglu/denglu.vue'
import yearday from '../pages/yearday/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/denglu',
      component:denglu
    },
    {
      path:'/yearday',
      component:yearday
    }
  ]
})
