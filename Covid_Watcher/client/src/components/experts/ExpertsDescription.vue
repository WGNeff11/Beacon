<template>
  <!-- <v-container fluid class="flex-container"> -->
    <div>
    <v-row align-center>
      <v-col>
        <div class="form-description">
          <h1> Want more information about your state? </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="form-sub-description">
          <p>Provide us with an expert near you - so that we can provide more insight into your community. </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="button-row">
      <v-col  cols="8">
        <div data-aos="fade-left" data-aos-duration=800>
            <transition name="fade" mode="out-in" class="relative-parent">
              <v-btn 
                id="big-button"
                height="200%"
                depressed
                tile
                @click="toggleShowForm(!getShowForm)">
                {{getShowForm ? form_showing : form_hidden }}
            </v-btn>
            </transition>
      </div>
      </v-col>
    </v-row>
  <!-- </v-container> -->
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex" 
export default {
  name: "ExpertsDescription",
  data() {
    return {
      form_showing: "Browse Our Experts",
      form_hidden: "Recommend an Expert"
    }
  },
  computed: {
    ...mapGetters(["getShowForm"])
  },
  methods: {
    ...mapActions(["toggleShowForm"])
  }

}
</script>

<style scoped lang="scss">
  .form-description {
    display:flex;
    justify-content: center;
    align-content: center;
    font-family: 'Fjalla One', sans-serif;
    line-height: 250%;
    /* font-weight: bold; */
    font-size: 200%;
    text-align: center;
    color: #2D2D2D;
  }


  .form-sub-description {
    display:flex;
    justify-content: center;
    align-content: center;
    font-family: 'Fjalla One', sans-serif;
    line-height: 250%;
    /* font-weight: bold; */
    font-size: 180%;
    text-align: center;
    color: #2D2D2D;
  }

#big-button {
  // padding: 0;
  // margin: 0;
  font-family: "Oswald", sans-serif;
  display: flex;
  // align-items: center;
  // justify-content: center;
  min-width: 100%;
  // max-width: 80%;
  text-transform: none !important;
  font-weight: bold;
  font-size: 20pt;
  background-color: #8889EA;
  color: #F8F8F8;
  padding-top: 1%;
  padding-bottom:1%;

}
// #big-button-two {
//   padding-left: 100px;
//   padding-right: 100px;
//   margin: 0;
//   font-family: "Oswald", sans-serif;
//   // display: flex;
//   // align-items: center;
//   // justify-content: center;
//   min-width: 100%;
//   text-transform: none !important;
//   font-weight: bold;
//   font-size: 20pt;
//   background-color: #8889EA;
//   color: #F8F8F8;

// }

.button-row {
  display: flex;
  // padding-bottom: 3%;
  align-content: center;
  justify-content: center;
}

.relative-parent {
  display: flex;

  position: relative;
  justify-content: center;
  align-content: center;
}

// .flex-container {
//   display: flex;
  // justify-content: center;
  // align-content: center;
  
// }

</stylescoped>