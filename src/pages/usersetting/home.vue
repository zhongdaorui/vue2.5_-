<template>
  <div class="warp">
    <hea-der title="账户设置"/>
    <div class="user_info">
      <div class="top_div">管理我的账户</div>
      <div class="botton_div">
        <div class="left">
          <div class="avter">
            <img src="//img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
          </div>
          <div class="username">
            <span>jd_188727wcn</span>
            <span>jd_用户名: jd_577fba3f802e5</span>
          </div>
        </div>
        <div class="right">当前登录</div>
      </div> 
    </div>
    <router-link class="di_manage" to="/addressmanage" tag="div">
      <div class="di_left">
        收货地址管理
      </div>
      <div class="di-right">
        <span>管理我的地址</span>
      </div>
    </router-link>
   
    <div class="user_password">
      <div>
        <span class="one">账号与安全</span>
        <span class="two">密码/实名验证等管理</span>
      </div>
      <div>
        <span class="one">京东支付密码</span>
        <span class="two">去设置</span>
      </div>
      <div>隐私设置</div>
    </div>
    
    <div class="kefu">
      <div>
        <span class="one">联系客服</span>
        <span class="two">即时解答用户疑难</span>
      </div>
      <div>切换站点</div>
    </div>
    <div class="dibu">
      <div class="lianjie">
        <span>意见反馈</span>
        <span>京东客户端</span>
        <span>退出登录</span>
      </div>
      <div class="logo">
        <img src="./img/logo.png" alt="">
      </div>
    </div> 
  </div>
  
</template>


<script>
import HeaDer from '../common/home.vue'
export default {
  components:{
     HeaDer
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/mixins.styl';
.warp
  // padding 0 15px
  // box-sizing border-box
  background-color $bc
  .user_info
    background-color #fff
    border-radius 0 0 9px 9px
    border-top 1px solid $bc
    padding 19px 15px 16px 15px
    box-sizing border-box
    .top_div
      font-size 18px
      margin-bottom 21px
    .botton_div
      display flex
      position relative
      background-color #fff9f9 
      border 1px solid red
      border-radius 10px
      height 103px
      .left 
        .avter
          position absolute
          left 21px
          top 24px
          img
            width 53px
            height 53px
        .username
          position absolute
          top 32px
          left 89px
          font-size 13px
          display flex
          flex-flow column
          & span:first-child
            height 22px
          & span:last-child
            color #ccc
      .right
          position absolute
          font-size 13px
          color red
          width 79px
          height 20px
          background-color pink
          border-radius 0 10px 0 10px
          top 0
          text-align center
          line-height 20px
          right 0        
  .di_manage
    margin-top 16px
    padding 0 15px
    background-color #fff
    height 50px
    line-height 50px
    position relative
    border-radius 10px
    box-sizing border-box
    .di_left
      font-size 19px
    .di-right
      position absolute
      right 27px
      top 0  
      font-size 12px
      color $ziti
      &::after
        width 16px
        height 16px
        content ''
        display inline-block
        background url('./img/下载.png') no-repeat left top/16px 16px
        position absolute
        top 17px
        right -20px
  .user_password
    margin-top 20px
    margin-bottom 20px
    background-color #fff
    padding 0 15px
    box-sizing border-box
    & div:first-child,& div:nth-child(2)
      height 50px
      line-height 50px
      position relative
      border-bottom 1px solid $bc
      .one
        font-size 18px
      .two
        position absolute
        right 27px
        top 0  
        font-size 12px
        color $ziti
        &::after
          width 16px
          height 16px
          content ''
          display inline-block
          background url('./img/下载.png') no-repeat left top/16px 16px
          position absolute
          top 17px
          right -20px 
    & div:nth-child(3)
      height 50px
      line-height 50px
      position relative
      font-size 18px
      &::after
        width 16px
        height 16px
        content ''
        display inline-block
        background url('./img/下载.png') no-repeat left top/16px 16px
        position absolute
        top 17px
        right 15px 
  .kefu
    background-color #fff
    border-radius 8px 8px 8px 8px 
    padding 0 15px
    box-sizing border-box
    & div:first-child
      height 50px
      line-height 50px
      position relative
      border-bottom 1px solid $bc
      .one
        font-size 18px
      .two
        position absolute
        right 27px
        top 0  
        font-size 12px
        color $ziti
        &::after
          width 16px
          height 16px
          content ''
          display inline-block
          background url('./img/下载.png') no-repeat left top/16px 16px
          position absolute
          top 17px
          right -20px           
    & div:last-child 
      height 50px
      line-height 50px
      position relative
      font-size 18px
      &::after
        width 16px
        height 16px
        content ''
        display inline-block
        background url('./img/下载.png') no-repeat left top/16px 16px
        position absolute
        top 17px
        right 15px 
  .dibu
    height 183px
    position relative
    .lianjie
      display flex
      span
        flex 1
        font-size 12px
        text-align center
        position relative
        top 23px
        &::before
          content ''
          display inline-block
          background url('//img13.360buyimg.com/jdphoto/jfs/t9715/362/323851365/1279/81de6d72/59cc5903N7d14ca0e.png') no-repeat left top/22px 22px
          width 22px
          height 29px
          position absolute
          left 20px
          top -5px
    .logo
      position absolute
      left 157px
      top 73px
      img
        width 110px
        height 25px




</style>