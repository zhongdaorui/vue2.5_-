<template>
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
     <div @click="goto('/personal')" class="guide_item"  :class="{active:$route.path=='/personal'}">
      <span class="iconfont icon-gerenyonghutouxiang2"></span>
      <span class="wei">未登录</span>
    </div>

  </div>
</template>

<script>
export default {
 methods:{
   goto(path){
     this.$router.replace(path)
   }
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
  z-index 100
  left 0
  right 0
  bottom 0 
  background-color #fff
  .guide_item
    margin-right 40px
    display flex
    flex-flow column
    align-items center
    margin-right 65px
    &.active
      color red
    .iconfont
      font-size 20px
    .wei
      font-size 12px
      white-space nowrap
      padding 3px 0
  & div:nth-child(5)
    margin-right 0       

</style>