<template>
  <div class = "search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input"/>
  </div>
</template>

<script>
export default {
  name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
.search
  height:.52rem
  padding:0 .1rem
  background-color:#00bcd4
  .search-input
    width:100%
    height:.42rem
    line-height:.42rem
    text-align:center
    border-radius:.06rem
    color:#666
</style>
