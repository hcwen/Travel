<template>
<div>
  <div class="banner" @click="grallaryClick">
    <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
    <div class="banner-info">
      <div class="banner-title">
        大连圣亚海洋世界(AAAA景区)
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe674;</span>39
      </div>
    </div>
  </div>
  <fade>
    <common-grallary
    :imgs="imgs"
    v-show="grallaryImg"
    @close="handGarrlaryClick"
    ></common-grallary>
  </fade>
</div>
</template>

<script>
import CommonGrallary from '@/common/grallary/Grallary'
import Fade from '@/common/Fade/Fade'
export default {
  name:'DetailBanner',
  props:{
    gallaryImgs:Array
  },
  data(){
    return {
      imgs:["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"],
      grallaryImg:false
    }
  },
  components:{
    CommonGrallary,
    Fade
  },
  methods:{
    grallaryClick(){
      this.grallaryImg = true
    },
    handGarrlaryClick(){
      this.grallaryImg = false
    }

  }
}
</script>

<style lang="stylus" scoped>
.banner
  position : relative
  overflow:hidden
  height:0
  padding-bottom:55%
  .banner-img
    width:100%
  .banner-info
    display:flex
    position:absolute
    right:0
    left:0
    bottom:0
    line-height:.6rem
    color:#fff
    background-image : linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    .banner-title
      flex:1
      font-size:.32rem
      padding:0 .2rem
    .banner-number
      height:.32rem
      line-height:.32rem
      margin-top:.14rem
      padding:0 .4rem
      border-radius:.2rem
      background :rgba(0,0,0,.8)
      font-size:.24rem
      .banner-icon
        font-size:.24rem
</style>

