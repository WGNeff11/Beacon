<template>
  <v-container fluid class="content-background">
		<div class="table-contain">
			<v-row>
        <v-col cols="4">
          <DynamicTweetDescription></DynamicTweetDescription>
        </v-col>
			<v-col cols="8">
				<v-card>
					<v-row align-center>
						<v-col>
							<div class="table_header" id="negative">
								<h3> Negative Sentiment</h3>
							</div>
						</v-col>
						<v-col>
							<div class="table_header" id="positive">
								<h3>Positive Sentiment</h3>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-card flat class="big-card">
                <lazy-component v-for="tweet in negativeTweets" :key="tweet.status_id">
                  <v-card
                    flat
                  >
                    <v-row class="tweet-row">
                      <v-col>
                        <v-card-title>
                          <img class="thumbnail" :src=tweet.profile_image_url>
                          <span class="title">{{ tweet.name }}</span>
                        </v-card-title>
                        <v-card-subtitle>
                          <span class="subtitle">@{{tweet.screen_name}}</span>
                        </v-card-subtitle>
                        <v-card-text class="tweet">
                          {{ tweet.text }}
                        </v-card-text>
                      </v-col>
                    </v-row>
                    <v-col class="card-row">
                      <ul class="flex-container space-around">
                        <li class="flex-item">
                          <v-icon>
                            mdi-twitter-retweet
                          </v-icon>
                          <span class="count"> {{tweet.retweet_count }}</span>
                        </li>
                        <li class="flex-item">
                          <v-icon>
                            mdi-heart-outline
                          </v-icon>
                          <span class="count"> {{tweet.favorite_count }}</span>
                        </li>
                      </ul>
                      </v-col>
                    </v-card>
                  </lazy-component>
							</v-card>
						</v-col>
						<v-divider vertical></v-divider>
						<v-col>
							<v-card flat class="big-card">
								<lazy-component v-for="tweet in positiveTweets" :key="tweet.status_id">
									<v-card
										class="single-tweet"
										flat
									>
									<v-row class="card-row tweet-row">
										<v-col>
											<v-card-title>
												<img class="thumbnail" :src=tweet.profile_image_url>
												<span class="title">{{ tweet.name }}</span>
											</v-card-title>
											<v-card-subtitle>
												<span class="subtitle">@{{tweet.screen_name}}</span>
											</v-card-subtitle>
											<v-card-text class="tweet">
												{{ tweet.text }}
											</v-card-text>
										</v-col>
									</v-row>
									<v-col class="card-row">
										<ul class="flex-container space-around">
											<li class="flex-item">
												<v-icon>
													mdi-twitter-retweet
												</v-icon>
												<span class="count"> {{tweet.retweet_count }}</span>
											</li>
											<li class="flex-item">
												<v-icon>
													mdi-heart-outline
												</v-icon>
												<span class="count"> {{tweet.favorite_count }}</span>
											</li>
										</ul>
										</v-col>
									</v-card>
								</lazy-component>
							</v-card>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
		</div>
  </v-container>
</template>

<script>
import DynamicTweetDescription from '@/components/tweets/DynamicTweetDescription.vue'
import {mapActions, mapGetters} from "vuex"

export default {
  name: "DynamicTweets",
  components: {
    DynamicTweetDescription,
  },
	computed: {
    ...mapGetters(["positiveTweets", "negativeTweets", "sentimentVals"]),
  },
	
  methods: {
    ...mapActions(['fetchTweets'])
  },
  created() {
    this.fetchTweets()
  }
	// mounted() {
	// 		const path = "http://localhost:8081/tweets_formatted"
	// 			axios({
	// 				method: "GET",
	// 				url: path,
	// 			})
	// 			.then(response => (this.tweets = response.data))

  //   },
	}
</script>

<style scoped>
		@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i&display=swap'); 
		.thumbnail{
			max-height: 20px;
			max-width: 20px;
			border-radius: 50%;
		}
		.count {
			font-size: 10pt;
		}
		.flex-container {
			padding: 0;
			margin: 0;
			list-style: none;
			display: flex;
		}
		.space-around { 
			justify-content: space-around; 
		}
		.card-row {
			padding-top:-5;
			border-bottom: 5px, solid, black ;
			/* margin-bottom: 3; */
		}
		.tweet {
			padding-bottom: 0;
		}
		.single-tweet {
			border-bottom: 3px, black;
		}
		.tweets-holder {
			max-height: 100px;
		}
		.content-background {
			/* max-width: 80%; */
      min-width:110%;
      display: flex;
      justify-content: center;
      align-items: center;
			padding-left:-5%;
			margin-left:-5%; 
			max-height: 40%;
			background-color: #00ACEE;
    }
    
		.table-contain {
			max-width: 80%;
			/* padding-left: 5%;
			margin-left: 5%; */

		}
		.divider {
    max-height: 30px;
    border-bottom: 1px solid lightgray;
    }
		.big-card {
			max-height: 500px;
			overflow-y: auto;

		}
		.table_header {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'Playfair Display', serif;
			font-size: 20pt;

		}
		#positive {
			color: #41EA96;
		}
		#negative {
			color: #FF6B6B;
		}
		
    .scroller {
      height: 100%;
    }

</style>