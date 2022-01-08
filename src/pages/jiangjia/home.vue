<template>
  <div>
     <div class="guan_swiper">
        <router-link to="/" class="link">
          <span class="iconfont icon-jiantou_zuo"></span>
        </router-link>
       <img src="https://img14.360buyimg.com/img/s750x380_jfs/t1/194846/36/9413/71066/60cf392bEb7b0f35c/6dbb0e014d6ece33.png" alt="">
     </div>
     <div class="content">
       <div class="tabs">
         <ul class="pad">
           <li v-for="(item,index) in tabs" :key="index" @click="done(index)">{{item}}</li>
         </ul>
       </div>
        <div class="shangp"   v-for="(item,index) of shangping" :key="index" :class="[num === index ? 'tab-item' :'none']">
          <div class="contain" v-for="k in 30">
            <div class="left">
              <img :src="item" alt=""   >
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
                <p class="yi">已优惠11.9元</p>
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
  </div>
</template>


<script>
export default {
  data(){
    return{  
      tabs:["自营",'母婴玩具','上新','生活百货','手机平板','酒水饮料','家清纸品','米面粮油','箱包配饰','数码配件','大小家电','生鲜水果','美妆个护','休闲零食'],
      shangping:[
        'https://img14.360buyimg.com/n1/jfs/t1/173122/29/2084/178844/606ac5eeE6cf4583d/7e331dd734bf343b.png',
        'https://img14.360buyimg.com/n1/jfs/t1/199895/10/15887/363703/618492a6Eda49b386/ea413c23c166e39d.png',
        'https://img11.360buyimg.com/n1/jfs/t1/203647/19/16293/307812/619b66f2E5d2f3e3c/1bcb26c5a85f86be.png',
        'https://img13.360buyimg.com/n1/jfs/t1/171862/34/24866/86537/61d2fc85E24d3a7fd/212e754646eb8bb9.jpg',
        'https://img11.360buyimg.com/n1/jfs/t1/106702/5/20249/785245/61c6bb56E19258684/7c75e464118d79a3.png',
        'https://img11.360buyimg.com/n1/jfs/t1/94622/38/20290/151461/61cd5fd5E42d0b692/6d1f17643a3ee231.png',
        'https://img10.360buyimg.com/n1/jfs/t1/202679/11/16572/80557/61a087a9E46ca3f6d/8d8d8b22132d218b.jpg',
        'https://img13.360buyimg.com/n1/jfs/t1/221191/23/4194/341913/61a44aabEedd4b63e/b03348daf8e105f3.png',
        'https://img10.360buyimg.com/n1/jfs/t1/209773/34/12056/85433/61b2acc7Ede1f2abc/4618c15d4aa7ecbe.png',
        'https://img11.360buyimg.com/n1/jfs/t1/204070/21/20329/112901/61cc28b5E84442f47/b7d832dab891d3cb.jpg',
        'https://img10.360buyimg.com/n1/jfs/t1/206384/19/18744/193232/61bafb73E723627e0/473ee1dcb361eddd.png',
        'https://img11.360buyimg.com/n1/jfs/t1/166282/17/21802/625063/61a83b2bE136ad9a7/b2f67e8b843f470a.png',
        'https://img11.360buyimg.com/n1/jfs/t1/204027/15/19813/1048374/61c28822E0e36e96f/c755f2f94c2a879c.png'],
        num:0
      
    }
  },
 methods:{
   done(index){
     this.num = index
     console.log('点击啦第'+index+'项')
   }
 }
}
</script>


<style lang="stylus"  scoped>
.guan_swiper
  .link
    span
      font-size 30px
      position absolute
      top 15px
      left 15px
      width 30px
      height 30px
      border-radius 30px
      background-color #f6f6f6
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
    .contain
      display flex
      margin-bottom 20px
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
          width 95px
          height 16px
          background-color orange
          padding 1px 4px
          font-size 11px
          margin-bottom 7px
          border-radius 10px 
          box-sizing border-box
          white-space nowrap
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
  .tab-item
    display block
  .none
    display none               
</style>