<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'HomeSwiper',
  data(){
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      },
      swiperList:[
        {
        id:'0001',
        imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/892f011c3b7bd6815b460c659acc5651.jpg_750x200_e2242cfb.jpg"
      },{
        id:'0002',
        imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/700528b360c39d630dda13930a92a1a6.jpg_750x200_80f6150c.jpg"
      }]
    }
  },
  components: {
    swiper,
    swiperSlide
   }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
  overflow:hidden
  height:0
  width:100%
  padding-bottom:31.25%

  .swiper-img
    width:100%




</style>