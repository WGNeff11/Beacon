<template>
		<div>
      <v-container>
        <v-row align-center>
          <v-col cols="7" class="intro">
            <h1>About Our <br> Project.</h1>
          </v-col>
        </v-row>
        <v-row align-center>
          <v-col cols="7" offset ="5" class="blurb">
            <p>This website is a global sentiment tracker on the COVID-19 coronavirus created by Jacob Cimerberg, Hebron Daniel, Enoch Kuan, Garrett Neff, William Ramundo, and Daniel Spottiswood. We use tweets to gauge the sentiment of world leaders, public health experts, and others. We present this sentiment data along with COVID-19 case counts and the actual tweets that are examined. We tried to collect a comprehensive list of experts to represent a global viewpoint but if you feel like we missed someone, please let us know in the expert recommender section. This website was created as a project for a Duke University computer science class.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>


<style scoped>
  .intro {
    padding-top: 50px;
    font-size: 30pt;
    /* font-family: 'Montserrat', sans-serif;
    /* color: black; */
    line-height: 1.3; 
    font-family: "Fjalla One", sans-serif;
		font-weight: 700;
		letter-spacing: 2pt;
  }

  .blurb {
    font-size: 18pt;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
  }


</style>