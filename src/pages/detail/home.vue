<template>
  <div class="warp" >
    <div class="inner" >
      <div class="top" >
        <div class="swiper_top" @click='changegallary'>
          <swiper class="swiper" :list="list" />
          <span class="iconfont icon-jiantou_zuo" @click="goto"></span>
          <span class="iconfont icon-caidan"></span>
          <span>00'30''</span>
          <span>5</span>
        </div>
        <div class="price_title">
          <div>
            <span class="left">
              ￥
              <em>135</em>
              .00
            </span>
             <div class="right">
               <div>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTCYmJiYmJicnJyoqKiYmJikpKSYmJiYmJiYmJjAwMCYmJicnJycnJyYmJicnJyYmJiYmJiYmJjcFA2kAAAASdFJOUwDZ60YWwif3hpoGbVO5eTTlqtOeNgoAAAE0SURBVDjLtVRHAsMgDIMwzAhJyv8fW7NneqtPiRGSbAOE/CUMU44CAHWKmT1EavAtQMsVwrWfQ/MJcx4hTfUpueHy1DT8HueAsSEnWJdhIqRsl1FhG5vIWSBXTSvQ8NVmICuKEqsSu5INoiAX6dAx33aFo39XxTLcPsmDerJjWQSRU+edT/rElj05g58igYF3VeqwUKviEGVskc0bPfWNOhpG6c/QsjQcPbT5QwhuvItamzAUvRupCcG+FkvDKSimcBZxxfxgMhHfMcVAxNDPyNR52oGSJ6yuzr/qVbVc3X24OlxYfOc+9bEy5Y7PMXrKs5sDmlQ6BWwDUs10PE9it/ByMieJ8YzbtwZ2t+Xqzfr5IqR712HCCb4aqt3gobDL72J+C8SCODavyiXa3I4f79N7fAEdSxnDuRhlgAAAAABJRU5ErkJggg" alt="">
                 <span>降价提醒</span>
               </div>
               <div>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUdwTCYmJikpKScnJywsLCYmJiYmJiYmJiYmJiYmJiYmJjAwMCcnJycnJyYmJiYmJiYmJiYmJiYmJgGRkRsAAAASdFJOUwC1I1wYyDP364bhDkZOl2+rngTqsMwAAAERSURBVDjLxZTZEoMwCEXJJmBiUvP/H1twGpeOxcfy4BhzvFwICvCPmDgRUuLpdrlFdH2E8wD+tIy7zNyPwGXB03L+iBV96IKPMbzG3ivE6IMqYlEmU+80kpdNdC4jh+5luVnl4Z4ZciWq+XArL60Cy5vld9lFtidgMWA1R2wypN6DBYXeE4i1aEFRrAM+Q6hK3oK8KomnxYIW9STVVQuqWp30abYg0j7p9T4fI3+KA82XbiGUsiQdqUTEH+ciB3KxNucnSGelPkF6PL19eT4mlY+Tvto6DzCOhNL2yyzcKW0D2Nn0pJRqJW9DkLdvbfUmBNA2H06+peCo7R3/nhx3LYmRb/8IO8bmsLZElJqHf8YbVWQUJtFZYp0AAAAASUVORK5CYII" alt="">
                 <span>收藏</span>
               </div>
             </div>
          </div>
          <div>福祥亮 黄金999转运珠散珠金珠子纯金3D硬金路路通圆珠手链古法金珠光珠吊坠珠佛珠隔珠隔片固珠 5MM镭射珠 金重0.20-0.25g</div>
          <div>
            <span>足金999黄金-支持鉴定复检-线下批发老店-黄金散珠产品售<br/>价不含证书税点,如需证书发票请联系客服补税点费用,有收据盖章！！</span>
          </div>
        </div>  
      </div>
      <div class="fenge"></div>
      <div class="bai">
        <div v-for="item in 2">
          <span>优惠</span>
          <span>
            <em>满减</em>
            每满200元,可减20元现金
          </span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTIyMjCYmJiYmJi0tLY+PjyYmJidnOsIAAAAGdFJOUwDt6aYcSSEXj/YAAAA8SURBVCjPY2AYBTQBLEbKDhiCTmlpKggeq2AAiDJLS0tGcBkFBUActbS0JAY4F6sgVu1YLcLnpFFAFQAATwgLKVhjC9UAAAAASUVORK5CYII" alt="">
        </div>
      </div> 
      <div class="content">
        <div class="pin">
          <div>
            <div class="shu"></div>
            <span>评价</span>
            <span>1000+</span>
            <div>
              <span class="hao">好评度97%</span>
              <span class="iconfont icon-jiantouzuo"></span>
            </div>
          </div>
          <div>
            <ul>
              <li v-for="item in 6">真材实料(7)</li>
            </ul>
          </div>
          <div >
            <div>
              <ul>
                <li>
                  <div class="left">
                    <img src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png" alt="">
                    <div class="u">u**a</div>
                    <span v-for="item in 5" class="iconfont icon-shoucang"></span>
                  </div>
                  <div class="right">
                    2020-11-10
                  </div>
                </li>
              </ul>
            </div>
            <div>趁活动买来给老公的礼物,老公很喜欢,三周年结婚纪念日快乐哈哈</div>
            <div>
              <ul>
                <li v-for="item in 4">
                  <img src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/125276/20/18024/76257/5faab212E2445f1e5/dc640331807cfe13.jpg!cc_100x100!q70.dpg.webp" alt="">
                </li>
              </ul>
            </div>
            <div class="fenge"></div>
          </div>
          
          <div class="button">查看全部评价</div>
       
          <div>
            <div class="left">
              <span class="shu"></span>
              <span>问答</span>
            </div>
            <div class="right">
              <span>暂无提问信息,
                <em>去提问</em>
              </span>
              <span class="iconfont icon-jiantouzuo"></span>
            </div>
          </div>
          <div class="fenge"></div>
       
        </div>
      </div> 
      <div class="fuxiangshop">
        <div>       
          <div class="top">
            <img src="//img30.360buyimg.com/popshop/jfs/t1/40828/21/3992/14824/5cd0f34fE90a14352/48ec219049f6c727.jpg!q70.dpg.webp" alt="">
            <div class="fux">
               <p>福祥亮官方旗舰店</p>
               <span>店铺星级</span>
              <span class="iconfont icon-shoucang" v-for="item in 5"></span>
            </div>
           
           
          </div>
          <div class="two">
            <div class="left">
              <span>848</span>
              <span>粉丝人数</span>
            </div>
            <div class="midiee">
              <span class="four">45</span>
              <span class="quan">全部商品</span>
            </div>
            <div class="right">
              <span>评价 8.94 | 低</span>
              <span>评价 8.94 | 低</span>
              <span>评价 8.94 | 低</span>
            </div>
          </div>
          <!-- <div>
            <div>
              <span class="iconfont icon-shoucang"></span>
              <span>关注店铺</span>
            </div>
            <div>
              <span class="iconfont icon-gouwuchekong"></span>
              <span>进入店铺</span>
            </div>
          </div> -->
        </div>
      </div>
      <footer-button @join-cart="changeshowshopping" />
      <div class="warpppp" v-show="showshopping" >
        <div class="introduce">
          <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/95137/10/21798/151662/61e2f3e8Ea768a8f6/32bf7542df2b4ed4.jpg!q80.dpg.webp" alt="">
          <div class="middle"  >
            <span >￥<em>{{goods.price}}</em>.00</span>
            <span>
              <em>已选</em>
              {{goods.size}}克(含工费70元)，1个
            </span>
          </div>
          <div class="right"  @click="changeshowshopping"></div>
        </div>
        <div class="size">
          <div class="sizeh3">尺码</div>
          <div class="classify">
            <div>1.67克(含工费70元)</div>
            <div>1.72克(含工费70元)</div>
          </div>
        </div>
        <div class="count">
          <div>数量</div>
          <div class="input_size">
            <span @click="isaddcount(false)">-</span>
            <div class="controlcount">{{goods.count}}</div>
            <span @click="isaddcount(true)">+</span>
          </div>
        </div>
        <div class="footer_button" @click="updatecartgoods">
          确认
        </div>
      </div>
      <div class="zhezhao" v-show="showshopping" @click="changeshowshopping" ref="zhezhao"></div>
    
    <Gallary :list="list" v-show="showgallary"  @close="changegallary">
    </Gallary>
  </div>   
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import { Toast,MessageBox } from 'mint-ui';
import swiper from '../common/swiper/Swiper.vue'
// import CartClassify from './components/cartclassify.vue'
import FooterButton from './components/FooterButton.vue'
import Gallary from '../common/gallary/Gallary.vue'
export default {
  data(){
    return{
      showshopping:false,
      list:['//m.360buyimg.com/mobilecms/s843x843_jfs/t8707/289/1248517585/292456/42a1566b/59b758a7N52f1b170.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t8707/289/1248517585/292456/42a1566b/59b758a7N52f1b170.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t8677/324/1257355457/138314/3993660b/59b75894N0d83e8ec.jpg!q70.dpg.webp',
      '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/95137/10/21798/151662/61e2f3e8Ea768a8f6/32bf7542df2b4ed4.jpg!q80.dpg.webp',
      '//m.360buyimg.com/mobilecms/s843x843_jfs/t8677/324/1257355457/138314/3993660b/59b75894N0d83e8ec.jpg!q70.dpg.webp',
      ],
      showgallary:false,
      goods:{
        goodsname:'iphone13',
        price:5560,
        count:5,
        size:'1.72',
        imgurl:'',
        huoodng:''
        
      
      },
     
      
    }
  },
  methods:{
    
    goto(){
      this.$router.push('/')
    },
    changeshowshopping(){
        this.showshopping = !this.showshopping
        this.$refs.zhezhao.addEventListener("touchstart",function(e){
			 		// e.stopPropagation();
			 		e.preventDefault();
			 	},false);
			},
      changegallary(){       
         this.showgallary = !this.showgallary    
      },
      isaddcount(isadd){
        if (isadd) {
          console.log('.')
          if (this.goods.count<10) {
           this.goods.count++
          }else{
            Toast('最多买10件');
            this.goods.count = 10
          }
          
        }else{
          if (this.goods.count>1) {
            this.goods.count--
          }else{
             Toast('最少买1件');
           this.goods.count = 1
          } 
        }
          
      },
      updatecartgoods(){
        this.$store.dispatch('updatecartgoods',this.goods)
        this.showshopping = !this.showshopping
        Toast({
        message: '加入购物车',
        position: 'middle',
        duration: 2000
      });
      },
      getsize(){
        
      }
    },
    mounted(){
      
    },
    deactivated(){
      this.showgallary=false
     
    },
    // watch:{
    //   size(value){
    //     size = '1.72'
    //     console.log(value)
        
    //   }
    // },
  computed:{
    ...mapState(['cartgoods'])
  },
  components:{
    FooterButton,
    //  CartClassify,
     Gallary,
     swiper 
  }
}
</script>

