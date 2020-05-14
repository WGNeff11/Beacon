<template>
	<v-container fluid class="content-contain">
		<v-card  outlined>
      <!-- max-width="60%" -->
			<GChart 
			type="ScatterChart"
			:data="getSentimentFavorites"
			:options="chartOptions">
		</GChart>

	</v-card>

	</v-container>

	
</template>
<script>
	import {mapActions, mapGetters} from "vuex"
	export default {
		name: 'ExpertScatterPlot',
		data() {
			return {
				chartOptions: {
					title: 'Sentiment By Favorite Count',
          subtitle: '',
          height: '500px',
          width: '600px',
					vAxis: {
						title: 'Sentiment',
						gridlines: {
							color: 'transparent'
						}
					},
					hAxis: {
						title: 'Favorite Count',
						gridlines: {
							color: 'transparent'
            },
            scaleType: 'log',
            // textPosition: 'in'
            slantedText: false,
					},
					legend: {
						position: 'none'
					}, 

				}
			}
		},
		computed: {
			...mapGetters(["getSentimentFavorites"])
		},
		methods: {
			...mapActions(["fetchSentimentFavorites"])

		},
		created() {
			this.fetchSentimentFavorites()
		}
		
	}
</script>

<style lang="scss" scoped>
	.content-contain {
		display: flex;
		justify-content: center;
		// min-width: 1500px;
		min-height: 100%;
	}

	</style>