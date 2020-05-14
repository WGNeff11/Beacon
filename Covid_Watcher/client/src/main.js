// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Axios from 'axios';
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import cors from 'cors'
import VueGoogleCharts from 'vue-google-charts'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import AOS from 'aos';
import 'aos/dist/aos.css';



Vue.use(VueGoogleCharts)
Vue.use(Vuex);
Vue.use(VueLayers)
Vue.use(cors)
Vue.use(VueLazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  vuetify,
  Axios,
  render: function (h) { return h(App) }
}).$mount('#app')
