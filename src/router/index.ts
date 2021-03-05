import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
// import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)
// Vue.use(VueMeta, {refreshOnceOnNavigation: true})

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
  {
    path     : '/home',
    name     : 'הבית',
    component: () => import(/* webpackChunkName: "building" */ '../views/Building.vue'),
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.afterEach((to, from) => {
  window.scrollTo({top: 0})
})

export default router
