<template>
  <div>
    <detail-banner ></detail-banner>
  </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/Banner.vue'
// import axiox from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner
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

</style>


