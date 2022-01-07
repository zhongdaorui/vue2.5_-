import Vue from 'vue'
import Router from 'vue-router'
import  home from '../pages/Home/home.vue'
import search from '../pages/search/search.vue'
import denglu from '../pages/denglu/denglu.vue'
import yearday from '../pages/yearday/home.vue'
import chaoshi from '../pages/chaoshi/home.vue'
import miaosha from '../pages/miaosha/home.vue'
import detail from '../pages/detail/home.vue'
import fenlei from '../pages/fenlei/home.vue'
import xiajiang from '../pages/jiangjia/home.vue'
 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/search',
      component:search,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/denglu',
      component:denglu,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/yearday',
      component:yearday,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/chaoshi',
      component:chaoshi,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/miaosha',
      component:miaosha,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/detail',
      component:detail,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/fenlei',
      component:fenlei,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/xiajiang',
      component:xiajiang,
      meta:{
        showFooter:false
      }
    }
  

  ]
})
