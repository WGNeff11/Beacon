<template>
	<v-container>
		
			<div class="change-z">
				
				<v-row>
					<v-col cols="5">
						<h1 class="header">Expert Dashboard</h1>
					</v-col>
				</v-row>
		
				

			</div>
			<v-row>
					<v-col>
						<experts-dropdown></experts-dropdown>
					</v-col>
				</v-row>
			<v-row>
			</v-row>

			<v-row>
				<v-col>
					<expert-scatter-plot></expert-scatter-plot>
				</v-col>
				<v-col>
					<sentiment-graph></sentiment-graph>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<expert-tweets></expert-tweets>
				</v-col>
			</v-row>
		<!-- <v-row>
			<v-col class="d-flex" cols=12> -->
				<world-map></world-map>
			<!-- </v-col>
		</v-row> -->
	</v-container>
	
</template>
<script>
import sentimentGraph from "@/components/graphs/SentimentGraph.vue"
import expertsDropdown from "@/components/experts/ExpertDropdown.vue"
import worldMap from "@/components/geo_charts/WorldMap.vue"
import expertScatterPlot from "@/components/graphs/ExpertScatterplot.vue"
import expertTweets from "@/components/experts/ExpertTweets.vue"
export default {
	name: 'Charts',
	data() {
		return {
			drawer: true,
			items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
		}
	},
	components: {
		'sentiment-graph': sentimentGraph,
		'experts-dropdown': expertsDropdown,
		'world-map': worldMap,
		'expert-scatter-plot': expertScatterPlot,
		'expert-tweets': expertTweets
	}
}
</script>

<style>
	/* .spread {
		justify-content: space-between;
	} */

	.header {
		font-family: 'Fjalla One', sans-serif;
		font-size: 40px;
	}
	.v-select .dropdown-menu {
  display:block;
}
</style>