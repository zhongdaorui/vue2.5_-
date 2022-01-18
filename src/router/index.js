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
import personal from '../pages/personal/home.vue'
import shopcart from '../pages/shopcart/home.vue'


Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



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
    },
    {
      path:'/personal',
      component:personal,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopcart',
      component:shopcart,
      meta:{
        showFooter:true
      }
    }

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
