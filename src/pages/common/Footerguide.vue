<template>
<div class="out">
   <div class="warp">
    <div class="guide_item" @click="goto('/')"  :class="{active:$route.path=='/'}">
      <span class="iconfont icon-jingdong"></span>
      <span class="wei">首页</span>
    </div>
    <div @click="goto('/fenlei')" class="guide_item" :class="{active:$route.path=='/fenlei'}">
      <span class="iconfont icon-fenlei" ></span>
      <span class="wei">分类</span>
    </div>
    <div @click="goto('/xiajiang')" class="guide_item"  :class="{active:$route.path=='/xiajiang'}">
      <span class="iconfont icon-jiangjia" ></span>
      <span class="wei">京喜</span>
    </div>
    <div @click="goto('/shopcart')" class="guide_item"  :class="{active:$route.path=='/shopcart'}">
      <span class="iconfont icon-gouwucheman"></span>
      <span class="wei">购物车</span>
    </div>
     <router-link :to="userinfo.username? '/personal':'/denglu'"  class="guide_item"  :class="{active:$route.path=='/personal'}">
      <span class="iconfont icon-gerenyonghutouxiang2"></span>
      <span class="wei">我的</span>
     </router-link>
  </div>
</div>
  

 
</template>

<script>
import {mapState} from 'vuex'
export default {
 methods:{
   goto(path){
     this.$router.replace(path)
   }
 },
 computed:{
    ...mapState(['userinfo'])
  } 
}
</script>


<style lang="stylus"   scoped>

  .warp
    padding 11px 25px 8px 26px 
    display flex
    height 59px
    box-sizing border-box
    position fixed
    bottom 0
    left 0
    right  0 
   
    background-color #fff
    .guide_item  
      margin-right 40px
      display flex
      flex-flow column
      align-items center
      margin-right 60px
      color #ccc
      &.active
        color red
      .iconfont
        font-size 20px
      .wei
        font-size 11px !important
        white-space nowrap
        padding 3px 0
    & div:nth-child(5)
      margin-right 0       

</style>