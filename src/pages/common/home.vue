<template>
<div>
  <div class="nav">
      <router-link to="/" class="back">
        <span class="iconfont icon-jiantou_zuo"></span>
      </router-link>
      <span class="fu">{{title}}</span>
      <span class="iconfont icon-caidan"></span>
  </div>  
  
</div>  
</template>


<script>
export default {
  props:{
    title:String
  }
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
</style>