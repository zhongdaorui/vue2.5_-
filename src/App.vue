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
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  computed:{
    ...mapState(["address"])
  },
  mounted(){
    this.getaddress()
  },
  methods:{
    ...mapActions(["getaddress"])
  }
 
}
</script>

<style lang="stylus" scoped>



 

</style>>


