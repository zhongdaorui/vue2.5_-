<template>
  <div>
    <div class="div">
      <span @click="showarealist">地区选择</span>
      <p v-for="(item,index) in list" :key="index">{{item}}</p>
      <van-area title="标题" :area-list="areaList" @confirm="queding" v-show="showarea"/>
    </div>
    <div class="zhezao">
      <!-- <van-button class="click" type="primary" text="显示遮罩层" @click="show = true" /> -->
      <van-overlay :show="show" @click="showarealist"/>
    </div>
   
  </div>
</template>

<script>
import { Area,Overlay,Button } from 'vant'
import { areaList } from '@vant/area-data';
export default {
  data(){
    return{
      areaList,
      showarea:false,
      list:[],
      show: false
      
    }
  },
  methods:{
    queding(value){
      this.showarea =!this.showarea
      const result = []
       value.map(item=>{
        let curKey = Object.keys(item) 
         result.push(item[curKey[1]])
    })
      console.log(value)
      this.list = result
      this.show = !this.show
    
    },
    showarealist(){
      this.showarea =!this.showarea
      this.show = !this.show
    },
    
 
},
 components:{
      [Area.name]:Area,
      [Overlay.name]:Overlay,
      [Button.name]:Button
  }
}
</script>


<style lang="stylus" scoped>
.div
  position fixed
  top 159px
  left 0
  right 0
  bottom 0
  background-color #fff
  z-index 2
  border-radius 9px 9px 0 0
  >span
    width 100%
    display block
    text-align center
    margin-top 50px
    font-size 16px
  p
    font-size 14px
    text-align center
    
    margin 30px 0px
.zhezao
  .click
    position fixed
    bottom 0
    left 0
    right 0
    width 100%
    line-height 43px
    height 43px
</style>