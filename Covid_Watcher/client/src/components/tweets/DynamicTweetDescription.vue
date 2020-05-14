<template>
  <div>
      <v-row>
        <v-col>
          <div class="table-describe">
            <h1>Understand global mood through twitter.</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="describe-sub">
            <p>We pull tweets and categorize them based on the sentiment suggested by their prose. Our sentiment value ranges from -1 to 1, feel free to play with those sentiment values below. </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-range-slider color="#F8F8F8" v-model=sentimentValues min=-1 max=1 step=0.01 track-color="#00ACEE"></v-range-slider>
      </v-row>
      <v-row>
        <v-col>
          <div class="describe-sub-number">
            <span v-text="sentimentValues[0]"></span>
          </div>
        </v-col>
        <v-col>
          <div class="describe-sub-number">
            <span v-text="sentimentValues[1]"></span>
          </div>
        </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="describe-sentiment-number">
          <p>Negative Value</p>
        </div>
      </v-col>
      <v-col>
        <div class="describe-sentiment-number">
          <p>Positive Value</p>
        </div>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "DyanamicTweetDescription",
  computed: {
    // ...mapGetters(["sentimentVals"]),
  
    sentimentValues: {
      get() {
        return this.$store.state.LandingTweets.sentimentVals
      },
      set(sentimentValues) {
        // this.$store.state.LandingTweets.commit('updateSentimentValues', sentimentValues)
        // console.log(sentimentValues)
        this.updateSentimentVals(sentimentValues)

      }
    }
  },
  methods: {
    ...mapActions(["updateSentimentVals"])
  }
}
</script>

<style scoped>
    .table-describe {
			height: 100%;
			display: flex;
			/* align-items: center; */
			/* justify-content: center; */
			font-family: 'Fjalla One', sans-serif;
      font-size: 150%;
      line-height: 230%;
			/* text-align: center; */
			color: #f8f8f8;
		}
		.describe-sub {
			height: 100%;
			display: flex;
			/* align-items: center; */
			/* justify-content: center; */
			font-family: 'Playfair Display', serif;
			font-size: 120%;
			/* text-align: center; */
      color: #f8f8f8;
      /* padding-left: 15%; */

		}
		.describe-sub-number {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'Playfair Display', serif;
			font-size: 200%;
			text-align: center;
			color: #f8f8f8;
    }
    .describe-sentiment-number {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'Playfair Display', serif;
			font-size: 150%;
			text-align: center;
			color: #f8f8f8;

    }


</style>