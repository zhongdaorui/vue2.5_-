<template>
  <div class="warp">
    <div class="header_top">
        <header-top title="购物车"/>
        <div class="di" v-if="!showAllDelete">
          <div class="left"  @click="toggledizi">
             <span class="iconfont icon-31dingwei"></span>
             <span>{{qushilist}}</span>
          </div>
          <div class="right">
            <span @click="toggledelete">编辑商品</span>
          </div>
        </div>
        <div class="delete" v-else>
          <span @click="toggledelete">完成</span>
        </div>
    </div>
    <div class="list_content"  v-for="(item,index) in cartgoods" :key="index">
      <div class="list_content_container">
        <div class="shopdata" >
           <input type="checkbox" v-model="item.complete">
           <img src="//img10.360buyimg.com/mobilecms/s234x234_jfs/t1/101805/40/20783/198822/61d9b62eEd68a7f88/c246c15cbda5cd86.jpg!q70.dpg.webp" alt="">
           <div class="datalist">
             <span>{{item.goodsname}}</span>     
             <div class="size">
               <span>夜用s码26片,</span>
               <span>选服务</span>
             </div>
             <span>￥<em>{{item.price}}</em>00
             </span>
             <div class="shul">
               <span class="iconfont icon-jianhao"   ></span>
               <span>{{item.count}}</span>
               <span class="iconfont icon-jiahao"  ></span>
             </div>
           </div>
        </div>
        <div class="tixin">
          <span>移入关注</span>
          <span @click="deletecartgood">删除</span>
        </div>
      </div>
    </div>
    <img  src="https://img12.360buyimg.com/img/s694x148_jfs/t1/171999/12/22113/58222/61bad82eE0dcf6d31/d92d1e829bf953da.png" alt="">
    <div class="tuijian1">
      <span class="left"></span>
      <span>为您推荐</span>
      <span class="right"></span>
    </div>
    <div class="tuijianlist">
        <div class="tui_content" v-for="k in 100">
          <img src="//img10.360buyimg.com/mobilecms/s350x350_jfs/t1/198474/1/4100/136168/611f74d1Eb802b043/0c0e5cecb17f4048.jpg!q70.dpg.webp" alt="">
          <div class="ziyin">
            <div class="ziyinbox">
              <img class="img" src="//img12.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png.webpc=" alt="">
              <span>
                周六福珠宝多金牛足
              </span>
            </div>
           
            <p>金黄金转运珠女款生肖牛手绳 定价 AD166116 1-1.2g</p>
          </div>
          <div class="footer_money">
            <span>
              ￥<em>1038</em>
            </span>
            <span>秒杀</span>
          </div>
        </div>
    </div>
    <div class="jisuan" v-if="!showAllDelete">
      <div class="j_left">
        <input type="checkbox" v-model="checkAll">
        <span >全选</span>
      </div>
      <div class="j_middle" @click="togglezhezhao">
        <span>
          总计：
          <em>￥{{totalPrice}}</em>
        </span>
        <span class="syouhui">已优惠745.7元</span>
      </div>
      <div class="j_right">
        <span>领卷结算
          <em>{{sum}}</em>
        </span>
      </div>
    </div>
    <div class="shouchang" v-else>
      <div class="left">
        <span class="iconfont icon-duigou"></span>
        <span>全选</span>
      </div>
      <div class="right">
        <span >移至收藏</span>
        <span >删除</span>
      </div>
    </div>
    <van-overlay :show="show" @click="togglezhezhao">
      <div class="monnyshow" @click.stop>
        <div class="h3">
          <h3>金额明细</h3>
          <span class="tuichu"  @click="togglezhezhao"></span>
        </div>  
        <div class="allmonnya">
          <span>商品总额</span>
          <span>￥874.00</span>
        </div>
        <div class="allmonnyb">
          <span>促销</span>
          <span>-￥87.00</span>
        </div>    
        <div class="youhui">
          <div class="left">
            <p>共优惠</p>
            <span>以上优惠不包含红包和京豆，请在结算页内查看</span>
          </div>
          <div class="right">-￥80.00</div>
        </div>
      </div>   
    </van-overlay>
    <van-overlay :show="isshow" @click="toggledizi">
    <div class="wrapper" @click.stop>
       <h3>选择地址</h3>
       <img src="./img/退出.png" alt="" @click="toggledizi"/>
       <div class="item" v-for="(item,index) in  addresslist" :key="index"  @click=" togglequshi(index)">
         <input type="checkbox"  >
         <span>{{item.nowarea}}{{item.detailarea}}</span>
       </div>
       <div class="footer">
         <span>选择其他地址</span>
       </div>
      </div>
    </van-overlay>
  
           
       

  </div>

