<template>
  <div class="warp">
    <div class="nav">
      <router-link to="/" class="back">
        <span class="iconfont icon-jiantou_zuo"></span>
      </router-link>
      <span class="title">京东登录注册</span>
    </div>
    <div class="model" v-if="loginway">
      <div class="top">
        <span class="eight">+86</span>
        <span class="iconfont icon-jinrujiantou"></span>
        <input type="text" name="username" placeholder="请输入手机号码" v-model="phone">
      </div>
      <button class="bottom">
        <input type="text" name="password" placeholder="请输入收到的验证码" v-model="captch"> 
        <button class="huo" :disabled="!rightPhone" :class="{right_phone:rightPhone}" @click.prevent="getcode">{{computetime>0?`已发送(${computetime}s)`:'获取验证码'}}</button>
      </button>
    </div>
    <div class="mima" v-else>
      <div class="top">
        <input type="text" name="username" placeholder="用户名/邮箱/手机号" v-model="username">
      </div>
      <div class="bottom">
        <input type="text" name="password" v-if="showpwd" placeholder="请输入密码" v-model="mima">
        <input type="password" v-else   placeholder="请输入密码" v-model="mima">  
        <span v-if="showpwd" @click="changeshow(false)" class="wenben"></span>
        <span v-else @click="changeshow(true)"  class="mima"></span>
        <span class="wang">忘记密码</span>
      </div>
    </div>
    <div class="d_button" @click="login" style="backgroundcolor:'red'">登录</div>
    <div class="footer">
      <div class="left"  @click="changelogin">{{loginway?'账号密码快速登录':'短信登陆'}}</div>
      <div class="right">手机快速注册</div>
    </div>
 
  </div>
  
</template>


<script>
import { Toast,MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      loginway:false,
      phone:'',
      captch:'',
      username:'',
      mima:'',
      showpwd:false,
      computetime:0
    }
  },
  computed: {
      rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
  methods:{
    changelogin(ismima){
      this.loginway = !this.loginway
     
    },
    changeshow(isshow){
      this.showpwd = isshow
    },
    getcode(){
      if (!this.computetime) {
       this.computetime = 30
       this.intervalid= setInterval(()=>{
          this.computetime--
          setTimeout(()=>{
            this.captch = 1111
          },5000)
          if (this.computetime<=0) {
             clearInterval(this.intervalid) 
          }
        },1000)
            // 发送ajax请求(向指定手机号发送验证码短信)
          // const result = await reqSendCode(this.phone)
          // if(result.code===1) {
          //   // 显示提示
          //   this.showAlert(result.msg)
          //   // 停止计时
          //   if(this.computeTime) {
          //     this.computeTime = 0
          //     clearInterval(this.intervalId)
          //     this.intervalId = undefined
          //   }
          // }
      }
    },
    login(){
      if(this.loginway){//短信登陆
        const {phone,captch,rightPhone} =this
        if (!this.rightPhone) {
          //手机号码不正确
          MessageBox.alert('手机号码不正确').then(action => {
                });
                return
        }else if (!/^\d{4}$/.test( captch)) {
             MessageBox.alert('验证必须是4位数字').then(action => {
                });
                return
        }
         // 发送ajax请求短信登陆
          // result = await reqSmsLogin(phone, code)
       
       
      }else{  //密码登录
        const {username,mima} = this
        if (!username) {
             MessageBox.alert('用户名不能为空').then(action => {
                });
                return 
        }else if (!mima) {
             MessageBox.alert('密码不能为空').then(action => {
                });
                return
        }
        //  // 发送ajax请求密码登陆
        //   result = await reqPwdLogin({name, pwd, captcha})
      }
      // 停止计时
        if(this.computetime) {
          this.computetime = 0
          clearInterval(this.intervalid)
          this.intervalid = undefined
        }
        this.$store.dispatch('getUserinfo',({username:this.username,mima:this.mima}))
              Toast({
          message: '登录成功',
          position: 'middle',
          duration: 2000
        });
        this.$router.replace('/')
        
      
      
    },
    
  
  },
  components:{
  
  }






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
      padding-bottom 14px
      .eight
        font-size 18px
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
        font-size 19px
        color #c8c8c8
        
    .bottom
      margin-top 34px
      display flex
      background-color #fff
      input
        flex 1
        font-size 20px
      .huo
        margin-top 5px
        width 137px
        height 20px
        padding-left 25px
        border-left 1px solid #a8a8a8
        font-size 16px
        line-height 20px
        text-align center  
        box-sizing border-box
        background-color #fff
        color #a8a8a8
      .right_phone
        color black     
    
  .mima
    margin-top 62px
    margin-bottom 36px
    .top,.bottom
      border-bottom 1px solid #c8c8c8 
      display flex
      
    .top
      font-size 19px  
    .bottom
      margin-top 80px
      font-size 19px
      position relative
      >input
        bottom  15px
        left 0
        position absolute
      .wang
        position absolute
        bottom  15px
        right 15px  
        font-size 17px
       
        &:before
          position absolute
          left -30px
          top -5px
          content ''
          display inline-block
          width 2px
          height 25px
          background-color #ccc
      .mima
        width 32px
        height 34px
        position absolute
        bottom -30px
        left 197px
        background-size contain
        display inline-block
        background url('./img/密码.png') no-repeat left top/100% auto
      .wenben
        background url('./img/文本.png') no-repeat left top/100% auto
        width 32px
        height 34px
        position absolute
        left 197px
        bottom 7px
  .d_button
    line-height 61px
    width 100%
    text-align center
    color #fff
    font-size 18px
    background-color #fcb7b3
    border-radius 39px
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