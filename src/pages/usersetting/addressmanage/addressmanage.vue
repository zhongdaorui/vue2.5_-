<template>
<div>
  <div class="liebiao" > 
    <header-top class="topbc" title="收货地址"/>
    <div class="item">
      <div class="top_di">钟道锐 188****5316</div>
      <div class="bottom_di">
        <div class="left">
          <span>默认</span>
          湖北武汉市江夏区佛祖岭街道光谷大道112</br>号当代国际花园3栋B座荔枝精选酒店(光谷金融港</br>北地铁站店)
        </div>
        <div class="right">
          <span @click="$router.push('/updatedizi')">编辑</span>
        </div>
       
      </div>
    </div>
    <button class="addadress">
      <span @click="$router.push('/adddizi')">新增收货地址</span>
    </button>  
  </div>
  
    
  
</div>
</template>


<script>

import HeaderTop from '../../common/home.vue'
export default {
  data(){
    return{
      showAddAdress:true
    }
  },
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
  padding 19px 11px 0px
  position relative
  border-bottom 1px solid $bc
  .top_di
    font-size 19px
    font-weight 700
    margin-bottom 14px
  .bottom_di
    .left
      font-size 15px
      line-height 20px
      & span:first-child
        width 34px
        height 15px
        border 1px solid red
        text-align center
        font-size 12px
        color red
        margin-right 6px
    

    .right
      position absolute
      top 69px
      right 10px
      color red
      font-size 16px
.addadress
  position fixed
  background-color #fff
  height 71px
  border-top 1px solid $bc
  left 0
  right 0
  bottom 0
  padding 12px 20px
  box-sizing border-box
  >span
    display block
    width 402px
    height 47px
    line-height 47px
    color #fff
    font-size 18px
    background-color red
    text-align center
    border-radius 20px
    font-weight 700
</style>