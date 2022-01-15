<template>
  <div class="warp">
    <div class="contain">
      <div class="first">
        <div class="top_title">
          <span class="sha"  @click="goto('/miaosha')">京东秒杀</span>
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
          <span class="right">
            更多秒杀
            <span class="iconfont icon-jiantouzuo"></span>
          </span>
        </div>
        <div class="b_two_pic" @click="goto('/detail')">
          <div class="left">
            <img class="one" src="//img11.360buyimg.com/n7/s150x150_jfs/t1/172459/38/3843/197273/60755be6E394a013c/fd4d660e949fe121.jpg.dpg" alt="">
            <span>￥185</span>
          </div>
          <div class="right">
             <img class="two" src="//img11.360buyimg.com/n7/s150x150_jfs/t1/172459/38/3843/197273/60755be6E394a013c/fd4d660e949fe121.jpg.dpg" alt="">
             <span>￥185</span>
          </div>
        </div>
      </div>
      <div class="twofor"  @click="goto('/detail')">
        <div class="fx">
          <div class="w_left" v-for="item in 100">
            <img src="//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/101797/25/20527/331496/61d1b1cfE02136f73/2cc5757994b124cc.jpg!q70.dpg.webp" alt="">
            <div class="w_left_contain">
              <div class="lan">
                <span>京东超市</span>
                <span>蓝月亮亮白增艳</span>
                <span> 洗衣液超值新套装 薰衣草香 2kg瓶*1+1kg*3瓶 洁净去污 易漂洗</span>
            </div>
            <div class="hu">
              <img src="https://img12.360buyimg.com/img/s24x24_jfs/t1/99811/34/18036/1287/5e8dbca2E63de76d4/588b8392ae283444.png" alt="">
              <span class="zui">90天最低价</span>
            </div>
              <div class="price">
                <span class="l">￥87.6</span>
                <span class="mei">每满80-20</span>
              </div>
              <div class="zi">
                <span class="ziyin">自营</span>
                <span >50万+条评论</span>
                <span>看相似</span>
              </div>
            </div>
            
          </div>  
        </div>
      
        <div class="yx_right">
        <div class="fx">
          <div class="w_left" v-for="item in 100">
            <img src="//img10.360buyimg.com/mobilecms/s360x360_jfs/t1/206392/15/17011/172461/61a574e5E2af2e005/9758d5bcdd379c4f.jpg!q70.dpg.webp" alt="">
            <div class="w_left_contain">
              <div class="lan">
                <span>京东超市</span>
                <span>蓝月亮亮白增艳</span>
                <span> 洗衣液超值新套装 薰衣草香 2kg瓶*1+1kg*3瓶 洁净去污 易漂洗</span>
            </div>
            <!-- <div class="hu">
              <img src="https://img12.360buyimg.com/img/s24x24_jfs/t1/99811/34/18036/1287/5e8dbca2E63de76d4/588b8392ae283444.png" alt="">
              <span class="zui">90天最低价</span>
            </div> -->
              <div class="price">
                <span class="l">￥87.6</span>
                <span class="mei">每满80-20</span>
              </div>
              <div class="zi">
                <span class="ziyin">自营</span>
                <span >50万+条评论</span>
                <span>看相似</span>
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
  methods:{
   goto(target){
      this.$router.push(target)
  }
  
}
}
</script>

<style lang="stylus" scoped>
.warp
  background-color #f6f6f6
  padding 0 10px
  height 1000px
  .contain
    background-color #fff
    width 100%
    border-radius 8px
    
    padding 8px 8px 
    box-sizing border-box
    position relative
    .first
      margin-bottom 24px
      .top_title
        display flex
        
        .sha
          font-size 20px
          margin-right 13px
        .ten
          font-size 17px
          color red
          position relative
          margin-right 30px
          margin-top 5px
          &:after
            display inline-block
            content ''
            width 28px
            height 28px
            position absolute
            vertical-align middle
            top -10px
            left 5px
            background-size 28px 28px
            background url(//wq.360buyimg.com/wxsq_project/portal/m_jd_index/images/seckill-time-to_1de70c91.png) no-repeat
        .time
          display flex
          font-size 14px
          .time_b
            width 21px
            height 24px
            background-color red
            text-align center
            line-height 24px
            border-radius 5px
        .right
          right 4px   
          top 8px
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
            
      .b_two_pic
        margin-top 23px
        display flex
        .left,.right
          display flex
          flex-flow column
          margin-right 10px
          text-align center
          .one
            width 190px
            height 218px
            margin-left 0px
            margin-bottom 8px
          .two
            width 200px
            height 218px
            margin-left 0 
            margin-bottom 8px 
          span
            font-size 18px
            color red  
            padding 3px 0
            display inline-block
        .right
          margin-right 0  
    .twofor
      display flex
      .fx,yx_right
        display flex
        flex-flow wrap
        .w_left
          margin-right 10px
          margin-bottom 10px
          display flex
          flex-flow column
          width 216px
          border-radius 6px
          background-color #fff
          img
            width 176px
            height 216px
          .w_left_contain
            padding 7px 10px 15px
            width 100%
            box-sizing border-box
            .lan
              width 100%
              
              span:nth-child(1)
                width 57px
                height 17px
                background-color red
                color #fff
                font-size 12px
              span:nth-child(2) 
                font-size 17px  
              span:nth-child(3) 
                width 181px
                display inline-block 
                font-size 18px
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            .hu
              margin-top 9px
              width 97px
              height 23px
              display flex
              background-color pink
              border-radius 3px
              line-height 23px
              text-align center
              img
                width 16px
                height 16px
                margin-right 4px
                margin-top 3px
              span
                font-size 14px  
                
            .price
              margin-top 5px
              margin-bottom 5px
              .l
                color red
                font-size 17px
                margin-right 5px
              .mei
                width 76px
                height 22px
                border 1px solid red
                color red
                border-radius 4px
                font-size 12px
            .zi
              .ziyin
                width 29px
                height 19px
                background-color red
                color #fff
                font-size 12px
                border-radius 3px
              span:nth-child(2)  
                font-size 14px
                color #f6f6f6
                margin 0 5px
              span:nth-child(3)   
                width 62px
                height 20px
                background-color #f0f2f5
                border-radius 8px
                font-size 13px
</style>