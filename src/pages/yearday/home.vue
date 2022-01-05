<template>
  <div>
    <div class="nav">
      <router-link to="/" class="back">
        <span class="iconfont icon-jiantou_zuo"></span>
      </router-link>
      <span class="fu">服饰到家 新春报喜</span>
      <span class="iconfont icon-caidan"></span>
    </div>
    <div class="header_guang">
      <img src="//m.360buyimg.com/babel/jfs/t1/94144/7/20644/356115/61d30b57Ec1d5cdaa/d8841f557f224f49.jpg!q70.dpg.webp" alt="">
    </div>
    <div class="bacr">
      <div class="swpier">
        <ul>
          <li v-for="item in 16"><img src="//m.360buyimg.com/babel/s204x183_jfs/t1/216241/1/9575/6454/61cd9b8aEd316543b/cc0310b06a6cdd30.png" alt=""></li>
        </ul>
      </div>
      <div class="listcard">
        <div class="card_top">
          <img v-for="item in 10" src="https://m.360buyimg.com/babel/jfs/t1/100541/40/19804/84331/61d2e78bE79d78b72/f07cd155de324271.png.webp" alt="">
        </div>
        <div class="card_top">
          <img v-for="item in 10" src="//m.360buyimg.com/babel/jfs/t1/142994/24/24776/14736/61cd99b2Ef8b17a9e/83348fb32b843320.png.webp" alt="">
        </div>
      </div>
      <img class="chao" src="//m.360buyimg.com/babel/jfs/t1/201402/35/20125/292406/61d2d141Eb0f4812d/c094d660c42e41b7.png" alt="">
     
      <div class="tab_list" v-for="item in 100">
        <div class="tab_contain">
          <div class="bottom">
            
            <div class="lists" v-for="item in 6">
                <img src="//m.360buyimg.com/babel/s162x162_jfs/t1/149376/2/20420/89742/615c039eE9c02e403/4d37e911d2be97c4.jpg!cc_261x276!q70.dpg.webp" alt="">
                <p>芝华仕沙发 布艺单人沙发电动功能 芝华士头等舱客厅懒人躺摇椅 宅舒适8790 爱马橙 15天内发货</p>
                <div class="tai">
                   <span>￥1299</span> 
                  <span class="iconfont icon-jinrujiantou1"></span>
                </div>
               
            </div>  
          </div> 
            
      </div>
         
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  
}
</script>



<style lang="stylus" scoped>
.nav
  position relative
  background-color #fff
  display flex
  height 55px
 
  .back
    position absolute
    left 16px
    top 10px
    .icon-jiantou_zuo
      font-size 35px
      color black
      font-weight 700
  .fu
    position absolute
    font-size 20px
    top 18px
    left 160px
  .icon-caidan
    position absolute
    right 6px
    top 17px
    font-size 25px
.header_guang
  img
    width 100%   
.bacr
 
  padding-top 10px
  padding-left 6px
  padding-right 6px
  width 100%
  box-sizing border-box
  background-color #9a1d00
  .swpier
    ul
      display flex
      overflow hidden
      overflow-x: scroll;
      overflow-y: hidden;
      /*解决ios上滑动不流畅*/
      -webkit-overflow-scrolling: touch;
      padding-bottom: 5px;
      li
        margin-right 0
     
    
        img
          width 120px
          height 124px
          border-radius 50px
         
          overflow hidden
  .listcard
    .card_top
      display flex
      overflow hidden
      overflow-x: scroll;
      overflow-y: hidden;
      /*解决ios上滑动不流畅*/
      -webkit-overflow-scrolling: touch;
      padding-bottom: 5px;
      img
        width 172px
        height 100px
        border-radius 9px
        margin 0 4px 4px 0
  .chao
    width 417px
    height 76px
    margin-top 0px
    margin-left 15px
  .five
    margin-left 110px
    margin-top 10px
    width 258px
    height 51px 
  .tab_list
    margin-bottom 10px
    .tab_contain
      display flex
      flex-flow column
   
      .bottom 
        margin-top 8px
        display flex
        height 399px
        flex-wrap wrap
        margin-bottom 10px
        .lists
          width 146px
          height 200px
          background-color #d9a3e4
          margin-right 6px
          margin-bottom 6px
          border-radius 8px
          img
            width 146px
            height 132px
          p
            line-height 35px
            width 145px
            padding 0 5px
            box-sizing border-box
            font-size 13px
            white-space nowrap
            overflow hidden  
           	text-overflow: ellipsis;
          .tai
            width 125px
            line-height 26px
            font-size 19px
            color #fff
            border-radius 9px
            background-color #a96aff
            span:nth-child(1)
              margin-right 9px
            span:nth-child(2)  
              width 25px
              height 25px
              border-radius 25px
              background-color #fff
              font-weight 700
              font-size 20px
              color #d9a3e4
              display inline-block
              text-align center

</style>