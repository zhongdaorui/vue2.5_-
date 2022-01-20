<template>
<div>
  <div class="nav">
      <div @click="$router.back()" class="back">
        <span class="iconfont icon-jiantou_zuo"></span>
      </div>
      <span class="fu">{{title}}</span>
      <span class="iconfont icon-ellipsis"></span>
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
    font-size 22px
    top 18px
    left 170px
  .icon-ellipsis
    position absolute
    right 26px
    top 17px
    font-size 30px
    font-weight 700
   
</style>