<style lang="stylus" scoped>
.warp
  background-color #f6f6f6
  overflow-x hidden
  height 100%
  .inner

 
    .top
      z-index 0
      position relative
      height 440px
      .swiper_top
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        
        width 100%
        z-index 1
          
        
        
        & span:nth-of-type(1)  
          position absolute
          left 3px
          top 6px
          font-size 30px
          color #fff
          width 40px
          height 40px
          line-height 40px
          text-align center
          background-color #a8a8a8
          border-radius 40px
          z-index 2
        & span:nth-of-type(2)  
          position absolute
          right  8px
          top 6px
          font-size 30px
          color #fff
          width 40px
          height 40px
          line-height 40px
          text-align center
          background-color #a8a8a8
          border-radius 40px
           z-index 3
        & span:nth-of-type(3)
          position absolute
          left 186px
          top 404px
          width 110px
          height 35px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAA8CAMAAADbqzFgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTJqamvDw8M/Pz/1vav39/f6Qi////wgICAAAAPv7++Tk5P/Lyv+8u/f39//v7/T09P5OUP1fU/9FTv1XUvxmVf////6sqv7s6/7My/JlC+UAAAARdFJOUwAshEv5xezMEwi4Z9neoNCW4Fs5AwAAAw1JREFUaN7VmtuWqyAMhlulFHV6QEDt+7/oBuWQIN179g3R2MtZa771/0kIh8ulHF3Xieph/+nlP8IStkPz7PvbvVrc+v7ZDK1l/T3juyJfRvv+FWknrg0Zoydtrv8CtZD3A4QF/auUw+1+iLgN3wXtrs/7YeJ57b5R9uDPfjhnzBjGOP8h4ezLnKJNhj+4JXQx2jCj4Q8K49tCgoohQXpGS+m+NRgF6LDj7NrodoSMjKMetWYE3rddnpfBcW6M2Ymp14/X9x3nZ6yeFzclLa2YLviLto6E70QvVtLSUa6gklXnfIp9+UBKlJdeTQrOVEYxMZHjETRCWkzJ6dJTNPvqCVpCMaXFrM/ZiCCm70SFvNRATLl91fuSlzOImZUPKp4gpv0xIjnFlpmPEiXW0pkuZe316Cbg+lOoco3KZ4OUciRZi8Q7F3Ms1I8MnhPI+RbJc55Tsnk2uHx8KE7gesnzFXSZpmUOUgItlZQErncD7kZxcptcLAwWuVezek8aLGaDPI8L+YY5TR8WxPSQqr7rTRemDp4XecCcpjmzXKnardPOH6KHqZlaUcKcFi6T4YoAs8eYqRNBNZ3zY5TSUipJgLn1o5iXxi+RCHOao5jrr35HSph4WseYn2C4E1MpAsyS6TozfWEpMYlMj5h42ICYs0aUJCUUGhLeRmqTDGdb9YTMJGlIob3nUxHLu5EKWiqK9h4WyxFMRY7TQL+h4zYoFks/eph8wlyc3wa1dQ9KMXrEQS7fRvLPmpSwrRN5vo7vYSyOO584vGmtQV4mUpKxOA6crq0DNSUMKCaJ52nLNqZ9D9igSZiVJGLeBN4Ao2MYDaWElFQb4HicAPdnaVrfZiI6McNxQjqc0aUNGk5MRXY4A466wAZNlxOzuuXgJDYdHOaJmWtJeXAIj2GzXWSmpSQ9hoWH2pmYxFr2+eF7vCLQoMaxmORXBPjCRRbFPMKFS3Z9tYfUx7i+yi8DNaqf41wG7q9WGXM1z9ixrlbPclF9lmv/szyiOM2TlFXREzzwOc1zKcLHZ+Lr47M/c6RItxWG3+oAAAAASUVORK5CYII=")
          background-repeat no-repeat
          font-size 12px
          background-size 100% 100%
          line-height 35px
          text-align center
          z-index 4
        & span:nth-of-type(4)
          position absolute
          width 74px
          height 21px
          border-radius 30px
          background-color #a8a8a8
          bottom 10px
          right -8px
          line-height 21px
          text-align center
          font-size 12px
          z-index 5
      .price_title
        border-radius 0 0 30px 30px
        padding 16px 20px 17px
        background-color #fff
        & div:nth-of-type(1)    
          display flex
          position relative
          margin-bottom 28px
          .left
            color red
            font-size 13px
            em
              font-size 34px
              font-weight 700
          .right
            position absolute
            right 0
            top 0
            display flex
            div
              display flex
              flex-flow column
              img
                width 25px
                height 25px
              span
                font-size 12px
                width 50px  
            & div:nth-child(1)
              margin-right 5px
              span
                margin-left -8px
                margin-top 6px
        & div:nth-of-type(2)  
          font-size 20px
          font-weight 700
          line-height 28px
          margin-bottom 27px
        & div:nth-of-type(3)
          font-size 14px
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          line-height 18px
    // .bai
    .fenge
      height 14px
      background-color #f6f6f6
      width 100%
    .bai
      width 100%
      border-radius 20px
      background-color #fff
      padding 32px 20px 5px
      margin-bottom 11px
      box-sizing border-box
      
      div
        display flex
        position relative
        padding-bottom 22px
        border-bottom 1px solid #ccc
        margin-bottom 18px
        & span:nth-of-type(1)
          font-size 18px
          font-weight 700
          margin-right 13px
          white-space nowrap
         
        & span:nth-of-type(2)  
          font-size 16px
          margin-right 116px
          white-space nowrap
       
        
          em
            border 1px solid red
            color red
            font-size 13px
        img
      
          width 35px
          height 20px
    .content
      padding 18px 14px 0px
      box-sizing border-box
      background-color #fff
      margin-bottom 12px
      .pin     
        & div:nth-of-type(1)
          display flex
          position relative
          margin-bottom 13px
          .shu
            width 2px
            height 20px
            background-color red
          & span:nth-of-type(1)  
            font-size 20px
            margin 0 10px 0 5px
            font-weight 700
          & span:nth-of-type(2)    
            font-size 12px
            font-weight 700
            margin-top 3px
          & div:nth-of-type(2)
            position absolute
            top 0
            right 0
            font-size 12px 
            .hao
              font-size 14px
              margin-right -1px
              font-weight 700
            .icon-jiantouzuo
              font-size 20px  
              font-weight 700
        & div:nth-of-type(2)
          margin-bottom 22px
          ul
            display flex
            flex-wrap wrap
            li
              width 104px
              height 39px
              line-height 39px
              text-align center
              margin-right 25px
              background-color pink 
              font-size 16px 
              margin-bottom 10px
              border-radius 20px 
        & div:nth-of-type(3)
          & div:nth-of-type(1)
            position relative        
            ul
              li
                display flex
              
                .left
                  img
                    width 20px
                    height 26px
                    margin-right 10px 
                    vertical-align middle
                    margin-top -3px
                  .u
                    font-size 12px
                  .icon-shoucang
                    font-size 13px
                    color orange
                    margin-right 2px 
                .right
                  position absolute
                  right 0
                  top 0
                  font-size 12px
                  color #c8c8c8  
          & div:nth-of-type(2)
            font-size 16px
            margin-bottom 25px
          & div:nth-of-type(3)
            ul
              display flex
              li
                margin-right 8px
                overflow hidden
                img
                  width 101px
                  height 96px
                  border-radius 6px
        
        & div:nth-of-type(4)
          margin-top 10px
          width 128px
          line-height 32px
          font-size 14px
          border 1px solid #f6f6f6
          text-align center
          margin-left 170px
          border-radius 10px
          margin-bottom 15px
        & div:nth-of-type(6)
          height 1px
          width 100%
          background-color #f6f6f6
        // & div:nth-of-type(6)
        & div:nth-of-type(5)
          position relative
          .right
            position absolute
            right 0
            top 0
            font-size 12px
    .fuxiangshop
      padding 26px 0px 21px 30px
      width 100%
      box-sizing border-box
      background-color #fff
      position relative
      height 1000px
      .top
        display flex
        margin-bottom 29px
        img
          width 40px
          height 40px
          margin-right 15px
        .fux
          font-size 17px
          p
            line-height 20px
          .icon-shoucang
            font-size 8px !important
            color red
      .two
        display flex
        .left
          border-right 1px solid #f6f6f6
          padding 5px 50px
          box-sizing border-box
          font-size 13px
          display flex
          flex-flow column 
          text-align center 
          span:nth-child(1)
            line-height 26px
        .midiee
          position absolute
          top 105px
          left 219px
          display flex
          flex-flow column
          font-size 12px
          line-height 19px
          .four
            text-indent 2em
        .right
          position absolute
          left 313px
          top 105px
          font-size 12px
          display flex
          flex-flow column
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
      z-index 99
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
            background url('./components/img/删除.png') no-repeat left top/27px 27px      
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
            font-size 33px
            color black   
            position absolute
            left -17px
            top -8px
          .controlcount
            width 40px
            height 20px
            line-height 20px
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
            top -3px
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
    .zhezhao
      position fixed
      background-color rgba(0,0,0,.5) 
      top 0      
      left 0
      right 0
      bottom 0
      z-index 9


</style>