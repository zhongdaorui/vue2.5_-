<template>
  <div class="warp">
    <header-top title='我的京东'/>
    <div class="personaldata">
      <div class="top_user">
        <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
        <div class="username">
          <div class="top">
            <span>{{userinfo.username}}</span>
            <div class="sprte"></div>
          </div>
          <div class="bottom">
            <span>京享值</span>
            <span>小白守约400分</span>
          </div>
        </div>
        <img src="https://img12.360buyimg.com/img/s40x40_jfs/t1/125926/3/7446/2181/5f15510bE3f46d483/4f25fadf9ebe91d3.png" alt="" class="button_right">
      </div>
      <div class="middle_data">
        <div class="sp">
          <span>2</span>
          <span>商品收藏</span>
        </div>
        <div class="dp">
          <span>3</span>
          <span>店铺收藏</span>
        </div>
        <div class="wd">
          <span>5</span>
          <span>我的足迹</span>
        </div>
      </div>
      <div class="jd_plus">
        <div class="left">免费试用 立领1张运费券</div>
        <div class="right">0元试用</div>
      </div>
    </div>
    <div class="fff">
      <div class="ding">
        <div class="daifu" v-for="i in 4">
          <img src="https://img12.360buyimg.com/img/s60x60_jfs/t1/125209/17/7530/933/5f16524bE43b4a5f7/71971b102d1fcbc5.png" alt="">
          <span>待付款</span>
        </div>
        
      </div>
      <div class="bai">
        <div class="df" v-for="i in 5">
          <span>0</span>
          <span>优惠券</span>
        </div>
      </div>
      <img class="keling" src="//img12.360buyimg.com/img/s750x98_jfs/t1/204562/17/12842/74452/6184d137Ef01a5599/05436fc27ac1c94b.png.webp" alt="">
      <div class="gongju">
        <div class="title">
          工具与服务
        </div>
        <div class="content_list">
          <div class="conteng" v-for="k in 6">
            <img src="//img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp" alt="">
            <span>客户服务</span>
          </div>
         
        </div>
      </div>
      <div class="tuijian1">
        <span class="left"></span>
        <span>为您推荐</span>
        <span class="right"></span>
      </div>
      <div class="tuijianlist">
        <div class="tui_content" v-for="k in 100">
          <img src="//img10.360buyimg.com/mobilecms/s350x350_jfs/t1/198474/1/4100/136168/611f74d1Eb802b043/0c0e5cecb17f4048.jpg!q70.dpg.webp" alt="">
          <div class="ziyin">
            <div class="ziyinbox">
              <img class="img" src="//img12.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png.webpc=" alt="">
              <span>
                周六福珠宝 多金牛 足
              </span>
            </div>
           
            <p>金黄金转运珠女款生肖牛手绳 定价 AD166116 1-1.2g</p>
          </div>
          <div class="footer_money">
            <span>
              ￥<em>1038</em>
            </span>
            <span>秒杀</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderTop from '../common/home.vue'
import {mapState} from 'vuex'

export default {
  components:{
    HeaderTop
  },
  data(){
    return{
     
    }
  },
  computed:{
    ...mapState(['userinfo'])
  }
}
</script>


