import Vue from 'vue'
import Vuex from 'vuex'
import LandingTweets from './modules/LandingTweets'
import Cases from './modules/Cases'
import Experts from './modules/Experts'
import Charts from './modules/Charts'
Vue.use(Vuex)

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   state: {
//     modal_visible: false
//   },
//   mutations: {
//     change_visibility(state) {
//       state.modal_visible = !state.modal_visible
//     }
//   },
//   getters: {
//     modal_visible: state => state.modal_visible
//   }
   // actions: {
  // },
  // modules: {
  // }
// })

export default new Vuex.Store({
  modules: {
    LandingTweets,
    Cases,
    Experts,
    Charts
  }
});
