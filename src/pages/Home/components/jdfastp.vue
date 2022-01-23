<template>
  <div class="warp">
    <div class="shacontain">
      <div class="top_title">
        <span class="sha"  >京东秒杀</span>
        <span class="ten">10</span>
        <div class="time">
          <span class="time_b">
            00
          </span>
          :
          <span class="time_b">
            00
          </span>
          :
          <span class="time_b">
            00
          </span>
        </div>
        <span class="right" @click="$router.push('/miaosha')">
          更多秒杀
          <span class="iconfont icon-jiantouzuo"></span>
        </span>
      </div>
      <div class="show_sha">
        <ul >
          <li v-for="(item,index) in shagoods" :key="index">
            <img :src="item.imgurl" alt="">
            <span>￥{{item.price}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="newman">
      <div class="title">
        <span>新人专享</span>
        <span>一元包邮到家</span>
      </div>
      <div class="listpic">
        <img src="//m15.360buyimg.com/mobilecms/jfs/t1/143206/15/18091/55640/5fd3b000Ed0847bb4/a2d1c0ea3e919537.png!q70.jpg" alt="">
        <img src="//m15.360buyimg.com/mobilecms/jfs/t1/121314/20/18322/49641/5faf4c8aE65d89e83/5640b45981c64d9e.png!q70.jpg" alt="">
        <img src="//m15.360buyimg.com/mobilecms/jfs/t1/135352/12/16044/61892/5faf4cdaEa902f0d3/db42d50ac8401b8a.png!q70.jpg" alt="">
        <img src="//m15.360buyimg.com/mobilecms/jfs/t1/150919/32/6681/54649/5faf4cf6E57bff09a/39e34ac36fc5c49a.png!q70.jpg" alt="">
      </div>
    </div>
    <div class="guangao">
      <img src="//m15.360buyimg.com/mobilecms/jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png" alt="">
    </div>
    <div class="myzuji">
      <div class="nav">
        <img src="//img10.360buyimg.com/wq/jfs/t25297/258/894723061/3257/2a464187/5b7f9b5fNf746c0bd.png" alt="">
        <div>
          <span>更多</span>
        </div>
      </div>
      <div class="list_pic" >
        <ul>
          <li v-for="(item,index) in goods" :key="index">
            <img :src="item.imgurl" alt="">
            <span>满减</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods_list" @click="$router.push('/detail')">
      <ul>
        <li v-for="(item,index) in goods" :key="index">
          <img :src="item.imgurl" alt="">
          <div class="wenzi">
            <div class="nian">
              <img src="https://img12.360buyimg.com/img/s68x28_jfs/t1/144489/34/20741/4184/61da8063E6eba6710/aa13f213665d3c41.png" alt="">
              <span>{{item.goodsname}}</span>
            </div>
            <span class="zui">30天最低价</span>
            <div class="price">
              <span>
                ￥<em>2699</em>.00
              </span>
              <span>秒杀</span>
            </div>
            <div class="wuliu">
              <span>京东物流</span>
              <span>看相似</span>
            </div>
          </div>
         
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  methods:{
},
 mounted(){
   this.$store.dispatch('getgoods')
  
},
computed:{
  ...mapState(['goods','shagoods'])
}
}
</script>

