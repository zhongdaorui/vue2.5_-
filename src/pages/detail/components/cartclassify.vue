<template>
  
</template>


<script>
export default {
  methods:{
    hiddenshop(){
      this.$emit('hiddenshop')
    }
  }
  
}
</script>


<style lang="stylus" scoped>
.warpppp
  height 466px
  background-color #fff
  width 100%
  box-sizing border-box
  padding 24px 15px 5px
  border-radius 18px 18px 0 0 
  position fixed
  left 0
  right 0
  bottom 0
  z-index 99999999999999999999999
  .introduce
    display flex
    position relative
    >img
      width 116px
      height 116px
      margin-right 15px
    .middle
      position relative
      & span:first-child
        position absolute
        top 49px
        left -3px
        font-size 12px
        color red   
        em
          font-size 25px
          font-weight 700  
      & span:last-child
        font-size 12px
        display block
        position absolute
        top 102px
        left 0
        white-space nowrap
        em 
          color #ccc
          margin-right 16px
    .right
      position absolute
      top 0
      right 0px
      &:before
        content ''
        display inline-block
        width 27px
        height 27px
        background url('./img/删除.png') no-repeat left top/27px 27px      
  .size
    margin-top 36px
    .sizeh3
      font-size 15px
      margin-bottom 15px
      font-weight 700
    .classify
      display flex
      & div:first-child,& div:last-child
        font-size 14px
        padding 10px 20px
        border-radius 30px
        border 1px solid red
        margin-right 18px
        background-color #f2f2f2
  .count
    margin-top 35px
    
    display flex
    position relative
    & div:first-child
      font-size 15px
      font-weight 700
    & div:last-child  
      position absolute
      top -12px
      right 20px
      & span:first-child
        font-size 30px
        color black   
        position absolute
        left -17px
        top -2px
      & input:first-of-type
        width 40px
        height 20px
        background-color #ccc
        color black
        font-size 12px
        text-align center
        color #262626
        font-weight 700
      & span:last-child  
        ont-size 30px
        color black     
        position absolute
        right  -22px
        top 2px
  .footer_button
    position absolute
    bottom 4px
    left 17px
    right 17px
    background-color red
    color #fff
    font-size 15px
    font-weight 700
    padding 11px 181px
    border-radius 20px

</style>