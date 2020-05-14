<template>
  <v-container fluid class="content-background">
    <div class="chart-contain">
      <v-row>
        <v-col cols="8">
        <div data-aos="fade-up" data-aos-duration=800 class="descriptors">
          <GChart
            type="GeoChart"
            :settings="{packages: ['geochart'], mapsApiKey: myMapsApiKey}"
            :data="chartData"
            :options="chartOptions">
            </GChart>
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
                  <p> We use google geo-charts to provide a visual representation of the overall sentiment in each area. 
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
export default {
  name: 'US-Sentiment',
  data() {
    return {
      chartData: [
          ['State', 'Select'],
          ['US-AL', 0],
          ['US-AK', 0],
          ['US-AR', 0],
          ['US-AK', -1],
          ['US-AZ', 0],
          ['US-CO', 0],
          ['US-DE', -0.34],
          ['US-FL', 0],
          ['US-HI', 0],
          ['US-KS', 0],
          ['US-KY', -0.56],
          ['US-MI', 0],
          ['US-MO', 0],
          ['US-MS', 0],
          ['US-MT', 0],
          ['US-NE', 0],
          ['US-NJ', .58],
          ['US-NM', 0],
          ['US-NY', -.34],
          ['US-OR', 0],
          ['US-PA', 1],
          ['US-TX', 0],
          ['US-UT', 0],
          ['US-VA', .9],
          ['US-WA', .7],
          ['US-WV', -.3],
          ['US-WY', .8],
      ],
      chartOptions: {
        region: 'US',
        displayMode: 'regions',
        resolution: 'provinces',
        colorAxis: {colors: ['#CC4841','#CC9592', '#F8F8F8', '#9BCCA1', '#49CC58']},
        datalessRegionColor: '#7F7F7F',
        chart: {
          title: 'US average sentiment for each state'

        }
        
      },
      myMapsApiKey: "AIzaSyDwqRMLHyxLLTPdFfqOf7hbEAK5At9Weh4"
    }
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