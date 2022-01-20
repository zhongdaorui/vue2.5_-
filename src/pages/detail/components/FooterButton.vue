<template>
  <div class="warp">
    <div class="shop">
      <span>店铺</span>
    </div>
    <div class="kefu">
      <span>客服</span>
    </div>
    <div class="shopping">
      <span>5</span>
      <span>购物车</span>
    </div>
    <div class="addcar" @click.prevent="jion">加入购物车</div>
    <div class="nowshop" style="font-size:12px">立即购买</div>
  </div>
</template>


<script>
export default {
  methods:{
    jion(){
      this.$emit('join-cart')
    }
  }
}
</script>


<style lang="stylus" scoped>
.warp
  display flex
  overflow-y hidden
  position fixed
  left 0
  height 53px
  right 0
  bottom 0
  background-color #fff
  border-top 1px solid #ccc
  box-sizing border-box
  padding 5px 3px 3px 16px
  .shop
    width 33px
    height 43px
    margin-right 30px
    font-size 13px
    position relative
    &:before
      content ''
      display block
      background url('./img/店铺.png') no-repeat center top/25px 24px 
      width 25px
      height 24px
      color red
      position absolute
      top 0
      left 5px
    & span:first-child
      font-size 13px
      position absolute
      left 3px
      top 27px
  .kefu
    width 33px
    height 43px
    margin-right 30px
    font-size 13px
    position relative
    &:before
      content ''
      display block
      background url('./img/客服.png') no-repeat center top/25px 24px 
      width 25px
      height 24px
      color red
      position absolute
      top 0
      left 5px
    & span:first-child
      font-size 13px
      position absolute
      left 3px
      top 27px
  .shopping
    width 33px
    height 43px
    margin-right 23px
    font-size 13px
    position relative
    &:before
      content ''
      display block
      background url('./img/购物车.png') no-repeat center top/25px 24px 
      width 25px
      height 24px
      color red
      position absolute
      top 0
      left 5px
      z-index 2
    & span:first-child
      font-size 13px
      position absolute
      left 25px
      top 0px 
      z-index 9999
      color red
      border 1px solid red
      width 12px
      height 12px
      border-radius 12px
      font-size 12px
      font-weight 700
      text-align center
      line-height 12px
    & span:last-child      
      font-size 13px
      position absolute
      left 0px
      top 27px  
      white-space nowrap
  .addcar
    background-color #f2270c
    padding 15px 20px 20px 20px
    font-size 14px
    // width 115px
    // height 38px
    // line-height 38px
    color #fff
    margin-right 6px
    border-radius  57px
    // box-sizing border-box
  .nowshop
    background-color #ffc30d
    padding 15px 28px 20px 28px
    font-size 14px
    color #fff
    border-radius  60px  
</style>