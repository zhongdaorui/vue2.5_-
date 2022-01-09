<template>
  <div class="warp">
    <div class="header_top">
        <header-top title="购物车"/>
        <div class="di">
          <div class="left">
             <span class="iconfont icon-31dingwei"></span>
             <span>武汉市江夏区</span>
          </div>
          <div class="right">
            <span>编辑商品</span>
          </div>
         
        </div>
    </div>
    <div class="list_content">
      <div class="list_content_container">
        <div class="chckbox">
          <span class="iconfont icon-duigou"></span>
          <div class="shopname">
            <span>露安适母婴旗舰店</span>
          </div>
        </div>
        <div class="shopdata">
           <span class="iconfont icon-duigou"></span>
           <img src="//img10.360buyimg.com/mobilecms/s234x234_jfs/t1/101805/40/20783/198822/61d9b62eEd68a7f88/c246c15cbda5cd86.jpg!q70.dpg.webp" alt="">
           <div class="datalist">
             <span>露安适柔护纸尿裤 新生儿尿不湿小包装宝宝纸尿片透气干爽 夜用S码26片
            </span>     
             <div class="size">
               <span>夜用s码26片,</span>
               <span>选服务</span>
             </div>
             <span>￥<em>99.</em>00
             </span>
             <div class="shul">
               <span class="iconfont icon-jianhao"></span>
               <span>1</span>
               <span class="iconfont icon-jiahao"></span>
             </div>
           </div>
        </div>
        <div class="tixin">
          <span>移入关注</span>
          <span>删除</span>
        </div>
      </div>
    </div>
  
              
            

  </div>

</template>

<script>
import HeaderTop from '../common/home.vue'
export default {
  components:{
    HeaderTop
  }
}
</script>

<style lang="stylus" scoped>
.warp
  background-color #ccc
  height 1500px
  .header_top
    .di
      background-color #fff
      display flex
      padding 11px 22px 21px
      width 100%
      box-sizing border-box
      border-top 1px solid #ccc
      height 58px
      position relative
      border-radius 0 0 15px 15px
      .left
        & span:first-child
          font-size 18px
          margin-right 0px
        & span:last-child    
          font-size 16px
      .right
        position absolute
        top 21px
        right 0
        width 81px
        &:after
          position absolute
          content ''
          display inline-block
          width 1px
          height 15px
          background-color #ccc
          top 0
          left -25px
        span
          font-size 16px
          position absolute
          top 0
          left -10px 
  .list_content
    margin-top 15px
    background-color #fff
    padding 26px 19px 27px
    border-radius 10px
    width 100%
    height 216px
    box-sizing border-box
    position relative
    .list_content_container
      
      .chckbox
        display flex
        .icon-duigou
          border-radius 23px
          width 23px
          height 23px
          line-height 23px
          text-align center
          font-weight 700

          background-color red
          color #fff
          font-size 16px
          margin-right 16px
        .shopname
          position relative
          width 150px
          height 26px
          font-size 13px
          font-weight 700
          &:before
            content ''
            display inline-block
            position absolute
            top 3px
            left 0px
            width 18px
            height 20px
            background-size 18px 20px
            background: url('//wq.360buyimg.com/wxsq_trade/cart/main/images/icon_pop_jd@2x_a43c7bb6.png') 0 0/16px 18px no-repeat
          span
            position absolute
            top 5px
            left 24px 
          &:after
            content '>'   
            font-size 18px
            position absolute
            right -15px
            top 5px
            color #ccc
      .shopdata
        margin-top 21px
        display flex
        position relative
        .icon-duigou
          border-radius 23px
          width 23px
          height 23px
          line-height 23px
          text-align center
          background-color red
          color #fff
          font-size 16px
          font-weight 500
          margin-right 16px 
          margin-top 30px  
          font-weight 700    
        img
          width 120px
          height 96px
          margin-right 16px
        .datalist
          display flex
          flex 1
          min-width 0
          flex-flow column
         
          & span:nth-of-type(1)
            font-size 12px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .size
            margin 11px 0px
            background-color #ccc
            font-size 12px
            width 161px
            line-height 22px
            border-radius 10px
            padding 2px 4px
            box-sizing border-box
            position relative
            & span:last-child
              &:after
                content ''
                display inline-block
                background: url(//wq.360buyimg.com/wxsq_trade/cart/main/images/icon_arrow_12@2x_730a6daa.png) no-repeat 50%;
                width 12px
                height 9px
                background-size 12px 9px 
                position absolute
                right 4px
                top 10px
          & span:nth-of-type(2)
            font-size 12px
            color red
            em
              font-size 24px
          .shul
            position absolute 
            display flex  
            width 86px
            height 24px
            font-size 16x
            bottom 5px
            right -0px 
            & span:nth-child(2)
              width 40px
              height 20px
              background-color #ccc
              line-height 20px
              font-size 14px
              margin 0 6px
              text-align center
            & span:nth-child(1)
              margin-top 2px
      .tixin
        position absolute
        right 23px
        bottom 28px
        font-size 12px
        & span:first-child
          margin-right 22px
          &:after
            position absolute
            top 0
            left 69px
            content ''
            display inline-block
            height 15px
            width 1px
            background-color #ccc
</style>
