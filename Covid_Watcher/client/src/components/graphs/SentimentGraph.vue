<template>
	<v-container fluid class="content-contain">
		<v-card outlined>
			<!-- max-width="60%" -->
			<GChart 
			type="LineChart"
			:data="getSentimentDate"
			:options="chartOptions">
		</GChart>

	</v-card>

	</v-container>

	
</template>
<script>
	import {mapActions, mapGetters} from "vuex"
	export default {
		name: 'SentimentGraph',
		data() {
			return {
				chartData: [],
				chartOptions: {
					title: 'Average Sentiment by Week',
					subtitle: '',
					curveType: 'function',
					axes: {
						y: {
							Sentiment: {label: 'Sentiment'}
						}
					},
					vAxis: {
						title: 'Sentiment',
						gridlines: {
							color: 'transparent'
						}
					},
					hAxis: {
						title: 'Weeks Since Year Start',
						gridlines: {
							color: 'transparent'
						}
					},
					legend: {
						position: 'none'
					}, 

				}
			}
		},
		computed: {
			...mapGetters(["getSentimentDate"])
		},
		methods: {
			...mapActions(["fetchSentimentDate"])

		},
		created() {
			this.fetchSentimentDate()
		}
		
	}
</script>

<style lang="scss" scoped>
	.content-contain {
		display: flex;
		justify-content: center;
		// max-width: 90%;
		min-height:100%;
		z-index: -1;
	}

	</style>