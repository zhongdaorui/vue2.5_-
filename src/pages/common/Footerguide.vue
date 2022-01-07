<template>
  <div class="warp">
    <div>
      <span class="iconfont icon-jingdong"></span>
      <span>首页</span>
    </div>
    <div @click="goto('/fenlei')">
      <span class="iconfont icon-fenlei"></span>
      <span>分类</span>
    </div>
    <div>
      <span class="iconfont icon-jiangjia"></span>
      <span>京喜</span>
    </div>
    <div>
      <span class="iconfont icon-gouwucheman"></span>
      <span>购物车</span>
    </div>
     <div>
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
  div
    margin-right 40px
    display flex
    flex-flow column
    & span:nth-of-type(1)
      font-size 22px
      color #a8a8a8
      text-indent 0.5em      
    & span:nth-of-type(2)
      font-size 12px
      padding 4px 
      width 50px
      // text-align center
  & div:nth-child(5)
    margin-right 0
  .wei
    margin-left -3px  
</style>