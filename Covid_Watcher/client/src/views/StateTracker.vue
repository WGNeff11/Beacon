<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h1 class="header">US State Tracker</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <bubble-chart></bubble-chart>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <geo-charts></geo-charts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import bubbleChart from "@/components/graphs/BubbleChart.vue"
  import GeoCharts from "@/components/geo_charts/GeoCharts.vue"
  import {mapActions, mapGetters} from "vuex";
  export default {
    name: 'US-Total-Cases',
    data() {
      return {
        items: ["Case Count", "Death Toll", "Negative Tests"],
        myMapsApiKey: "AIzaSyDwqRMLHyxLLTPdFfqOf7hbEAK5At9Weh4",
        selected: [
          {id: 1, label: 'Case Count'},
          {id: 2, label: 'Death Toll'},
          {id: 3, label: 'Negative Tests'}
          ]
      }

    },
    components: {
      'bubble-chart': bubbleChart,
      'geo-charts': GeoCharts
    },
    computed: {
      ...mapGetters(['getPositiveCasesPerState']),
      secondMost: function() {
        if(this.getPositiveCasesPerState[3] && this.getPositiveCasesPerState[3][1]) {
          return this.getPositiveCasesPerState[3][1]
        }
        else {
          return 21000
        }
      }

    },
    methods: {
      ...mapActions(['fetchCases'])
    },
    created() {
      this.fetchCases()
    }

  }
</script>

<style>
  .header {
    font-family: 'Fjalla One', sans-serif;
		font-size: 40px;
  }
</style>