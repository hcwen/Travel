<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" alt="景点门票" style="opacity: 1;">
          <p class="icon-desc">{{item.name}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'HomeIcons',
  data(){
    return {
      ListIcons:[
        {id:'0001',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",name:"景点门票"},
        {id:'0002',iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",name:"一日游"},
        {id:'0003',iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",name:"深圳必游"},
        {id:'0004',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",name:"海洋馆"},
        {id:'0005',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",name:"动植物园"},
        {id:'0006',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",name:"海洋馆"},
        {id:'0007',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png",name:"世界之窗"},
        {id:'0008',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/e7/d108f17143b40f02.png",name:"3月特惠"},
        {id:'0009',iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/e7/d108f17143b40f02.png",name:"4月特惠"}
      ],
      swiperOption :{
       pagination: '.swiper-pagination',
       loop:true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed:{
        pages () {
          const pages = []
            this.ListIcons.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                  pages[page] = []
                }
                pages[page].push(item)
            });
            return pages
        }
   }
}
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-wrapper
    height 0
    padding-bottom 50%
.icons
  overflow:hidden
  height:0
  width:100%
  padding-bottom:50%
  .icon
    position:relative
    overflow:hidden
    float:left
    width:25%
    padding-bottom:25%
    .icon-img
      position :absolute
      top:0
      left:0
      right:0
      bottom .44rem
      box-sizing:border-box
      padding: .1rem
      .icon-img-content
        display :block
        margin :0 auto
        height:100%
    .icon-desc
      position:absolute
      left:0
      right:0
      bottom:0
      height:.70rem
      line-height:1.44rem
      text-align:center
</style>
