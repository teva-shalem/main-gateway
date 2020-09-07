import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path     : '/',
    name     : 'Home',
    component: Home,
  },
  {
    path     : '/art',
    name     : 'אמנות',
    component: () => import(/* webpackChunkName: "art" */ '../views/Art.vue'),
  },
  {
    path     : '/school',
    name     : 'בית ספר פעימה',
    component: () => import(/* webpackChunkName: "school" */ '../views/School.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.afterEach((to, from) => {
  window.scrollTo({top: 0})
})

export default router
