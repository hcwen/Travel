<template>
  <div>
     <homeheader></homeheader>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  data () {
    return {

    }
    components:{
      HomeHeader:HomeHeader
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>