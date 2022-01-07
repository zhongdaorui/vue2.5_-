<template>
  <div>
     <div class="guan_swiper">
       <img src="https://img14.360buyimg.com/img/s750x380_jfs/t1/194846/36/9413/71066/60cf392bEb7b0f35c/6dbb0e014d6ece33.png" alt="">
     </div>
     <div class="content">
       <div class="tabs">
         <ul class="pad">
           <li v-for="item in 30">上新</li>
         </ul>
       </div>
       <div class="shangp" v-for="item in 50">
         <div class="left">
           <img src="https://img14.360buyimg.com/n1/jfs/t1/173122/29/2084/178844/606ac5eeE6cf4583d/7e331dd734bf343b.png" alt="">
         </div>
         <div class="right">
          <div class="first">
            <span>梓琪梓彤</span>
            <span class="shu"></span>
            <span>梓琪梓彤【10罐巨</span>
            <span>
              划算】五香带鱼罐头下饭菜香辣海鲜熟食罐装渤海黄花鱼组合装 下饭香辣 2罐
            </span>
          </div>
          <p class="cla">坏了包赔</p>
          <p class="yi">已优惠11.19元</p>
          <div class="bu">
            <img src="https://img20.360buyimg.com/img/s570x105_jfs/t1/186955/4/5439/4000/60b0e53bE39a97de9/2f8f923897a1215e.png" alt=""> 
           
            <span class="qi">￥7.9</span>
            <span class="hou">补贴后</span>
          
          
            <span class="qii">￥19.8</span>
            <span class="buu">全网热销2000+件</span>
          
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


<style lang="stylus"  scoped>
.guan_swiper
  img
    width 100%
.content
  background-color #f6f6f6 
  padding 30px 18px 0
  box-sizing border-box
  .tabs   
    margin-bottom 20px
    .pad
      display flex     
      overflow-x: scroll;
      overflow-y: hidden;
      padding-bottom: 25px  
      li
        margin-right 29px
        white-space: nowrap;
        font-size 20px
        font-weight 700
  .shangp
    display flex
    margin-bottom 15px
    .left
      width 163px
      height 163px
      background-color #fff
      margin-right 18px
      img
        width 160px
        height 160px
    .right
      width 100%
      margin-top -9px
      .first
        width 100%
        & span:nth-of-type(1)    
          font-size 18px
          color red
        & span:nth-of-type(2)    
          width 2px
          height 20px
          background-color black
          margin 0 5px
          margin-top 6px
          display inline-block
        & span:nth-of-type(3) 
          font-size 18px
        & span:nth-of-type(4)   
          white-space nowrap
          overflow hidden 
          text-overflow ellipsis
          font-size 18px
          width 243px
          display inline-block
          margin-top -9px
      .cla
        width 62px
        height 17px
        background-color pink
        border-radius 10px
        padding 0 4px
        font-size 12px
        margin 9px 0
      .yi
        width 88px
        height 16px
        background-color orange
        padding 0 3px
        font-size 12px
        margin-bottom 7px
        border-radius 10px 
      .bu
        width 227px
        height 44px
        position relative
        img
          width 227px
          height 46px
          position absolute
          left 0
          top 0
          right 0
          bottom 0
        .qi
          position absolute
          left 20px
          top 5px
          font-size 18px
          color #fff
          font-weight 700
        .hou
          position absolute
          top 28px
          left 23px
          font-size 15px
          color #fff  
        .qii
          position absolute
          left  140px
          top 10px
          font-size 17px 
        .buu
          position absolute
          left 99px
          top 28px
          font-size 12px   
</style>