</template>

<script>


import {mapState,mapGetters} from 'vuex'
import HeaderTop from '../common/home.vue'
import { Popup,Overlay } from 'vant';



export default {
  
  data(){
    return{
        showAllDelete:false,//显示是否展示删除
        show: false,//展示是否显示遮罩和金额明细面板  
        count:0,
        qushilist:'武汉市青山区',
        isshow:false,
      
    
    }
  
  },
  methods:{
    toggledelete(){
      this.showAllDelete=!this.showAllDelete
    },
    togglezhezhao(){
      this.show= !this.show
      console.log('.')
    },
    getcount(count){
      this.count = count
    },
   
     deletecartgood(index){
        this.$store.dispatch('deletecartshop',index)
      },
      toggledizi(){
        this.isshow = !this.isshow
      },
      togglequshi(index){
        this.isshow = !this.isshow
        const result = this.address[index].nowarea
        const qushi = result.slice(1)
        console.log(qushi)
        const qushilist = qushi.join().replaceAll(',','')
        this.qushilist = qushilist
      },

     
  
         
 
  
     
  },
  // computed:{
  //     totalPrice(){
  //       var totalPrice = 0;
  //       this.cartgoods.forEach(element =>{
  //       totalPrice  += element.count*element.price
  //     })
  //     console.log('..')
  //     return  totalPrice

  //     }
 
  // },
    
  
  components:{
    [Popup.name]:Popup,
    [Overlay.name]:Overlay,
    HeaderTop,
  },
 
  computed:{
    ...mapState(['goods','cartgoods','address']),
    ...mapGetters(['isAllSelect']),
    addresslist(){
    if(this.address.length>0 && this.address){
      const  result = []
    this.address.map(item=>{
      result.push(Object.assign({},item,{nowarea:item.nowarea.join(' ').replaceAll(" ","")}))
    })
    return result
    }
  },
  checkAll:{
    get(){
      return this.$store.getters.isAllSelect
    },
    set (value) {// 点击了全选checkbox  value是当前checkbox的选中状态(true/false)
      // this.selectAll(value)
      this.$store.dispatch('selectAll', value)
    }
    },
    //计算总价
    totalPrice(){
    var totalPrice = 0;
    this.cartgoods.forEach(element =>{
    totalPrice  += element.count*element.price
  })
      console.log('..')
      return  totalPrice

    },
    //计算购物车的数量
    sum(){
     return this.cartgoods.length
    }
  }

  
 
}
</script>

<style lang="stylus" scoped>
.warp >>> .syouhui
  position: relative
  left -35px
