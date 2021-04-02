import './styles/main.scss'
import './plugins/bootstrap-vue'
import './plugins/vue-easy-lightbox'

import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-163403399-3" },
  includes: [
    { id: 'G-6THT1JQVQ1' },
  ],
}, router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
