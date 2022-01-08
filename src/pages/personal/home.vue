<template>
  <div>
    <header-top title='我的京东'/>
    <div class="personaldata">
      <div class="top_user">
        <img src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png" alt="">
        <div class="username">
          <div class="top">
            <span>jd_188727wcn</span>
            <div class="sprte"></div>
          </div>
          <div class="bottom">
            <span>京享值</span>
            <span>小白守约400分</span>
          </div>
        </div>
        <img src="https://img12.360buyimg.com/img/s40x40_jfs/t1/125926/3/7446/2181/5f15510bE3f46d483/4f25fadf9ebe91d3.png" alt="" class="button_right">
      </div>
      <div class="middle_data">
        <div class="sp">
          <span>2</span>
          <span>商品收藏</span>
        </div>
        <div class="dp">
          <span>3</span>
          <span>店铺收藏</span>
        </div>
        <div class="wd">
          <span>5</span>
          <span>我的足迹</span>
        </div>
      </div>
      <div class="jd_plus">
        <div class="left">免费试用 立领1张运费券</div>
        <div class="right">0元试用</div>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderTop from '../common/home.vue'

export default {
  components:{
    HeaderTop
  },
  data(){
    return{
     
    }
  }
}
</script>


<style lang="stylus" scoped>
.personaldata
  background-color rgb(254 52 63)
  position relative
  width 100%
  display flex
  flex-flow column nowrap
  
  
  .top_user
    padding 16px 24px 0
    box-sizing border-box
    display flex
    margin-bottom 25px
    position relative
    img
      width 60px
      height 60px
      margin-right 13px
    .username
      .top
        display flex
        margin-bottom 2px
        span
          font-size 22px
          color #fff
        .sprte
          position relative
          &:after
            content ''
            position absolute
            top 1px
            width 20px
            height 20px
            background: url(https://img12.360buyimg.com/img/s300x60_jfs/t1/113596/13/13099/22116/5f1a4bddEb7f1a190/8581e1b9765e15ff.png) no-repeat scroll 0 0/cover; 
      .bottom
        & span:first-child
          width 45px
          line-height 18px
          padding 2px 4px
          box-sizing border-box
          font-size 12px
          border-radius 10px
          background-color black
          color #fff
          margin-right 8px
        & span:last-child  
          width 117px
          line-height  22px
          font-size 12px
          color #fff
          padding 3px 5px
          background-color black
          box-sizing border-box
          border-radius 10px
    & img:nth-of-type(2)
      position absolute
      top 20px
      right 16px
      width 23px
      height 23px
  .middle_data
    display flex
    .sp
      margin-left 48px
      margin-right 90px
      display flex
      flex-direction column
      font-size 15px
      & span:first-child
        padding-bottom 15px
        font-size 18px
        font-weight 700
        color #fff
        text-align center
    .dp  
      margin-right 90px
      display flex
      flex-direction column
      font-size 15px 
      & span:first-child
        padding-bottom 15px
        font-size 18px
        font-weight 700
        color #fff 
        text-align center 
    .wd
      display flex
      flex-direction column
      font-size 15px  
      & span:first-child
        padding-bottom 15px
        font-size 18px
        font-weight 700
        color #fff 
        text-align center 
  .jd_plus
    background: url(https://img12.360buyimg.com/img/s678x99_jfs/t1/112839/2/12981/33105/5f17e12aE602bb83e/8a736742745d79cf.png) no-repeat 0 0;
    width 395px
    line-height  52px
    display flex
    margin-top 20px
    margin-left 35px
    border-radius 0 20px 0 0
    overflow hidden
    .left
      position relative
      display flex
      font-size 12px
      padding-left 115px
      color yellow
      box-sizing border-box
      margin-right 30px
      &:before
        content ''
        display inline-block
        width 77px
        height 30px
        background: url(https://img12.360buyimg.com/img/s113x21_jfs/t1/132167/33/1122/2973/5ed5c74bE41e02c41/5ae83d09fff874cb.png) no-repeat ;
        background-size 77px 15px
        position absolute
        top 18px
        left 9px
      &:after
        width 2px
        height 12px
        background-color yellow
        left 96px
        top 20px
        content ''
        display inline-block
        position absolute
    .right
      font-size 12px
      width 79px
      line-height 17px
      height 20px
      color black
      background-color yellow
      border-radius 10px
      padding 3px 3px
      box-sizing border-box
      margin-top 15px
      text-indent 0.5em



</style>