<template>
  <v-container fluid class="content-background">
    <div class="chart-contain">
      <v-row>
        <v-col cols="8">
        <div data-aos="fade-up" data-aos-duration=800 class="descriptors">
          <us-cases-chart></us-cases-chart>
        </div>
        </v-col>
        <v-col cols="4" align-center>
          <div data-aos="fade-down" data-aos-duration=800 class="descriptors">
            <v-row>
              <v-col>
                <div class="table-describe">
                  <h1>Find Your State.</h1>
                </div>
              </v-col>
            </v-row>
            <v-row align-center>
              <v-col>
                <div class="table-describe-sub">
                  <p> We use google geo-charts to provide a visual representation of the current circumstances in each state. 
                    This provides a geographical context to the situation as a whole. </p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";
import USCasesChart from "@/components/geo_charts/USCasesChart.vue"
export default {
  name: 'US-Total-Cases',
  data() {
    return {
      myMapsApiKey: "AIzaSyDwqRMLHyxLLTPdFfqOf7hbEAK5At9Weh4"
    }

  },
  components: {
    'us-cases-chart': USCasesChart
  },
  methods: {
    ...mapActions(['fetchCases'])
  },
  created() {
    this.fetchCases()
  }

}
</script>

<style scoped>
  .table-describe {
			height: 100%;
			display: flex;
			/* align-items: center;
			justify-content: center; */
			font-family: 'Fjalla One', sans-serif;
      font-size: 150%;
      color: #2D2D2D;
      
			/* text-align: center; */
  }
  .table-describe-sub {
			height: 100%;
			display: flex;
			align-content: center;
			/* justify-content: center; */
			font-family: 'Playfair Display', serif;
			font-size: 150%;
      /* text-align: center; */
      padding-left: 15%;
      color: #2D2D2D;

    }
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