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
import {mapActions,mapState} from 'vuex'
//获取封装好的ajax请求
import {reqAddress}  from './api/index'
import {reqCategory}  from './api/index'

export default {
  name: 'App',
  components:{
    FooterGuide
  },
  computed:{
    ...mapState(["address"])
  },
  async mounted(){
    // this.getaddress()
    const list =await reqAddress ()
    console.log(list)

    const List = await reqCategory()
    console.log(List);


  },
  methods:{
    ...mapActions(["getaddress"])
  }
 
}
</script>

<style lang="stylus" scoped>



 

</style>>


