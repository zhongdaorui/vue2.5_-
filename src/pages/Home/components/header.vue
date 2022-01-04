<template>
<div>
  <div class="pbc"></div>
  <div class="warp">
    <div class="bc">
      <div class="header_input">
        <span class="iconfont icon-caidan"></span>
        <div class="input">
          <div class="jd"></div>
          <span class="iconfont icon-fangdajing"></span>
          <span class="inner">dell台式机</span>
        </div>
        <div class="button">登录</div>  
     </div>  
    <div class="lunbocon">
       <img class="lunbo" src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/166350/30/25542/46462/61d10029E639ac57c/2b76918672fa765e.jpg!cr_1053x420_4_0!q70.jpg.dpg" alt="" />
    </div>
    <div class="xiaoqiuqiu">
      <ul>
        <li v-for="item in 8"></li>
      </ul>
    </div>
    <div class="bolu">
      <img src="//img20.360buyimg.com/img/jfs/t1/218165/29/5441/29775/619c8f94E646ece0c/5e01de9461456633.png.webp" alt="">
    </div>
    <div class="swiper">
      <div class="contain" v-for="item in 10">
        <img src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg" alt="">
        <span>京东超市</span>
      </div>
    </div>
    <div class="twoqiuqiu">
      <ul>
        <li v-for="item in 2"></li>
      </ul>
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
.pbc
  position absolute
  top 0
  left 0
  right 0
  height 150px
  background-color #c82519
  
.warp
  
  padding 8px 15px  
  background-color #f6f6f6
  .bc
    width 100%
    .header_input
      width 100%
      height 35px
      line-height 35px
      margin-bottom 6px
      display flex
      .icon-caidan
        font-size 18px
        color #fff
        font-weight 700
        z-index 3
      .input
        width 344px
        line-height  100%
        background-color #fff
        margin 0 14px
        border-radius 10px
        position relative
        text-align center
        .jd
          position absolute
          left 20px
          top 10px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=") no-repeat
          width 20px
          height 15px
          background-size: 20px 15px;
          &:after
            content ''
            display inline-block
            width 1px
            height: 20px;
            background-color: #ccc;
            position absolute
            top -2px
            right -8px
        .icon-fangdajing
          position absolute    
          top 4px
          left 55px
          font-size 22px
          color #c0c0c0
        .inner
          font-size 14px
          color #c0c0c0  
      .button
        font-size 18px
        color #fff
        font-weight 500
        z-index 4
  .lunbocon
    width 437px
    height 169px
    border-radius 6px
    overflow hidden
    position absolute
    top 56px
    left 15px
    img
      width 100%
 
  .xiaoqiuqiu
    margin-top 273px 
    text-align center 
    margin-bottom 42px
    ul
      display flex
      margin-left 186px
      li
        width 6px
        height 6px
        border-radius 6px
        background-color #fff
        margin-right 3px
      li:nth-child(1)  
        background-color red
  .bolu
    width 432px
    height 106px
    margin-bottom 30px
    img
      width 100%
      height 100%
  .swiper
    display flex
    flex-wrap wrap
    .contain
      display flex
      flex-flow column 
      margin-right 34px
      font-size 12px
      img
        width 50px
        height 43px
      span
        padding-top 12px 
        padding-bottom 15px    
    .contain:nth-child(5n)
      margin-right 0
  .twoqiuqiu
    text-align center 
    margin-bottom 30px
    ul
      display flex
      margin-left 186px  
      li
        width 6px
        height 6px
        border-radius 6px
        background-color #fff
        margin-right 3px
      li:nth-child(1)  
        background-color red        
</style>