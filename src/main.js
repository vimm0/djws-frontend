// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// var marked = require('marked');
// marked.setOptions({
// renderer: new marked.Renderer(),
// gfm: true,
// tables: true,
// breaks: false,
// pedantic: false,
// sanitize: false,
// smartLists: true,
// smartypants: false
// })
// Vue.use(marked)

Vue.use(Vuetify)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
