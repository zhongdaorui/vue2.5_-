<template>
 <div class="warp">
    <div class="header">
      <router-link to="/" class="ta">
        <span class="iconfont icon-jiantou_zuo"></span>
      </router-link>
      <div class="input">
        <span class="iconfont icon-fangdajing"></span>
        <span>澳柯玛冰柜</span>
      </div>
      <div class="button">
        搜索
      </div>
    </div>
    <div class="fenge"></div>
    <div class="nav">
      <span>热门搜索</span>
      <span>显示</span>
    </div>
    <span class="ti">已隐藏搜索发现</span>
 </div>
 
</template>

<script>
export default {
  
}
</script>


<style lang="stylus" scoped>
.warp
  padding 10px 17px 0
  background-color #fff
  .header
    display flex
    position relative
    height 57px
    .ta
      .icon-jiantou_zuo
        font-size 30px
        font-weight 700
    .input  
      height 33px
      line-height 33px
      background-color #f6f6f6
      border-radius 9px
      min-width 333px
      padding 0 7px
      position relative
      span:nth-child(1)
        position absolute
        left 20px
        top 3px
        font-size 22px
      span:nth-child(2)  
        position absolute
        left 57px
        top 0
        font-size 15px
    .button
      position absolute
      right 0
      top 0
      font-size 19px
      width 53px
      height 34px
      background-color red
      line-height 34px
      text-align center
      color #fff
      border-radius 8px
  .fenge
    height 1px 
    width 100%
    background-color #f6f6f6
    margin-bottom 20px
  .nav
    position relative
    span:nth-child(1)
      font-size 19px
      position absolute
      top 0
      left  0  
    span:nth-child(2)
      font-size 15px
      position absolute
      top 0
      right 0  
  .ti
    position absolute
    left 187px
    top 156px
    font-size 12px
    color #a8a8a8
</style>