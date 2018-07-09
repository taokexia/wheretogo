<template>
    <div class="city">
      <cityHeader :cites="cities"></cityHeader>
      <cityPosition :hot-cities="hotCities" class="city-position"></cityPosition>
      <div class="alphabet">
			  <div class="alphabet-list-wrap">
				  <alphabet-list filterStr="" :letter="currentLetter"></alphabet-list>
			  </div>
        <div class="alphabet-controller-wrap">
				  <AlphabetController :letterList="letterList" :letter.sync="currentLetter"></AlphabetController>
			  </div>
		  </div>
    </div>
</template>

<script>
import axios from 'axios'
import cityHeader from "./components/header"
import cityPosition from "./components/position"
import AlphabetList from "./components/alphabet-list"
import AlphabetController from "./components/alphabet-controller"
export default{
    components: {
        cityHeader,
        cityPosition,
        AlphabetList,
        AlphabetController
    },
    data() {
        return {
            cities: {},
            hotCities: [],
            currentLetter: 'B',
            letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
        }
    }
}
</script>

<style lang="stylus" scoped>
  .city
    display flex
    height 100%
    flex-direction column
  .city-position
    margin-top 78px
  .alphabet-list-wrap
    position relative
    width 100%
  .alphabet-controller-wrap 
    position fixed
    top 0
    right 0rem
    display flex
    align-items center
    height 100vh
    width 10%
  .alphabet-controller-component
    padding-top 112px 
  .alphabet
    flex 1
    display flex
  .alpahbet-list-wrap
    flex 1
</style>
