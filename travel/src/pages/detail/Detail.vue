<template>
  <div>
    <detail-banner ></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/Banner.vue'
import DetailHeader from '@/pages/detail/components/Header.vue'
// import axiox from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader
  },
  data(){
    return {
      // gallaryImgs:[]
    }
  },
  // methods:{
  //   getdetailInfo(){
  //     axios.get('/api/detail.json')
  //     .then(this.handleGetDrtailInfoSucc)
  //   },
  //   handleGetDrtailInfoSucc(res){
  //     if(res.ret&&res.data){
  //       this.gallaryImgs = res.data.gallaryImgs
  //     }
  //   }
  // }

}
</script>

<style lang="stylus" scoped>
.content
 height: 50rem
</style>


