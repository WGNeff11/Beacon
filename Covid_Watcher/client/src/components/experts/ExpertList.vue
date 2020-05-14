<template>
<v-container class="contain">
  <v-card  class="card_to_slide">
    <v-row class="reset-row-padding">
      <v-col cols="7" class="left-side-card">
        <v-row>
        <v-col>
          <div class="form-description-card">
            <h1>We cannot gurantee that the <br> expert you recommend is added. </h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="form-sub-description-card">
            <p>Due to the nature of user recommendation, our team will have to run a
              background check on every expert that is eventually added. We will prioritize experts by frequency of 
              recommendation, location and status.</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="learn-more">
            <router-link to="/about_experts" tag="span" style="cursor:pointer">
              <div class="learn-more-btn">
                <span class="hover hover-out" tag="span" style="cursor: pointer">
                  Learn More
                  <v-icon medium color="#FF6B6B"> {{learn_more_icon}} </v-icon>
                </span>

              </div>
            </router-link>
          </div>
        </v-col>
      </v-row>
      </v-col>
      <v-col class="right-side-card" cols="5">
          <div class="searchExperts">
            <div class="search-content">
              <v-row align-center>
                <v-col>
                  <v-toolbar dense width="80%" floating color='#F8F8F8'>
                    <v-text-field
                      hide-details
                      prepend-icon="mdi-magnify"
                      single-line
                      color="#FF6B6B"
                      background-color="#F8F8F8"
                      solo
                      flat
                      type="text"
                      v-model="search"
                      label="Name or Location"
                    ></v-text-field>
                  </v-toolbar>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-card tile class="contain-list" v-if="!loading">
                    <v-list
                      :two-line= "twoLine"
                      color="#F8F8F8">
                      <v-list-item
                        v-for="expert in filteredExperts"
                        :key="expert.user_id"
                      >
                        <v-list-item-avatar>
                          <v-img :src="expert.profile_image_url"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title v-text="expert.name"></v-list-item-title>
                          <v-list-item-subtitle v-text="expert.location"></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>

                  </v-card>

                </v-col>
                
              </v-row>
            </div>
          </div>
        </v-col>
    </v-row>
  </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: 'ExpertList',
  data() {
    return {
      search:'',
      experts: [],
      loading: false,
      twoLine: true,
      learn_more_icon: "mdi-arrow-right"
    }
  }, 
  // mounted() {
  //   const path = "http://localhost:8081/experts";
  //   axios({
  //     method: "GET",
  //     url:path
  //   }).then(response => {
  //     this.experts = response.data;
  //     this.loading = false;
  //   })
  // },
  computed: {
    ...mapGetters(["getExperts"]),
    filteredExperts: function() {
      return this.getExperts.filter((u) => {
        // console.log(u.name)
        return(u.name.includes(this.search) || u.location.includes(this.search))
      });

    }
  },
  methods: {
    ...mapActions(["fetchExperts"])
  },
  created() {
    this.fetchExperts()
  }
}
</script>

<style lang="scss" scoped>

v-card {
  border-color: #FF6B6B;
}

// .name_divider {
//   padding-left: 2%;
// }
$animate: all 0.2s ease-in-out;
.learn-more {
  font-family: 'Playfair Display', sans-serif;
  font-weight: 700;
  // text-decoration-line: underline;
  font-size: 16pt;
  padding-left: 7%;
  max-width: 40%;
}
.contain {
  display: flex;
  justify-content: space-evenly;
  max-width: 90%;
  min-height:100%;
}

.card_to_slide {
  border: 20px, solid, #FF6B6B;
  min-width: 100%;
  min-height: 400px;
  
  
}

.searchExperts {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-content: center;
  background-color: #FF6B6B;
  min-width: 100%;
  min-height: 400px;

}

.learn-more-btn {
  // padding-left: %;
  // display: flex;
  // flex-flow: row nowrap;
  // align-items: center;
  // margin: 0 0 45px;
  .hover {
      font-size: 20px;
      text-align: center;
      margin: 0 auto;
      padding: 0;
      transition: $animate;
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        width: 0px;
        height: 3px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.75s;
        opacity: 0;
        background-color: darken(#FF6B6B,5%);
      }
      &.hover-out {
        &:before {
          left: 50%;
        }
        &:after {
          right: 50%;
        }
      }
}
&:hover {
      cursor: pointer;
      .hover {
        &:before,
        &:after {
          width: 100%;
          opacity: 1;
        }
        &.hover-out{
          &:before,
          &:after {
            width: 50%;
          }
        }
      }
}
}


.reset-row-padding {
  padding: 0;
  margin: 0;
}
.contain-list {
  overflow-y: auto;
  max-height: 400px;
  min-height: 100%;
}
.form-description-card {
    font-family: 'Fjalla One', sans-serif;
    line-height: 230%;
    /* font-weight: bold; */
    font-size: 120%;
    color: #2D2D2D;
    padding:5%;
  }

  .form-sub-description-card {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-size: 130%;
    color: #2D2D2D;
    padding-left: 7%;
  }

  .right-side-card {
    padding:0;
    margin:0;
    min-height: 100%;
  }

  .left-side-card {
    padding-right: 5%;
    background-color: #F8F8F8;
  }

</style>