<template>
  <div class="warp">
    <div class="nav">
      <router-link to="/" class="back">
        <span class="iconfont icon-jiantou_zuo"></span>
      </router-link>
      <span class="title">京东登录注册</span>
    </div>
    <div class="model">
      <div class="top">
        <span class="eight">+86</span>
        <span class="iconfont icon-jinrujiantou"></span>
        <input type="text" name="username" value="请输入手机号码">
      </div>
      <div class="bottom">
        <input type="text" name="password" value="请输入收到的验证码"> 
        <span class="huo">获取验证码</span>
      </div>
    </div>
    <div class="d_button">登录</div>
    <div class="footer">
      <div class="left">账号密码登录</div>
      <div class="right">手机快速注册</div>
    </div>
   
  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="stylus" scoped>
.warp
  background-color #fff
  padding 11px 29px 0
  width 100%
  box-sizing border-box
  .nav
    display flex
    .back
      .icon-jiantou_zuo  
        font-size 35px
        font-weight 700
      margin-right 115px

    .title
      font-size 22px
      margin-top 5px
      font-weight 300
  .model
    margin-top 62px
    margin-bottom 36px
    .top,.bottom
      border-bottom 1px solid #c8c8c8 
      display flex
      padding-bottom 20px
      .eight
        font-size 22px
        color black
        font-weight 500
        margin-right 6px
        margin-top 7px
      .icon-jinrujiantou
        font-size 30px
        font-weight 700
        margin-top 3px
        color black
      input
        flex 1
        font-size 20px
        color #c8c8c8
    .bottom
      margin-top 34px
      display flex
      input
        flex 1
        font-size 20px
      .huo
        margin-top 5px
        width 137px
        height 20px
        padding-left 25px
        border-left 1px solid #a8a8a8
        font-size 20px
        line-height 20px
        text-align center  
        box-sizing border-box
        color #a8a8a8
  .d_button
    line-height 61px
    width 100%
    text-align center
    color #fff
    font-size 18px
    background-color #fcb7b3
    border-radius 9px
  .footer
    font-size 17px
    color #c8c8c8
    display flex
    margin-top 28px
    position relative
    .left
      position absolute
      left 0
      top 0
    .right
      right 0
      top 0  
      position absolute

</style>