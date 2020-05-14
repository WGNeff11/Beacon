<template>
		<div id="landing-div">
      <v-container>
        <v-row align-center>
          <v-col xs-12 class="text-center intro">
            <h1>Visualize Global Thought Patterns.</h1>
          </v-col>
        </v-row>
        <v-row align-center>
          <v-col sm-6 class="text-center short-blurb">
            <p> We provide the means to comprehend the global <br> sentiment on a singular topic.  Use it to see the attitudes <br>
          of different authorities and people around the world.</p>
          </v-col>
        </v-row>
      </v-container>
      <!-- <div class="vertical-divider"></div> -->
      <!-- <v-row class="divider">
        <v-col></v-col>
      </v-row> -->
      <dynamic-tweets></dynamic-tweets>
      <!-- <div class="vertical-divider"></div> -->
      <case-chart></case-chart>
      <v-row align-center class="row-contain">
        <v-col cols="2" class="col-contain">
          
            <!-- <v-divider class="divide"></v-divider> -->
            <hr/>
        </v-col>
      </v-row>
      <experts></experts>
      <!-- <sentiment-graph></sentiment-graph> -->
      <div class="vertical-divider"></div>
      <!-- <sentiment-graph></sentiment-graph> -->
      <v-row>
        <v-col>
          <div class="unsure">
            <h1> Coming Soon</h1>
          </div>
        </v-col>
      </v-row>
      <!-- <v-row>
        <div class="bottom-padding"></div>
        
      </v-row> -->
    </div>
</template>



<script>
  import DynamicTweets from "@/components/tweets/DynamicTweets.vue"
  // import GeoChart from "@/components/GeoChart.vue"
  import CaseChart from "@/components/geo_charts/LandingGeoChart.vue"
  import Experts from "@/components/experts/Experts.vue"
  // import SentimentGraph from "@/components/graphs/SentimentGraph.vue"
  export default {
    name: "Landing",
    components: {
      'dynamic-tweets': DynamicTweets,
      // GeoChart,
      'case-chart': CaseChart,
      'experts': Experts,
      // 'sentiment-graph': SentimentGraph

    }
  }

</script>

<style scoped>
  .divider {
    max-height: 30px;
    border-bottom: 1px solid lightgray;
    
  }
  .intro {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 300%;
    color: #2D2D2D;
  }
  .bottom-padding  {
    background-color: white;
    padding-bottom: 100px;
  }
  .unsure {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2D2D2D;
    font-size: 40pt;
    color: #F8F8F8;
    min-height: 500px;
  }

  .short-blurb {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 170%;
    color: #2D2D2D;

  }

  .landing-div {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-left: 20%;
    overflow-y: auto;
  }

  /* .shrink-width { */
    /* height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; */
    /* max-width: 10%; */
  /* } */

  .row-contain {
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: flex-end;
    padding-top:4%;
    margin-bottom: -2%;
  }
  /* .divide {
    min-width: 10%;
  } */

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-bottom: 3px solid #424242;
    margin: 1em 0;
    padding: 0;
}


  

</style>