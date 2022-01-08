<template>
  <div>
    <nav-top/>
    <div class="pbc"></div>
    <div class="lunbocon">
        <div class="logo-warp">
          <img src="//img10.360buyimg.com/wq/jfs/t1/102062/10/16107/4994/5e786d97E8bd7cdab/6f298520ce0743b2.png" alt="">
          <div class="text">猜你<br/>喜欢</div>
        </div>
        <div class="scroll-view">
          <ul>
            <li v-for="item in 100">
              <img src="//img13.360buyimg.com/mobilecms/s140x140_jfs/t1/196670/23/17589/134158/61126898E1c685632/42d1352c3b419ab4.jpg!cc_140x140!q70.dpg.webp" alt="">
              <span>￥359</span>
            </li>
          </ul>
        </div>
    </div>
    <div class="warp">
      <div class="last_qiang">
        <ul>
          <li v-for="item in 10">
            <span>10:00</span>
            <span>即将开抢</span>
          </li>
        </ul>
      </div>
      <div class="list_item">
        <ul>
          <li v-for="item in 30">
            <img src="//img13.360buyimg.com/mobilecms/s220x220_jfs/t1/219226/23/10249/86185/61d4f5ceE635e6efd/ef586d001430cfe1.jpg!cc_220x220!q70.dpg.webp" alt="">
            <div class="zhou">
              <h3>周大生  金镶玉貔貅转运珠手链女本命年足金和田玉石榴石礼物 和田玉貔貅转运珠手链</h3>
              <p>聚财纳瑞,金镶玉貔貅</p>
              <div class="footer">
                <span>
                  ￥
                  <em>599</em>
                </span>
                <div>
                  <p>去抢购</p>
                  <span class="out">
                    <span class="inner"></span>
                  </span>
                  <span>22%</span>
                </div>
              </div>
            </div>
           
          </li>
        </ul>
      </div>
    </div>
  </div>
 
</template>

<script>
import NavTop from "../common/home.vue"
export default {
  components:{
    NavTop
  }
  
}
</script>

<style lang="stylus" scoped>
.pbc
  position position relative
  top 54px
  left 0
  right 0
  height 146px
  background-color #ff4831
  z-index 1
.lunbocon

  padding 9px 0 18px
  display flex
  height 153px
  width 443px
  background-color #fff
  position absolute
  top 67px
  left 13px
  z-index 2
  box-sizing border-box
  border-radius 20px

  .logo-warp
    width 74px
    height 112px
    position relative
    img
      width 63px
      height 140px
      position absolute
      top 0px
      left 0px
      z-index 2
    .text
      position absolute
      top 48px
      left 14px
      font-size 18px
      font-weight 700 
      z-index 1 
  .scroll-view
    position absolute
    top 18px
    left 79px
    width 363px
    ul
      display flex
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 15px;
     
      
      li
        display flex
        flex-flow column
       
        box-sizing border-box
        img
          width 90px
          height 96px
         
        span
          color red
          font-size 17px
          font-weight 500  
          padding 5px 15px

.warp
  padding 22px 10px 0
  position relative
  background-color #f2f2f2
  box-sizing border-box
  .last_qiang
    width 100%
    margin-top 9px
    ul
      display flex
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 15px;
      li
        display flex
        margin-right 30px
        width 67px
        flex-flow column
        margin-bottom 10px
        & span:nth-child(1)
          font-size 20px
          font-weight 700
        & span:nth-child(2)  
          font-size 15px
          font-weight 500
          width 67px
          line-height 25px
          margin-left -5px
  .list_item
    margin-top 20px
    background-color #fff
    border-radius 9px
    width 100%
    box-sizing border-box
    padding 11px 16px 26px 45px
    position relative
    ul
      display flex
      flex-flow column
      li
        display flex
        margin-bottom 30px
        
        img
          width 92px
          height 92px
          margin-right 35px
        .zhou
          display flex
          flex-flow column
          h3
            font-size 18px
            margin-bottom 15px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            width 236px

          p
            font-size 16px
            color red
          .footer
            position relative
            width 100%
            & span:nth-of-type(1)
              position absolute
              left 0
              top 35px
              font-size 12px
              color red
              em
                font-size 20px
            div
              position absolute
              right 0
              top 10px
              width 98px
              height 46px
              padding 8px 3px
              background-color red
              box-sizing border-box
              border-radius 9px
              
              p
                font-size 17px
                color #fff 
                margin-bottom 2px
                margin-left 23px
              .out  
               
                width 46px
                height 5px
                background-color #ff9790
                border-radius 4px
                margin-left 4px
                .inner
                  position absolute
                  height 100%
                  left 0
                  top 0
                  background-color #fff
                  width 14px
              & span:nth-of-type(2)         
                font-size 14px
                color #fff
                position absolute
                right 2px
                top 28px
        

   
</style>