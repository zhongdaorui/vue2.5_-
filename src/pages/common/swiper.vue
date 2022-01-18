<template>
<div class="swiper-container" id="swiper1">
    <div class="swiper-wrapper" @click="goto('/yearday')">
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
   new Swiper('#swiper1',{
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
     pagination: {
    el: '.swiper-pagination',
  },
     loop:true,
   
   })
  },
  methods:{
    goto(targit){
      this.$router.push(targit)
    }
  }
}

</script>



<style lang="stylus" scoped>

 
.swiper-container
  width 410px
  height 169px
  border-radius 6px
  position absolute
  top 56px
  left 15px
  z-index 999999
  img
    width 100%
</style>