<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) of list" :key="index">
          <img :src="item" alt="">
        </div>
    </div>
    <div class="swiper-pagination" ></div>
</div>  
</template>


<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props:{
      list:Array
  },
    mounted(){
   new Swiper('.swiper-container',{
    // autoplay: {
    // delay: 2000,
    // stopOnLastSlide: false,
    // disableOnInteraction: true,
    // },
    paginationType: 'fraction',
					observeParents: true,
					observer: true,
 
     loop:true,
   
   })
  },

  
}
</script>


<style lang="stylus" scoped>
 .swiper-container
    height: 0
    width: 100%
    padding-bottom: 100% 
    img
      width: 100% 



</style>