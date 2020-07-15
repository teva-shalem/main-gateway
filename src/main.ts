import './styles/main.scss'
import './plugins/bootstrap-vue'

import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: { id: "UA-163403399-3" }
}, router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
