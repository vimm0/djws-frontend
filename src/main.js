import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(Vuetify)
Vue.use(VueSimpleMarkdown)

// Vue.use(require('vue-chunk'));
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
