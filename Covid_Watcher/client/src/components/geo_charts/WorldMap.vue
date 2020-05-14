<template>
	<div>
      <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height: 400px">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" :min-zoom="minZoom"></vl-view>

        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>


        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
        <div
          v-for="person in people"
          v-bind:key="person.name"
        >
          <div class="expert">
            <vl-feature :properties="{prop: 'value', prop2: 'value'}">
              <vl-geom-point :coordinates = "[person.long, person.lat]"></vl-geom-point>
            </vl-feature>
            <vl-overlay :position = "[person.long, person.lat]" >
              <template>
                <div class="overlay-content">
                  <v-img class="thumbnail" :src= "person.profile_image_url"></v-img>
                </div>
              </template>
            </vl-overlay>
          </div>
        </div>
      </vl-map>
    </div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: "worldMap",
		data () {
			return { 
				zoom: 2,
				minZoom: 2,
				center: [0, 0],
				rotation: 0,
				geolocPosition: undefined,
				overlayCoordinate: [30, 30],
				// people: [
				// 	{name: "Donald Trump", coordinates: [-77.07, 38.87], imgUrl: "http://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg"},
				// 	{name: "Joe Biden", coordinates: [-75.55, 39.72], imgUrl: "http://pbs.twimg.com/profile_images/1235244704859664385/oneP6BrA_normal.jpg"},
				// ]
				people: undefined
			}
		},
		mounted () {
				const path = "http://localhost:8081/experts"
				axios({
					method: "GET",
					url: path,
				}
				)
				.then(response => (this.people = response.data))


			}
	}
      
</script>
<style scoped>
	.thumbnail {
			max-height: 30px;
			max-width: 30px;
			border-radius: 50%;
		}

</style>