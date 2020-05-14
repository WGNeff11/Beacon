<template>
  <GChart
    type="BubbleChart"
    :data="getBubbleData"
    :options="chartOptions"
  >
  </GChart>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  data() {
    return {
      chartOptions:{
        colorAxis: {colors: ['#E63946', '#CC4841','#CC9592', '#F8F8F8', '#49CC58']},
        hAxis: {
          title: "Sentiment",
          scaleType: 'log'
        },
        vAxis: {
          title: "Fatality Rate",
          scaleType: 'log'

        },
        bubble: {
          textSize: {
            fontSize: 11
          }
        }
      }
    }
  },
  name: "BubbleChart",
  methods: {
    ...mapActions(["fetchBubbleData"])
  },
  computed: {
    ...mapGetters(["getBubbleData"])
  },
  created() {
    this.fetchBubbleData()
  }

}
</script>

<style>

</style>