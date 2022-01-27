<template>
<div>
  <div class="liebiao" > 
    <header-top class="topbc" title="收货地址"/>
    <div class="item" v-for="(item,index) in  address" :key="index">
      <div class="top_di">{{item.name}} {{item.massageway}}</div>
      <div class="bottom_di">
        <div class="left">
          <span>默认</span>
          <span>{{item.nowarea}}</span>
          <span>{{item.detailarea}}</span>
        </div>
        <div class="right">
          <span  @click="editaddress(index)">编辑</span>
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
import {mapState} from 'vuex'
import HeaderTop from '../../common/home.vue'

export default {
  data(){
    return{
      showAddAdress:true
    }
  },
  components:{
    HeaderTop
  },
  computed:{
    ...mapState(["address"]),
    addressList(){
    // const result = []
    // const detailarealist =[]
    // const nowarealist = []
    // for (let item in this.address){
    // const detailarea =this.address[item].detailarea
    // const nowarea =this.address[item].nowarea
    // nowarealist.push(nowarea)
    // detailarealist.push(detailarea)
    
    //  }
    //  return nowarealist.concat(detailarealist)

    // let temp =[]
    // if(this.address&&this.address.length>0){
    //   this.address.map(res=>{
    //     temp.push(Object.assign({},res,{detailAddress: res.nowarea.replaceAll(" ","")+res.detailarea}))
    //   })
    //   console.log(temp)
    //   return temp
    // }else{
    //   return []
    // }
    // res.nowarea.join(" ")
    // let temp =[]
    // if(this.address&&this.address.length>0){
    //   this.address.map(res=>{
    //     temp.push(Object.assign({},res,{nowarea:res.nowarea.join("")}))
    //   })
    //   console.log(temp)
    //   return temp
    // }else{
    //   return []
    // }
  }
    
  },
  mounted(){
      
  },
  methods:{
    editaddress(target){
     
      this.$router.push({path:`/updatedizi/${target}`})
    }
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
      font-size 16px
      line-height 25px
      color $ziti
      width 353px
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
      top 60px
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