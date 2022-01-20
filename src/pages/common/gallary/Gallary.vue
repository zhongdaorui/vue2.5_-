<template>
  <div class="container" @click="handleGallaryClick">
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item,index) of list" :key="index">
          <img :src="item" alt="">
        </div>
      </div>
    </div>
    -->
    <!-- <div class="swiper-pagination" ></div> -->


    <swiper :list="list"/>
  </div>
</template>


<script>

import swiper from '../swiper/Swiper.vue'
export default {
  props:{
    list:Array
  },
   components:{
     swiper
  },
  methods:{
    handleGallaryClick(){
      this.$emit('close')
    }
  },
  
 
    
   
   }
  

</script>


<style lang="stylus" scoped>
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #fff
  // .swiper-container
  //   height: 0
  //   width: 100%
  //   padding-bottom: 100% 
  //   img
  //     width: 100% 

</style>