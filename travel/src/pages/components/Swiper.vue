<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id" >
          <img  class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'HomeSwiper',
  props:{
    swiperList:Array
  },
  data(){
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay : 600,
        autoplayDisableOnInteraction: false
      },
    }
  },
  computed:{
    showSwiper(){
      return this.swiperList.length;
    }
  }

  // components: {
  //   swiper,
  //   swiperSlide
  //  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
  overflow:hidden
  height:0
  width:100%
  padding-bottom:32%
  .swiper-img
    width:100%
</style>