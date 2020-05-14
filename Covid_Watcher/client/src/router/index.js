import Vue from 'vue'
import VueRouter from 'vue-router'



const routeOptions= [
  {
    path: '/',
    name: 'Landing',
    page: 'Landing'
  },
  {
    path: '/about', 
    name: 'About',
    page: 'About'
  },
  {
    path: '/charts',
    name: 'Charts',
    page: 'Charts'
  },
  {
    path: "/about_experts",
    name: "AboutExperts",
    page:"AboutExperts"
  },
  {
    path: "/states",
    name: "StateTracker",
    page: "StateTracker"
  }
  
];

const routes = routeOptions.map(route => {
  return  {
    ...route,
    component: () => import(`../views/${route.page}.vue`)
  };
});

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes
});
