<template>
  <v-container fluid class="content-background">
    <div class="chart-contain">
          <GChart
            type="GeoChart"
            :settings="{packages: ['geochart'], mapsApiKey: myMapsApiKey}"
            :data="getDeathsPerState"
            :options="{
              region: 'US',
              displayMode: 'regions',
              resolution: 'provinces',
              colorAxis: {colors: [ '#D2C9ED',  '#9991B2', '#4D4166', '#281B3F', '#1B1326'], maxValue: secondMost},
              datalessRegionColor: '#7F7F7F',
              legend: 'none',
              title: 'US Death Toll For Each State'
              }">
            </GChart>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'US-Death-Toll',
  data() {
    return {
      myMapsApiKey: "AIzaSyDwqRMLHyxLLTPdFfqOf7hbEAK5At9Weh4"
    }

  },
  computed: {
    ...mapGetters(['getDeathsPerState']),
    secondMost: function() {
      if(this.getDeathsPerState[5] && this.getDeathsPerState[5][1]) {
        return this.getDeathsPerState[5][1]
      }
      else {
        return 3000
      }
    }

  },

}
</script>

<style scoped>
  
  .content-background {
      min-width:100%;
			/* padding-left:-5%;
			margin-left:-5%;  */
      max-height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .chart-contain {
			max-width: 90%;
      /* padding-left: 5%;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      align-items: center; */

    }
    .descriptors {
      align-content: center;
    }
</style>