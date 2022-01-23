<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './pages/common/Footerguide.vue'
import {reqGoods,reqshaGoods} from './api/index'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  // async mounted(){
  //   const result= await reqGoods();
  //   console.log(result.data)
  //   const shagoods= await reqshaGoods();
  //    console.log(shagoods.data)
  // }
}
</script>

<style lang="stylus" scoped>



 

</style>>


