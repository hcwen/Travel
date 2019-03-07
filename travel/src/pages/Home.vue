<template>
  <div >
     <home-header></home-header>
     <home-swiper></home-swiper>
     <home-icons></home-icons>
     <home-recommend></home-recommend>
     <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeSwiper from '@/pages/components/Swiper.vue'
import HomeHeader from '@/pages/components/Header.vue'
import HomeIcons from '@/pages/components/Icons.vue'
import HomeRecommend from '@/pages/components/Recommend.vue'
import HomeWeekend from '@/pages/components/Weekend.vue'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>