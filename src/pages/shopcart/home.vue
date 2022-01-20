<template>
  <div class="warp">
    <div class="header_top">
        <header-top title="购物车"/>
        <div class="di" v-if="!showAllDelete">
          <div class="left">
             <span class="iconfont icon-31dingwei"></span>
             <span>武汉市江夏区</span>
          </div>
          <div class="right">
            <span @click="toggledelete">编辑商品</span>
          </div>
        </div>
        <div class="delete" v-else>
          <span @click="toggledelete">完成</span>
        </div>
    </div>
    <div class="list_content"  v-for="k in 3">
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
    <img  src="https://img12.360buyimg.com/img/s694x148_jfs/t1/171999/12/22113/58222/61bad82eE0dcf6d31/d92d1e829bf953da.png" alt="">
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
                周六福珠宝多金牛足
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
    <div class="jisuan" v-if="!showAllDelete">
      <div class="j_left">
        <span class="iconfont icon-duigou"></span>
        <span>全选</span>
      </div>
      <div class="j_middle" @click="togglezhezhao">
        <span>
          总计：
          <em>￥4470.30</em>
        </span>
        <span>已优惠745.7元</span>
      </div>
      <div class="j_right">
        <span>领卷结算
          <em>(7件)</em>
        </span>
      </div>
    </div>
    <div class="shouchang" v-else>
      <div class="left">
        <span class="iconfont icon-duigou"></span>
        <span>全选</span>
      </div>
      <div class="right">
        <span >移至收藏</span>
        <span>删除</span>
      </div>
    </div>
    <div class="zhezhao" v-show="showzhezhao" ></div>         
    <div class="monnyshow" v-show="true">
      <div class="h3">
        <h3>金额明细</h3>
        <span class="tuichu"></span>
      </div>
      <div class="allmonny">
        <span>商品总额</span>
        <span>￥874.00</span>
      </div>
      <div class="allmonny">
      <span>促销</span>
      <span>-￥87.00</span>
      </div>
      <div class="youhui">
        <div class="left">
          <p>共优惠</p>
          <span>以上优惠不包含红包和京豆，请在结算页内查看</span>
        </div>
        <div class="right">-￥80.00</div>
      </div>
    </div>        

  </div>

</template>

<script>
import HeaderTop from '../common/home.vue'
export default {
  components:{
    HeaderTop
  },
  data(){
    return{
        showAllDelete:false,//显示是否展示删除
        showzhezhao:false//展示是否显示遮罩和金额明细面板
    }
  
  },
  methods:{
    toggledelete(){
      this.showAllDelete=!this.showAllDelete
    },
    togglezhezhao(){
      this.showzhezhao= !this.showzhezhao
      console.log('..')
    }
  }
}
</script>

<style lang="stylus" scoped>
.warp
  background-color rgb(242 242 242)
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
        position absolute
        top 12px
        left 24px
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
    .delete
      background-color #fff
      display flex
      padding 11px 22px 21px
      width 100%
      box-sizing border-box
      border-top 1px solid #ccc
      height 58px
      position relative
      border-radius 0 0 15px 15px
      >span
        position absolute
        right 16px
        top 17px 
        font-size 15px

  .list_content
    margin-top 15px
    background-color #fff
    padding 21px 19px 27px
    border-radius 10px
    width 100%
    height 266px
    box-sizing border-box
    position relative
    margin-bottom 10px
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
          height 118px
          margin-right 16px
          border-radius 9px
          overflow hidden
          margin-top -3px
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
        top 225px
        font-size 12px
        & span:first-child
          margin-right 22px
          &:after
            position absolute
            bottom  0
            left 69px
            content ''
            display inline-block
            height 15px
            width 1px
            background-color #ccc
  img
    width 100%
    margin 18px 0 18px 
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
        height 300px
        padding 20px 15px 4px
        border-radius 10px
        box-sizing border-box
        img
          width 183px
          height 185px
          margin-bottom 15px
        .ziyin
          margin-bottom 4px    
          .ziyinbox
            display flex
            height 22px
            span
              font-size 13px 
              white-space nowrap
            .img
              width 31px
              height 15px
              margin-right 0px
              margin-bottom 3px   
              margin-top -1px    
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
  .jisuan
    width 100%
    background-color #fff
    position fixed                 
    left 0
    right 0
    bottom 0px
    display flex
    box-shadow 0 3px 3px #ebeaec
    border-top 1px solid #ebeaec
  
    height 56px
    .j_left
      flex 18.76%
      margin-left 15px
      margin-top 10px
      .icon-duigou
        border-radius 13.5px
        width 27px
        height 27px
        line-height 27px
        text-align center
        font-weight 700
        background-color red
        color #fff
        font-size 16px
        margin-right 1px
      & span:last-child
        font-size 15px  
    .j_middle
      flex 45.77%
      display flex      
      flex-flow column
      margin-left 56px
      margin-top  12px
      position relative
      & span:first-child
        font-size 17px
        line-height 19px
        em
          font-weight 700
          margin-left -10px
      & span:last-child    
        margin-left 35px
        font-size 14px
      &:after
        content ''  
        display inline-block
        background  url('./下载.svg') no-repeat 
        position-size 16px 12px
        width 16px
        height 12px
        position absolute
        top 15px
        right 20px
        transform rotate(90deg)
    .j_right
      flex 36.15%
      height 43px
      position relative
      right 5px
      bottom 5px
     
      background-color red
      border-radius 40px
      overflow hidden
      white-space nowrap
      margin-top 12px
      span
        position absolute
        top 13px
        left 11px
        font-size 18px
        // padding 0px 22px
        color #fff
        font-weight 700
        em
          font-weight 500
          font-size 18px
          font-weight 500
  .shouchang
    width 100%
    background-color #fff
    position fixed                 
    left 0
    right 0
    bottom 0px
    display flex
    box-shadow 0 3px 3px #ebeaec
    border-top 1px solid #ebeaec
   
    height 56px
    .left
      flex 18.76%
      margin-left 15px
      margin-top 10px
      .icon-duigou
        border-radius 13.5px
        width 27px
        height 27px
        line-height 27px
        text-align center
        font-weight 700
        background-color red
        color #fff
        font-size 16px
        margin-right 1px
      & span:last-child
        font-size 15px 
    .right
      position absolute     
      top 8px
      right 15px
      & span:first-child
        line-height 27px
        // width 100px
        height 27px
        text-align center
        font-size 14px
        border-radius 30px
        padding 8px 16px
        border 1px solid #ccc
      & span:last-child
        line-height 27px
        // width 100px
        height 27px
        text-align center
        font-size 14px
        border-radius 30px
        padding 8px 16px
        border 1px solid #ccc
  .zhezhao
    position fixed
    top 55px
    right 0px
    left 0px
    bottom 56px
    background-color rgba(0,0,0,.4)
  .monnyshow
    position fixed
    bottom 56px
    left 0
    right 0
    height 409px
    background-color #fff
    font-size 12px
</style>
