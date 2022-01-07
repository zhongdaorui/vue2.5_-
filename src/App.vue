<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './pages/common/Footerguide.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>

</style>>


