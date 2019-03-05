<template>
  <div >
     <HomeHeader></HomeHeader>
     <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeSwiper from '@/pages/components/Swiper.vue'
import HomeHeader from '@/pages/components/Header.vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components:{
      HomeHeader,
      HomeSwiper
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>