<style lang="stylus" scoped>
@import '~common/mixins.styl';
.warp
  background-color $bc
  margin-top -30px

  .shacontain
    margin 0 10px 15px
    background-color #fff
    border-radius 8px 
    position relative
    height 158px
    padding-top 7px
    box-sizing border-box
    .top_title
      display flex  
      .sha
        font-size 16px
        margin-top 3px
        margin-left 2px
        margin-right 11px
      .ten
        font-size 15px
        color red
        position relative
        margin-top 2px
        margin-right 35px
        &:after
          display inline-block
          content ''
          width 23px
          height 23px
          position absolute
          vertical-align middle
          top -1px
          left 15px
          background url('../img/miaosha.png') no-repeat left top/23px 23px

      .time
        display flex
        font-size 14px
        margin-right 11px
        .time_b
          width 18px
          height 21px
          background-color red
          text-align center
          line-height 21px
          border-radius 5px
          color #fff
      .right
        right 10px   
        top 12px
        position absolute
        font-size 12px
        color red
        .icon-jiantouzuo
          // vertical-align middle
          width 14px
          height 14px
          border-radius 7px
          background-color red
          color #fff
          font-size 10px 
    .show_sha
      margin-top 20px
      ul
        display flex
        overflow-x scroll
        overflow-y: hidden;
        padding-bottom: 14px;
        li
          display flex
          flex-flow column
          align-items center
          margin-right 13px
          img
            width 59px
            height 75px
          >span
            font-size 14px
            color red  
            font-weight 600
            padding 8px 0
  .newman
    background-color rgb(255 241 241)
    margin 12px 10px 13px
    border-radius 8px
    padding 10px 10px 5px
    box-sizing border-box
    .title
      margin-bottom 8px
      & span:first-child
        margin-left 11px
        font-size 18px
        color #ff6562
        margin-right 6px
        font-weight 700
      & span:last-child  
        font-size 14px
        color #ffbab1
        font-weight 600
    .listpic
      display flex
      img
        width 98px
        height 139px
        border-radius 5px
        margin-right 5px
      & img:first-child
        width 95px
        overflow hidden
  .guangao
    margin 0 10px 21px
    img
      width 100%
  .myzuji
    margin 0 10px 20px
    background-color #fff
    .nav
      display flex
      position relative
      background-color $bc
      img
        width 230px
        height 40px
        margin-left 95px
        margin-bottom 8px
      div
        span
          position absolute
          font-size 12px
          right 30px
          top 15px
          &::after
            content ''    
            display inline-block
            background url('../img/you.png') no-repeat left top/15px 15px
            position absolute
            right  -24px
            top 0
            width 15px
            height 15px
    .list_pic 
      ul
        display flex
        overflow hidden
        li
          padding 5px 4px 0px
          box-sizing border-box
          flex 25%
          border-right 1px solid $bc
          position relative
          height 150px
          img
            width 96px
            height 98px
          span
            position absolute
            left 4px
            bottom 0
            font-size 12px
            display inline-block
            background-color $bc
            padding 3px 10px
            border-radius 9px 
            color $ziti
  .goods_list
    margin 0 10px
    ul
      display flex
      flex-flow row wrap
      li
        display flex
        flex-flow column
        margin-right 12px
        margin-bottom 12px
        background-color #fff
        border-radius 5px
        position relative
        width 202px

        img
          width 100%
          height 197px
          margin-bottom 5px
        .wenzi
          padding 5px 5px
          box-sizing border-box
          .nian
            display flex
            overflow hidden
            >img
              width 36px
              height 15px
              margin-right 6px
            >span
              font-size 15px
              white-space nowrap
              overflow hidden
              text-overflow: ellipsis
              width 175px
          .zui
            font-size 12px
            color red
            padding 2px 2px
            background-color pink
            position relative
            border 1px solid red
            margin-top 7px
            margin-bottom 32px
            padding-left 17px
            border-radius 30px
            &::before
              position absolute
              content ''
              display inline-block
              background url('../img/shandian.png')  no-repeat center/16px 16px
              width 16px
              height 16px
              left 2px
              top 2px
          .price
            position relative
            top 4px
            margin-bottom 13px
            span:first-child
              font-size 13px
              color red
              margin-right 5px
              em
                font-size 19px
            span:last-child
              font-size 12px
              color red
              border 1px solid red
              position relative
              top -2px
          .wuliu
            span:first-child  
              font-size 14px
              color red
              background-color pink
              padding 2px 3px
              border-radius 6px
              position relative
              top -7px
            span:last-child 
              position absolute
              right 9px
              bottom 10px
              font-size 14px
              background-color $bc
              padding 4px 4px
              border-radius 16px
      & li:nth-child(2n)
        margin-right 0
        margin-bottom 12px
</style>