<style lang="stylus" scoped>
.warp
  background-color rgb(247 247 247)
  .personaldata
    background-color rgb(254 52 63)
    position relative
    width 100%
    display flex
    flex-flow column nowrap
    
    
    .top_user
      padding 16px 24px 0
      box-sizing border-box
      display flex
      margin-bottom 25px
      position relative
      img
        width 60px
        height 60px
        margin-right 13px
      .username
        position relative
        .top
          display flex
          margin-bottom 2px
          span
            font-size 22px
            color #fff
          .sprte
            position relative
            &:after
              content ''
              position absolute
              top 1px
              width 20px
              height 20px
              background: url(https://img12.360buyimg.com/img/s300x60_jfs/t1/113596/13/13099/22116/5f1a4bddEb7f1a190/8581e1b9765e15ff.png) no-repeat scroll 0 0/cover; 
        .bottom
          position absolute
          left 0
          top 27px
          white-space nowrap
          & span:first-child
            width 45px
            line-height 18px
            padding 2px 4px
            box-sizing border-box
            font-size 12px
            border-radius 10px
            background-color black
            color #fff
            margin-right 1px
          & span:last-child  
            width 117px
            line-height  22px
            font-size 12px
            color #fff
            padding 3px 5px
            background-color black
            box-sizing border-box
            border-radius 10px
      & img:nth-of-type(2)
        position absolute
        top 20px
        right 16px
        width 23px
        height 23px
    .middle_data
      display flex
      .sp
        margin-left 48px
        margin-right 90px
        display flex
        flex-direction column
        font-size 15px
        & span:first-child
          padding-bottom 15px
          font-size 18px
          font-weight 700
          color #fff
          text-align center
      .dp  
        margin-right 90px
        display flex
        flex-direction column
        font-size 15px 
        & span:first-child
          padding-bottom 15px
          font-size 18px
          font-weight 700
          color #fff 
          text-align center 
      .wd
        display flex
        flex-direction column
        font-size 15px  
        & span:first-child
          padding-bottom 15px
          font-size 18px
          font-weight 700
          color #fff 
          text-align center 
    .jd_plus
      background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png) no-repeat 0 0;
      width 395px
      line-height  52px
      display flex
      margin-top 20px
      margin-left 35px
      border-radius 0 20px 0 0
      overflow hidden
      .left
        position relative
        display flex
        font-size 12px
        padding-left 115px
        color yellow
        box-sizing border-box
        margin-right 30px
        &:before
          content ''
          display inline-block
          width 77px
          height 30px
          background: url(https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png) no-repeat ;
          background-size 77px 15px
          position absolute
          top 18px
          left 9px
        &:after
          width 2px
          height 12px
          background-color yellow
          left 96px
          top 20px
          content ''
          display inline-block
          position absolute
      .right
        font-size 12px
        width 79px
        line-height 17px
        height 20px
        color black
        background-color yellow
        border-radius 10px
        padding 3px 3px
        box-sizing border-box
        margin-top 15px
        text-indent 0.5em
  .fff
    width 100%
    height 1000px
    .ding
      display flex
      margin-bottom 24px
      background-color #fff
      padding 24px 44px 30px
      border-radius 15px 15px 9px 9px
      overflow hidden
      box-szing border-box
      .daifu
        display flex
        flex-flow column
        margin-right 65px
        img
          width 36px
          height 36px
        span
          font-size 12px
          padding 4px 0
          white-space nowrap
          margin-left -4px
        
    .bai
      padding 16px 40px 16px
      height 90px
      background-color #fff
      box-sizing border-box
      display flex
      border-radius 20px
      .df
        display flex
        flex-flow column
        margin-right 3px
        margin-right 58px
        & span:first-child
          font-size 25px
          font-weight 700
          color black
          margin-bottom 18px
        & span:last-child 
          font-size 15px
          color black
          white-space nowrap
          text-align center
          margin-left -11px
        & .df:last-child   
          margin-right 0px    
    .keling
      width 100%         
      margin 20px 0 20px 0
    .gongju
      border-radius 18px
      background-color #fff
      .title
        padding 15px 28px 13px
        height 48px
        font-weight 700
        font-size 18px
        box-sizing border-box
        border-bottom 1px solid #ccc
      .content_list
        padding 13px 28px 18px
        // height 186px
        box-sizing border-box
        width 100%
        display flex
        flex-flow row wrap
        .conteng
          display flex
          flex-flow column
          align-items center
          margin-right 52px
          margin-bottom 15px
          img
            width 48px
            height 48px
          span  
            font-size 12px
            padding 8px 0
        & .conteng:nth-child(4n)
          margin-right 0
    .tuijian1
      line-height 45px
      font-size 14px
      color #ccc
      text-align center
      display flex
      position relative
      .left
        width 160px
        height 1px
        background-color #ccc
        position absolute
        top 20px
        left 25px
      .right
        position absolute
        top 20px
        right  25px
        width 160px
        height 1px
        background-color #ccc
      & span:nth-child(2)
        margin-left 208px
    .tuijianlist

      width 100%
      // background-color #ccc
      border-radius 15px
      display flex
      flex-flow row wrap
      .tui_content
        background-color #fff
        display flex
        flex-flow column
        margin-right 15px
        margin-bottom 3px
        width 210px
        height 290px
        padding 20px 25px 4px
        border-radius 10px
        box-sizing border-box
        img
          width 183px
          height 185px
          margin-bottom 15px
        .ziyin
          margin-bottom 4px
          .img
            width 31px
            height 15px
            margin-right 10px
            margin-bottom 3px
          .ziyinbox
            display flex
            span
              font-size 13px 
              white-space nowrap     
          p
            font-size 12px
            flex 1
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
        .footer_money
          & span:first-child
            font-size 13px
            color red
            margin-right 1px
            em
              font-size 18px
              font-weight 700
          & span:last-child
            width 30px
            height 15px
            line-height 15px
            color red
            font-size 12px
            border 1px solid red
            padding 0px 3px
            border-radius 5px
            box-sizing border-box
            margin-top -2px
      & .tui_content:nth-child(2n)
        margin-right 0

  




</style>