<template>
  <div>
    <detail-banner ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/Banner.vue'
import DetailHeader from '@/pages/detail/components/Header.vue'
import DetailList from '@/pages/detail/components/List.vue'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data(){
    return {
      list:[]
      // gallaryImgs:[]
    }
  },
  methods:{
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }

}
</script>

<style lang="stylus" scoped>
.content
 height: 50rem
</style>


