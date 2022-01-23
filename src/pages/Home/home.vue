<template>
<div>
  <hea-der/>
  <jd-fastp/>
  
</div>

</template>

<script>
import HeaDer from './components/header.vue'
import JdFastp from './components/jdfastp.vue'
export default {
  components:{
    HeaDer,
    JdFastp
  },
  mounted(){
     this.$store.dispatch('getshagoods')
  }
}
</script>

<style lang="stylus" scoped>
div
  overflow-x hidden
  height 100%

  
</style>