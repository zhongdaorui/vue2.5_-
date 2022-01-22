<template>
  <div class="collect_message">
    <div class="common name">
      <span>收货人</span>
      <input type="text" placeholder="姓名">
    </div>
    <div class="phone_number common">
      <span>联系方式</span>
      <span>+86</span>
      <span class="iconfont icon-jinrujiantou"></span>
      <input type="text" placeholder="手机号码">
    </div>
    <div class="where common">
      <span>所在地区</span>
      <span v-for="(item,index) in list" :key="index" class="city">{{item}}</span>
      <span class="iconfont icon-jiantouzuo" @click="showarealist"></span>
    </div>
    <div class="detailwhere common">
      <span>详细地址</span>
      <input type="text" placeholder="详细地址需填写楼栋楼层或房间号信息">
    </div>
    <div class="biaoqian">
      <em>地址标签</em>
      <span>公司</span>
      <span>家</span>
      <span>学校</span>
      <div>自定义
        <i></i>
      </div>
    </div>
    <div class="defaultdizhi">
      <span>设置默认地址</span>
      <div>
        <van-switch v-model="checked" active-color="red" inactive-color="#ccc" />
      </div>
      <div class="footer_button">
        <span>确认</span>
      </div>
    </div>
    <van-overlay :show="show" class="contain" @click="showarealist">
      <div class="wrapper" @click.stop>
         <van-area title="标题" :area-list="areaList" @confirm="queding" />
      </div>
    </van-overlay>
   
  </div>
</template>


<script>
import { Switch,Area,Overlay } from 'vant'
import { areaList } from '@vant/area-data';
export default {
  data(){
    return{
      checked: true,
      areaList,
      list:[],
      show: false

    }
  },
  methods:{
     queding(value){
      const result = []
       value.map(item=>{
        let curKey = Object.keys(item) 
         result.push(item[curKey[1]])
    })
      
      this.list = result
      this.show = !this.show
    
    },
      showarealist(){
      // this.showarea =!this.showarea
      this.show = !this.show
    },
  },
  components:{
    [Switch.name]:Switch,
    [Area.name]:Area,
    [Overlay.name]:Overlay
  }

}
</script>


<style lang="stylus" scoped>
@import '~common/mixins.styl';
.collect_message
  background-color $bc
  height 778px
  .common
    background-color #fff
    border-bottom 1px solid $bc
    height 50px
    line-height 50px
    padding 0 10px
    box-sizing border-box
    & span:first-child
      font-size 17px
      color $ziti
  .name
    >input
      font-size 13px      
      margin-left 29px
  .phone_number
    & span:nth-child(2)    
      font-size 16px
      margin-left 6px
    & span:nth-child(3)
      font-size 22px
      font-weight 700
      color $ziti 
      position relative
      left -5px
      top 4px   
    >input
      color black
      font-size 13px
      position relative
      top 2px
  .where
    position relative
    & span:first-child
      margin-right 16px
    .city
      font-size 16px
      margin-right 6px 
      font-size $ziti      
    .icon-jiantouzuo
      position absolute
      top 2px
      right 15px
      font-size 24px
      color $ziti
  .detailwhere
    height 82px
    position relative
    >input
      position relative
      top 2px 
      width 310px
      font-size 17px
    &::after
      content ''   
      display inline-block
      position absolute
      background url('./img/shanchu.png') no-repeat left top/22px 22px
      width 22px
      height 22px
      right 8px
      top 12px
  .biaoqian
    background-color #fff
    height 98px
    padding 14px 10px
    box-sizing border-box
    border-bottom 1px solid $bc
    >em
      font-size 17px
      color $ziti
      margin-right 11px
      position relative
      top -5px
    >span
      font-size 15px
      margin-right 11px
      color $ziti
      padding 8px 15px
      background-color #fff
      border 1px solid $ziti
      border-radius 20px
    >div
      margin-top 13px
      font-size 14px
      color $ziti
      padding 8px 15px
      background-color #fff
      border 1px solid $ziti
      border-radius 20px
      width 113px
      box-sizing border-box
      position relative
      margin-left 73px
      font-size 15px
      >i
        position absolute
        top 6px
        left 66px
        margin-left 4px
        width 20px
        height 20px
        background url('./img/shanchu.png') no-repeat left top/20px 20px
        transform rotate(45deg)
  .defaultdizhi
    background-color #fff
    padding 9px 15px
    box-sizing border-box
    position relative
    & span:first-child
      font-size 18px
      color $ziti
    & div:first-of-type
      position absolute
      top 4px
      right 15px   
    .footer_button
      margin-top 16px
      background-color #fff
      
      span
        background-color red
        height 48px
        line-height 48px
        font-size  19px
        color #fff
        border-radius 25px
        display block
        text-align center
  .contain
    overflow hidden      
    .wrapper
      position fixed
      top 159px
      left 0
      right 0
      bottom 0
      background-color #fff
      z-index 2
      border-radius 9px 9px 0 0






</style>