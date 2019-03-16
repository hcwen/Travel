<template>
    <ul class="list">
      <li class="item"
       v-for="item of letters"
       :key="item"
       :ref="item"
       @click="handleLetterClick"
       @touchstart.prevent="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       >
       {{item}}
       </li>
    </ul>
</template>

<script>
export default {
  props:{
    cities:Object
  },
  name:'CityAlphabet',
  data(){
    return{
      touchStatus:false
    }
  },
  computed: {
    letters(){
      const letters = []
      for(let i in this.cities){
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick(e){
      this.$emit("change",e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart(){
      this.touchStatus = true
    },
    handleTouchMove(e){
      if(this.touchStatus){
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY-109
        const index = Math.floor((touchY-startY)/20)
        console.log(index)
        if(index >= 0 && index < this.letters.length){
            this.$emit('change',this.letters[index])
        }
      }
    },
    handleTouchEnd(){
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.list
  display:flex
  flex-direction:column
  justify-content:center
  position :absolute
  top:1.58rem
  right:0
  bottom:0
  width:.4rem
  .item
    line-height:.4rem
    text-align:center
    color:#00bcd4
</style>
