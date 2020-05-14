<template>
  <!-- <v-container class="contain">
  
    <RecommendExperts class="contain-form"></RecommendExperts>

  </v-container> -->
  
<v-container class="contain">
  <v-card tile depressed class="card_to_slide">
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
                  <v-icon right medium color="#41EA96"> {{learn_more_icon}}</v-icon>
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
              <!-- <v-row align-center>
                <v-col>
                  <v-toolbar dense width="80%" floating>
                    <v-text-field
                      hide-details
                      prepend-icon="mdi-magnify"
                      single-line
                      color="#FF6B6B"
                      solo
                      flat
                      type="text"
                      v-model="search"
                      label="Name or Location"
                    ></v-text-field>
                  </v-toolbar>
                </v-col>
              </v-row> -->
              <v-row>
                <v-col>
                  <!-- <v-card tile class="contain-list" v-if="!loading"> -->
                    <v-card tile flat class="expert-form">
                      <v-row align-center>
                        <v-col>
                          <v-form
                          v-model="valid"
                          class="justify-center"
                          ref="form"
                        >
                          <v-text-field
                            v-model="expName"
                            label="Expert Name"
                            required
                            class="form-input"
                            color="#00ACEE"
                            :rules="expertNameRules"
                          ></v-text-field>

                          <v-text-field
                          v-model="twitterHandle"
                          class="form-input"
                          label="Twitter Handle"
                          required
                          color="#00ACEE"
                          :rules="expertHandleRules"
                        ></v-text-field>

                          <v-text-field
                            v-model="expertise"
                            label="Expertise"
                            class="form-input"
                            color="#00ACEE"
                            :rules="expertiseRules"
                          >
                          </v-text-field>

                          <v-text-field
                            v-model="recName"
                            label="Your Name"
                            class="form-input"
                            color="#00ACEE"
                            :rules="nameRules"
                          >
                          </v-text-field>

                          <v-text-field
                            v-model="recEmail"
                            label="Your Email"
                            class="form-input"
                            color="#00ACEE"
                            :rules="emailRules"
                          >
                          </v-text-field>

                          <v-text-field
                            v-model="zip"
                            label="Zip Code"
                            class="form-input"
                            color="#00ACEE"
                            :rules="zipRules"
                          >
                          </v-text-field>
                          
                          <v-card-actions class="justify-center">
                            <v-btn
                              type="button"
                              class="form-input slide"
                              id="submit-button"
                              depressed
                              tile
                              :class="{'active': active, 'loader': loader, 'failure': failure, 'animated': animated, 'pulse': pulse}"
                              @click="postRecs()"
                              
                              >
                                {{btn_text}}
                                <v-icon right class="submit-icon" v-if="submit_icon_show"> {{submit_icon}}</v-icon>
                              </v-btn>
                          </v-card-actions>
                          </v-form>
                        </v-col>
                      </v-row>
                    </v-card>

                  <!-- </v-card> -->

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
import axios from "axios"
import {mapActions, mapGetters} from "vuex"
export default {
  name: 'ExpertList',
  data() {
    return {
      search:'',
      experts: [],
      loading: false,
      twoLine: true,
      learn_more_icon: "mdi-arrow-right",
      valid: true ,
      expName: '',
      twitterHandle: '',
      expertise: '',
      recName: '',
      recEmail: '',
      zip: '',
      active: false,
      success: false,
      loader: false,
      animated: false,
      pulse: false,
      submit_icon: "mdi-chevron-double-right",
      submit_icon_show: true,
      btn_text: 'Submit',
      failure: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/.test(v) || 'E-mail must be valid',
      ],
      expertNameRules: [
        v => !!v || "The expert's name is required",
        v => /^[a-zA-Z\s]*$/.test(v) || 'Name must not include special characters'
      ],
      expertHandleRules: [
        v => !!v || "The expert's twitter handle is required",
        v => /^@(\w){1,15}$/.test(v) || "Twitter handle must be valid and include '@' character"
      ],
      expertiseRules: [
        v => !!v || 'An expertise is required',
        v => /^[a-zA-Z\s]*$/.test(v) || 'Expertise must not include special characters'
      ],
      nameRules: [
        v => !!v || 'Your name is required', 
        v => /^[a-zA-Z\s]*$/.test(v) || 'Name must not include special characters'
      ],
      zipRules: [
        v => !!v || 'Your zip code is required',
        v => /^\d{5}$/.test(v) || 'Your zip code must be a valid 5-digit US code'
      ],
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
    ...mapActions(["fetchExperts"]),
    animate() {
      // if(this.active == true || this.success==true) {
      //   return false
      // }
      // this.submit_icon_show = false
      // this.active = true;
      // setTimeout(() => {
      //   this.loader = true;
      //   }, 125);
      setTimeout(() => {
        this.active = false
        this.loader = false
        this.btn_text = 'Success'
        // this.success = true
        this.pulse= true
        this.animated= true
      }, 1600);
      setTimeout(() => {
        this.$refs.form.reset()
        this.btn_text = 'Submit'
        this.submit_icon_show = true
        // this.success= false
        this.loader= false
        this.animated= false
      }, 2900);
      
      },
    postRecs() {
        if(this.active == true || this.success==true) {
          return false
        }
        this.submit_icon_show = false
        this.active = true;
        setTimeout(() => {
          this.loader = true;
          }, 125);
        if(!this.$refs.form.validate()) {
                setTimeout(() => {
                  this.active = false
                  this.loader = false
                  this.failure = true 
                  this.btn_text = 'Failure!'
                  // this.success = true
                  this.pulse= true
                  this.animated= true
                }, 1600);
                setTimeout(() => {
                  this.btn_text = 'Submit'
                  this.submit_icon_show = true
                  this.failure = false
                  // this.success= false
                  this.loader= false
                  this.animated= false
                }, 2900);
                
          
        }
        else {
          axios.post("http://localhost:8081/storedRecs", {
            s_name: this.expName,
            s_handle: this.twitterHandle,
            s_expertise: this.expertise,
            s_recName: this.recName,
            s_recEmail: this.recEmail,
            s_zip: this.zip
          }).then(
            this.animate()
          ).catch(function(error){
            console.log(error);
          });

        }
    }
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
  justify-content: center;
  max-width: 90%;
  min-height:100%;
}

.card_to_slide {
  border: 20px, solid, #FF6B6B;
  min-width: 100%;
  min-height: 400px;
  background-color: #F8F8F8;
  
  
}

.searchExperts {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-content: center;
  // background-color: #FF6B6B;
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
        background-color: darken(#41EA96,5%);
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
  }
  $buttonColor: #41EA96;
  @mixin dimensions($width: null, $height: $width) { width: $width; height: $height; }
  %reset { margin: 0; padding: 0; }
  %flex { display: flex; justify-content: center;	align-items: center; }
  *, *:before, *:after { box-sizing: border-box; }
  

  $colors: (
    fill: #a972cb,
    pulse: #ef6eae, 
    close: #ff7f82, 
    raise: #ffa260, 
    up: #e4cb58, 
    slide: #41EA96, 
    offset: #19bc8b
  );

  @each $button, $color in $colors {
    .#{$button} {
      --color: #{$color};
      // --hover: #{};
      --hover: #{
        change-color($color, $hue:150, $saturation:72),
        };
    }
  }

  @keyframes loader {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  #submit-button {  
    color: var(--color);
    transition: 0.3s ease-in;
    // @extend %flex;
    @include dimensions($width: 50%, $height: 50px);
    background: transparent;
    border-radius: 10px;
    will-change: transform;
    transition: all .2s ease;
    border: 2px solid $buttonColor;
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
    color: $buttonColor;
    outline: none;
    text-align: center;
    
    &:hover,
    &:focus { 
      border-color: var(--hover);
      background-color: var(--hover);
      color: #f8f8f8;
    }
    &:active {
      font-size: 15px;
      transform: translateY(1px);
    }
    &.active {
      font-size: 0;
      border-radius: 50%;
      min-width: 50px;
      max-width: 50px;
      min-height: 50px;
      max-height:50px;
      background: transparent;
    }
    &.loader {
      border-right: 2px solid #ffffff;
      animation: loader .4s linear infinite;
    }
    &.failure {
      color: #FF6B6B;
      border: 2px solid #FF6B6B;

    }
    // &.success {
    // 	background: #F8F8F8;
    // 	border-color: #f8f8f8;
    // 	font-size: 14px;
    // 	color: $buttonColor;
    // }
    
  }

  #submit-button .submit-icon {
    color: #41EA96;
    transition: 0.5s ease-in;
  }
  #submit-button:hover .submit-icon {
    color: #f8f8f8;
  }
  #submit-button:focus .submit-icon {
    color: #f8f8f8;
  }
  #submit-button:hover,
  #submit-button:focus {
    box-shadow: inset 15.5em 0 0 0 var(--hover);
  }

  .expert-form {
    min-width: 50%;
    background-color:#F8F8F8;
    padding: 5%;
    min-height: 400px;

  }


// .contain {
//   display: flex;
//   justify-content: space-evenly;
//   max-width: 90%;
//   min-height:100%;
// }



</style>