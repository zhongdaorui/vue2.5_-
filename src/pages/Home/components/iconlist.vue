<template>
   <div class="swiper-container" id="swiper2"  @click="goto('/chaoshi')">
      <div class="swiper-wrapper" >
        <li class="swiper-slide" v-for="(page,index) in pages" :key="index">
          <div class="inner" v-for="item in page" :key="item.id">
            <img :src="item.imgurl" alt="">
            <span>京东超市</span>
          </div>
         
        </li>   
      </div>
     
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data(){
    return{
      iconlist:[{
      id:1,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
    {
       id:2,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:3,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:4,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:5,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:6,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:7,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:8,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:9,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:10,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:11,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
     {
       id:12,
      imgurl:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg'
    },
    ]
    }
  },
  methods:{
    goto(target){
      this.$router.push(target)
      console.log('鼠标点击了')
  }
  },
   mounted(){
     new Swiper('#swiper2',{
       loop:true,
           
  })
   
},
    computed:{
    pages(){
       const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
 
  
}

</script>


<style lang="stylus" scoped>
.swiper-container
    margin-bottom 50px
    .swiper-wrapper
      .swiper-slide
        display flex
        flex-flow row wrap
        .inner
          margin-right 30px
          font-size 12px
          display flex
          flex-flow column 
          align-items center  
          img
            width 50px
            height 43px
          span
            padding-top 12px 
            padding-bottom 15px
            font-size 14px    
        & div:nth-child(5n)
          margin-right 0
  
</style>