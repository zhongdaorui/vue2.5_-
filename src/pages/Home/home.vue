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
  }
}
</script>

<style lang="stylus" scoped>
div
  overflow-x hidden
  height 100%

  
</style>