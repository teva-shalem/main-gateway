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
    path     : '/luz',
    name     : 'לו״ז',
    component: () => import(/* webpackChunkName: "luz" */ '../views/Luz.vue'),
  },
  {
    path     : '/home',
    name     : 'הבית',
    component: () => import(/* webpackChunkName: "building" */ '../views/Building.vue'),
  },
  {
    path     : '/healing-space',
    name     : 'מרחב הבראה',
    component: () => import(/* webpackChunkName: "healingSpace" */ '../views/HealingSpace.vue'),
  },
  {
    path     : '/maala',
    name     : 'מעל״ה',
    component: () => import(/* webpackChunkName: "maala" */ '../views/Maala.vue'),
  },
  {
    path     : '/forum',
    name     : 'הפורום',
    component: () => import(/* webpackChunkName: "forum" */ '../views/Forum.vue'),
  },
  {
    path     : '/contact',
    name     : 'יצירת קשר',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
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
