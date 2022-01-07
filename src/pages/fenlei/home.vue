<template>
  <div class="warp">
    <nav>
      <span class="iconfont icon-jiantou_zuo"></span>
      <div class="input">
        <span class="iconfont icon-fangdajing"></span>       
        <span class="mei">美孚一号</span>
      </div>
      <span class="iconfont icon-caidan"></span>
    </nav>
    <div class="content">
      <div class="left">
        <ul>
          <li v-for="item in 30">热门推荐</li>
        </ul>
      </div>
      <div class="right">
        <div class="h3">
           <span class="left">热门分类</span>
           <div class="pai">
             <span class="iconfont icon-erweima"></span>
             <span class="hang">排行榜</span>
             <span class="iconfont icon-jinrujiantou1"></span>
           </div>
        </div>
        <ul>
          <li v-for="item in 100">
            <img src="//img12.360buyimg.com/focus/s140x140_jfs/t1/131424/31/274/19042/5ecb3bc2E96ef8448/0188085e6fd6cd12.png" alt="">
            <span>空调</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  
}
</script>


<style  lang="stylus"   scoped>
nav
  padding 7px 5px 7px 16px
  width 100%
  box-sizing border-box
  height 53px
  border-bottom 1px solid #a8a8a8
  display flex
  position fixed
  top 0
  left 0
  right 0
  z-index 100
  background-color #fff
  .icon-jiantou_zuo
    font-size 30px
    color #c8c8c8
    margin-top 6px
    margin-right 10px
  .input
    width 350px
    line-height 39px
    border-radius 20px
    position relative
    background-color #f6f6f6
    margin-right 20px
    .icon-fangdajing
      position absolute
      top 2px
      left 20px
      font-size 18px
      color #c8c8c8
    .mei
      font-size 14px
      color #c8c8c8
      margin-left 46px
      line-height 35px
  .icon-caidan
    font-size 25px
    margin-top 9px
    color #c8c8c8
.content
  display flex
  margin-top 53px
  overflow hidden
  z-index 1
  .left
    width 93px
    background-color #f6f6f6
    ul
      display flex
      flex-flow column
      line-height 54px
      font-size 18px
      text-align center
      li
        height 60px
  .right
    padding 61px 39px 0 36px
    background-color #fff
    box-sizing border-box
    width 100%
    .h3
      .left
        position absolute
        left 104px
        top 77px
        font-size 18px
      .pai
        width 99px
        position absolute
        left 343px
        top 70px
        .icon-erweima
          font-size 14px
          color red
        .hang
          font-size 12px
        .icon-jinrujiantou1
          position absolute
          top 10px
          right 18px
          font-size 20px
          font-weight 700
    ul
      display flex
      flex-flow row wrap
      li
        display flex
        flex-flow column
        align-items center
        margin-right 55px
        img
          width 70px
          height 70px
        span
          font-size 13px
          padding-top 6px  
          padding-bottom 9px
      li:nth-child(3n)
        margin-right 0

</style>