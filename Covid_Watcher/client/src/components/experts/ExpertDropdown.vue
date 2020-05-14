<template>
  <v-container class="contain-toolbar">
    <v-row align-center>
        <v-col>
          <v-toolbar flat>
            <v-row align="center" align-content="space-between">
              <v-col class="d-flex" offset="1" cols="7">
                <v-text-field
                  hide-details
                  prepend-icon="mdi-magnify"
                  single-line
                  color="#FF6B6B"
                  solo
                  flat
                  type="text"
                  v-model="expertName"
                  label="Expert Name"
                  hint="All experts are shown below if nothing is specified"
                  persistent-hint
                  class="resize-text-field">  
                </v-text-field>
              </v-col>
            <v-col cols ="3">
              <div class="add-padding">
                <!-- <v-select
                :items="getExpertises"
                label="Area of Expertise"
                v-model="selectedExpertise"
                color="#FF6B6B"
                class="custom"
                multiple
                attach
                full-width
                single-line
                item-color="#ACEE00"
                chips
                deletable-chips
              ></v-select> -->
              <v-autocomplete
                v-model="selectedExpertises"
                :items="getExpertises"
                dense
                chips
                small-chips
                label="Area of Expertise"
                class='custom'
                multiple
                single-line
                full-width
                deletable-chips
                item-color="#ACEE00"
            ></v-autocomplete>

              </div>
              

            </v-col>
            </v-row>
       
          </v-toolbar>
          
        </v-col>
        <!-- <v-col>
          
        </v-col> -->
    </v-row>

  </v-container>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'ExpertDropdown',
  data() {
    return {
      // items: ["one", "two", "three", "Four"]
    }
  },
  methods: {
    ...mapActions(["fetchExpertises", "updateExpertName", "updateSelectedExpertises"]),

  },
  computed: {
    ...mapGetters(["getExpertises"]),
    expertName: {
      get() {
        return this.$store.state.expert_name
      },
      set(expertName) {
        this.updateExpertName(expertName)
      }
    },
    selectedExpertises: {
      get() {
        return this.$store.state.selected_expertises
      },
      set(selectedExpertises)
      {
        if(selectedExpertises.length != 0){
          this.updateSelectedExpertises(selectedExpertises)
        }
        else {
          const ogArray = this.getExpertises
          console.log(this.getExpertises)
          this.updateSelectedExpertises(ogArray)
        }
        
      }
      
    },
  },
  
  created() {
    this.fetchExpertises()
  }
}
</script>

<style>
.resize-text-field {
  min-width: 100%
}
.contain-toolbar{
  min-width: 100%
}

  .custom.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}
  .custom.v-text-field>.v-input__control>.v-input__slot:after {
      border-style: none;
  }
  .add-padding {
    padding-top: 10px;
  }
</style>