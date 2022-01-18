<template>
<div>
  <div class="pbc"></div>
  <div class="warp">
    <div class="bc">
    <div class="header_input">
        <span class="iconfont icon-caidan"></span>
        <div class="input" @click="goto('/search')">
          <div class="jd"></div>
          <span class="iconfont icon-fangdajing"></span>
          <span class="inner">dell台式机</span>
        </div>
        <router-link :to="userinfo.username? '/personal':'/denglu'" class="ispersonal" active-class="ccc">
          <div  v-if="userinfo.username" class="iconfont icon-gerenyonghutouxiang2"></div> 
          <div class="button" v-else>登录</div> 
        </router-link>
        
    </div>  
    <swiper :list=" imgarr">
    </swiper> 
    <iconlist/>
  
    
  </div>
</div>
</div>
</template>

<script>
import iconlist from './iconlist.vue'
import swiper from '../../common/swiper.vue'
import {mapState} from 'vuex'

export default {
  data(){
    return{
       imgarr:['//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/214309/30/9926/212128/61d3a663E061f9640/09ab0fd159edda28.jpg!cr_1053x420_4_0!q70.jpg',
    '//m15.360buyimg.com/mobilecms/jfs/t1/19443/1/18105/145107/61d9181dEfe5ef64e/233097eae6cb302c.jpg!cr_1125x449_0_166!q70.jpg',
    '//m15.360buyimg.com/mobilecms/jfs/t1/166485/27/24897/191752/61e0f27cE20fa3b16/ea7338be79f26899.png!cr_1053x420_4_0!q70.jpg',
    '//m15.360buyimg.com/mobilecms/jfs/t1/174441/33/26579/157326/61e381baE127e4c37/c8f8612a6045e1f5.jpg!cr_1125x449_0_166!q70.jpg',
    '//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/214309/30/9926/212128/61d3a663E061f9640/09ab0fd159edda28.jpg!cr_1053x420_4_0!q70.jpg',
    '//m15.360buyimg.com/mobilecms/jfs/t1/143500/28/26035/80894/61d54fffE1a196764/ec06073a338c78eb.jpg!cr_1053x420_4_0!q70.jpg'],
  
    }
   
  },
  computed:{
    ...mapState(['userinfo'])
  },
  
  
 
  components:{
    swiper,
    iconlist
  }
  
}
</script>

<style lang="stylus" scoped>
.pbc
  position absolute
  top 0
  left 0
  right 0
  height 150px
  background-color #c82519 
.warp
  padding 8px 15px  
  background-color #f6f6f6
  .bc
    width 100%
    .header_input
      width 100%
      height 35px
      line-height 35px
      margin-bottom 200px
      display flex
      .icon-caidan
        font-size 22px !important
        color #fff
        font-weight 700
        z-index 3
       
      .input
        width 344px
        line-height  32px
        background-color #fff
        margin 0 14px
        border-radius 10px
        position relative
        text-align center
        .jd
          position absolute
          left 20px
          top 10px
          background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeCAMAAABpA6zvAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTOo8Puo7Peo7Pek7Peo7Pe0/Qek7PvE+SP9SUuo7Peo7Peo7Pus8P+o7Peo7Pek7PZSxd20AAAAQdFJOUwBV8eG+hyGkEQbGmWs/rthNA0r+AAAA5klEQVQ4y63T0RaDIAgAUEDRUjP//2u3CI/T1vJhvM3uVBAANGx5xwLgiwSZ3TI6uMYANSyuc7AUs03CUvgHRMTEflcZ76FezDGJTE/wTYNI9whhDePhNxAcDVveQWDJbgK6Y8FPQDBH2WdgPlZmYNQvj5D7tP8Ap4+2s8lQX56g4AK34bGPshJ8gbl/wrXoASOUDanlgvVFB3g2T5sGZ2on9xCp23BJ8tusPVzw7O/zhuxtHSIZDYGRo891WUemjeVZgsu4kmY8ju8Ifb2f/i3WV+/gzq0Zgs0xba0eHCSsj4zLR91f1fAfiWsqzlEAAAAASUVORK5CYII=") no-repeat
          width 20px
          height 15px
          background-size: 20px 15px;
          &:after
            content ''
            display inline-block
            width 1px
            height: 20px;
            background-color: #ccc;
            position absolute
            top -2px
            right -8px
        .icon-fangdajing
          position absolute    
          top 1px
          left 55px
          font-size 22px
          color #c0c0c0
        .inner
          font-size 14px
          color #c0c0c0 
      .ispersonal
      .ccc
        // color #fff
        .button
          font-size 18px
          color #fff
          font-weight 500
          z-index 4
          position relative
          white-space nowrap
        .icon-gerenyonghutouxiang2
          font-size 25px      
          position relative       
          color #ccc
          // background-color #ccc
  
    
   
  .twoqiuqiu
    text-align center 
    margin-bottom 30px
    ul
      display flex
      margin-left 186px  
      li
        width 6px
        height 6px
        border-radius 6px
        background-color #fff
        margin-right 3px
      li:nth-child(1)  
        background-color red 

</style>