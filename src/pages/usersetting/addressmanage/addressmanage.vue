<template>
<div >
  <header-top class="topbc" title="收货地址"/>
  <div class="item">
    <div class="top_di">钟道锐 188****5316</div>
    <div class="bottom_di">
      <div class="left">
        <span>默认</span>
        <span>湖北武汉市江夏区佛祖岭街道光谷大道112号当代国际花园3栋B座荔枝精选酒店(光谷金融港北地铁站店)</span>
      </div>
      <div class="right">
        <span>编辑</span>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import HeaderTop from '../../common/home.vue'
export default {
  components:{
    HeaderTop
  }
}
</script>


<style lang="stylus" scoped>
@import '~common/mixins.styl';
.topbc >>> .nav
  background-color $bc
.item
  background-color #fff
  padding 19px 11px 11px
  position relative
  border-bottom 1px solid $bc
  .top_di
    font-size 19px
    font-weight 700
    margin-bottom 15px
  .bottom_di
    width 347px
    .left
      & span:first-child
        width 34px
        height 15px
        border 1px solid red
        text-align center
        line-height 15px
        font-size 12px
        color red
        margin-right 6px
      & span:last-child  
        font-size 17px
        color $ziti
        line-height 24px
    .right
      position absolute
      top 65px
      right 10px
      color red
      font-size 16px
 
</style>