.warp
  background-color rgb(242 242 242)
  .header_top
    .di
      background-color #fff
      display flex
      padding 11px 22px 21px
      width 100%
      box-sizing border-box
      border-top 1px solid #ccc
      height 58px
      position relative
      border-radius 0 0 15px 15px
      .left
        position absolute
        top 12px
        left 24px
        & span:first-child
          font-size 18px
          margin-right -2px
        & span:last-child    
          font-size 16px
          position relative
          left -3px
      .right
        position absolute
        top 21px
        right 0
        width 81px
        &:after
          position absolute
          content ''
          display inline-block
          width 1px
          height 15px
          background-color #ccc
          top 0
          left -25px
        span
          font-size 16px
          position absolute
          top 0
          left -10px 
    .delete
      background-color #fff
      display flex
      padding 11px 22px 21px
      width 100%
      box-sizing border-box
      border-top 1px solid #ccc
      height 58px
      position relative
      border-radius 0 0 15px 15px
      >span
        position absolute
        right 16px
        top 17px 
        font-size 15px
  .list_content
    margin-top 15px
    background-color #fff
    padding 21px 19px 27px
    border-radius 10px
    width 100%
    height 266px
    box-sizing border-box
    position relative
    margin-bottom 10px
    .list_content_container 
      .shopdata
        margin-top 21px
        display flex
        position relative
        >input
          width 18px
          height 18px
          position relative
          top 40px
          right 9px
          
          
        img
          width 120px
          height 118px
          margin-right 16px
          border-radius 9px
          overflow hidden
          margin-top -3px
        .datalist
          display flex
          flex 1
          min-width 0
          flex-flow column   
          & span:nth-of-type(1)
            font-size 12px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .size
            margin 11px 0px
            background-color #ccc
            font-size 12px
            width 161px
            line-height 22px
            border-radius 10px
            padding 2px 4px
            box-sizing border-box
            position relative
            & span:last-child
              &:after
                content ''
                display inline-block
                background: url(//wq.360buyimg.com/wxsq_trade/cart/main/images/icon_arrow_12@2x_730a6daa.png) no-repeat 50%;
                width 12px
                height 9px
                background-size 12px 9px 
                position absolute
                right 4px
                top 10px
          & span:nth-of-type(2)
            font-size 12px
            color red
            em
              font-size 24px
          .shul
            position absolute 
            display flex  
            width 86px
            height 24px
            font-size 16x
            bottom 5px
            right -0px 
            & span:nth-child(2)
              width 40px
              height 20px
              background-color #ccc
              line-height 20px
              font-size 14px
              margin 0 6px
              text-align center
            & span:nth-child(1)
              margin-top 2px
      .tixin
        position absolute
        right 23px
        top 225px
        font-size 12px
        & span:first-child
          margin-right 22px
          &:after
            position absolute
            bottom  0
            left 69px
            content ''
            display inline-block
            height 15px
            width 1px
            background-color #ccc
  img
    width 100%
    margin 18px 0 18px 
  .tuijian1
      line-height 45px
      font-size 14px
      color #ccc
      text-align center
      display flex
      position relative
      .left
        width 160px
        height 1px
        background-color #ccc
        position absolute
        top 20px
        left 25px
      .right
        position absolute
        top 20px
        right  25px
        width 160px
        height 1px
        background-color #ccc
      & span:nth-child(2)
        margin-left 208px 
  .tuijianlist
      width 100%
      // background-color #ccc
      border-radius 15px
      display flex
      flex-flow row wrap
      .tui_content
        background-color #fff
        display flex
        flex-flow column
        margin-right 15px
        margin-bottom 3px
        width 210px
        height 300px
        padding 20px 15px 4px
        border-radius 10px
        box-sizing border-box
        img
          width 183px
          height 185px
          margin-bottom 15px
        .ziyin
          margin-bottom 4px    
          .ziyinbox
            display flex
            height 22px
            span
              font-size 13px 
              white-space nowrap
            .img
              width 31px
              height 15px
              margin-right 0px
              margin-bottom 3px   
              margin-top -1px    
          p
            font-size 12px
            flex 1
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
        .footer_money
          & span:first-child
            font-size 13px
            color red
            margin-right 1px
            em
              font-size 18px
              font-weight 700
          & span:last-child
            width 30px
            height 15px
            line-height 15px
            color red
            font-size 12px
            border 1px solid red
            padding 0px 3px
            border-radius 5px
            box-sizing border-box
            margin-top -2px
      & .tui_content:nth-child(2n)
        margin-right 0
  .jisuan
    width 100%
    background-color #fff
    position fixed                 
    left 0
    right 0
    bottom 0px
    display flex
    box-shadow 0 3px 3px #ebeaec
    border-top 1px solid #ebeaec
  
    height 56px
    .j_left
      flex 18.76%
      margin-left 15px
      margin-top 10px
      >input
        position relative
        top 2px
      & span:last-child
        font-size 15px  
    .j_middle
      flex 45.77%
      display flex      
      flex-flow column
      margin-left 56px
      margin-top  12px
      position relative
      & span:first-child
        font-size 17px
        line-height 19px
        em
          font-weight 700
          margin-left -10px
      & span:last-child    
        margin-left 35px
        font-size 14px
      &:after
        content ''  
        display inline-block
        background  url('./下载.svg') no-repeat 
        position-size 16px 12px
        width 16px
        height 12px
        position absolute
        top 15px
        right 20px
        transform rotate(90deg)
    .j_right
      flex 36.15%
      height 43px
      position relative
      right 5px
      bottom 5px
     
      background-color red
      border-radius 40px
      overflow hidden
      white-space nowrap
      margin-top 12px
      span
        position absolute
        top 13px
        left 11px
        font-size 18px
        // padding 0px 22px
        color #fff
        font-weight 700
        em
          font-weight 500
          font-size 18px
          font-weight 500
  .shouchang
    width 100%
    background-color #fff
    position fixed                 
    left 0
    right 0
    bottom 0px
    display flex
    box-shadow 0 3px 3px #ebeaec
    border-top 1px solid #ebeaec
   
    height 56px
    .left
      flex 18.76%
      margin-left 15px
      margin-top 10px
      .icon-duigou
        border-radius 13.5px
        width 27px
        height 27px
        line-height 27px
        text-align center
        font-weight 700
        background-color red
        color #fff
        font-size 16px
        margin-right 1px
      & span:last-child
        font-size 15px 
    .right
      position absolute     
      top 8px
      right 15px
      & span:first-child
        line-height 27px
        // width 100px
        height 27px
        text-align center
        font-size 14px
        border-radius 30px
        padding 8px 16px
        border 1px solid #ccc
      & span:last-child
        line-height 27px
        // width 100px
        height 27px
        text-align center
        font-size 14px
        border-radius 30px
        padding 8px 16px
        border 1px solid #ccc
  .monnyshow
    position fixed
    bottom 0px
    left 0
    right 0
    height 409px
    background-color #fff
    padding 19px 19px 0px
    box-sizing border-box
    .h3
      position absolute
      top 21px
      left 173px
      
      >h3
        font-size 25px
        font-weight 700
        margin-right 131px
      .tuichu
        &:after
          width 28px
          height 28px
          background url('./img/退出.png') no-repeat left top/28px 28px
          content ''
          display inline-block
          position absolute
          top -1px
          right -16px
    .allmonnya    
      font-size 16px
      & span:first-of-type
        position absolute
        left 19px
        top 90px
      & span:nth-of-type(2)
        position absolute
        right 19px
        top 90px
    .allmonnyb 
      font-size 16px
      & span:first-of-type
        position absolute
        left 19px
        top 140px
      & span:nth-of-type(2)
        position absolute
        right 19px
        top 140px
    .youhui
      position absolute
      top 214px
      left 19px
      .left
        >p
          font-size 16px
          font-weight 700       
          margin-bottom 16px
        >span
          font-size 13px
          color #ccc
      .right
        position absolute
        top 0
        left 315px
        font-size 19px
        color red   
        white-space nowrap   
  .wrapper
    height 555px
    background-color #fff
    border-radius 10px 10px 0 0
    padding 16px 12px 19px
    box-sizing border-box
    position absolute
    bottom 0
    left 0
    right 0
    h3
      text-align center
      font-size 19px
      font-weight 700
    img
      width 14px
      height 17px
      position absolute
      top 17px 
      right 10px
    .item
      margin-top 30px
      margin-bottom 30px
      display flex
      >input
        width 24px
        height 24px
        margin-right 5px
        position relative
        top 9px
      >span
        font-size 16px  
        line-height 25px  
    .footer
      position fixed
      bottom 0
      width 412px
      line-height 47px
      background-color red
      text-align center
      border-radius 30px
      >span
        font-size 20px
        color #fff      
</style>
