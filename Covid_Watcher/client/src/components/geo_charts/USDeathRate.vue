<template>
  <v-container fluid class="content-background">
    <div class="chart-contain">
          <GChart
            type="GeoChart"
            :settings="{packages: ['geochart'], mapsApiKey: myMapsApiKey}"
            :data="getDeathRatePerState"
            :options="{
              region: 'US',
              displayMode: 'regions',
              resolution: 'provinces',
              colorAxis: {colors: [ '#ED807C',  '#B25959', '#662B28', '#3F1610', '#260F0B']},
              datalessRegionColor: '#7F7F7F',
              legend: 'none',
              title: 'US Death Rate For Each State'
              }">
            </GChart>
    </div>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'US-Death-Rate',
  data() {
    return {
      myMapsApiKey: "AIzaSyDwqRMLHyxLLTPdFfqOf7hbEAK5At9Weh4"
    }

  },
  computed: {
    ...mapGetters(['getDeathRatePerState']),
    // secondMost: function() {
    //   if(this.getPositiveCasesPerState[3] && this.getPositiveCasesPerState[3][1]) {
    //     return this.getPositiveCasesPerState[3][1]
    //   }
    //   else {
    //     return 21000
    //   }
    // }

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