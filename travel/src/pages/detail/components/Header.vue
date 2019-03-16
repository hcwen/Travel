<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont back-icon header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
      >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  data(){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      const top = document.documentElement.scrollTop
      if(top>60){
        let opacity = top/140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
     window.removeEventListener('scorll',this.handleScroll)
  }//对全局事件的解绑

}
</script>

<style lang="stylus" scoped>
.header-abs
  position:absolute
  left:.2rem
  top:.2rem
  width:.8rem
  height:.8rem
  line-height:.8rem
  border-radius:.4rem
  text-align:center
  .header-abs-back
    color:#eee
    font-size:.4rem
.header-fixed
  z-index :99
  position:fixed
  top:0
  left:0
  right:0
  height: .86rem
  line-height :.86rem
  text-align:center
  color:#fff
  background-color:#00bcd4
  font-size:0.32rem
  .header-fixed-back
    position: absolute
    top:0
    left:0
    width:.64rem
    text-align:center
    font-size:.4rem
    color:#fff
</style>

