<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handletLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/pages/city/components/Header'
import CitySearch from '@/pages/city/components/Search'
import CityList from '@/pages/city/components/List'
import CityAlphabet from '@/pages/city/components/Alphabet'
import axios from 'axios'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/api/city.json')
      .then(this.handleGetCtiyInfoSucc)
    },
    handleGetCtiyInfoSucc(res){
      res = res.data
     if(res.ret && res.data){
       const data= res.data
       this.cities = data.cities
       this.hotCities = data.hotCities
     }
     console.log(res)
    },
    handletLetterChange(letter){
      this.letter = letter
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
