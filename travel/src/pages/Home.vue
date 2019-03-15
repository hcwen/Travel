<template>
  <div >
     <home-header></home-header>
     <home-swiper :swiperList = "swiperList"></home-swiper>
     <home-icons :iconList = "iconList"></home-icons>
     <home-recommend :recommendList = "recommendList"></home-recommend>
     <home-weekend :weekendList = "weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeSwiper from '@/pages/components/Swiper.vue'
import HomeHeader from '@/pages/components/Header.vue'
import HomeIcons from '@/pages/components/Icons.vue'
import HomeRecommend from '@/pages/components/Recommend.vue'
import HomeWeekend from '@/pages/components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
   computed:{
     ...mapState({
      currentCity:'city'
    })
  },
  components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city=' + this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
     if(res.ret && res.data){
       this.city = res.data.city
       this.swiperList = res.data.swiperList
       this.iconList = res.data.iconList
       this.recommendList = res.data.recommendList
       this.weekendList = res.data.weekendList
     }
     console.log(res)
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity!==this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>