<template>
  <div id="app">
    <v-app>
      <djws-navbar></djws-navbar>
      <djws-shiksha-content></djws-shiksha-content>
      <djws-footer></djws-footer>
    </v-app>
  </div>
</template>

<script>
  import DjWebShikshaNavBar from './components/DjWebShiksha/DjWebShikshaNavBar.vue'
  import DjWebShikshaContent from './components/DjWebShiksha/DjWebShikshaContent.vue'
  import DjWebShikshaFooter from './components/DjWebShiksha/DjWebShikshaFooter.vue'

  import axios from 'axios'
  import Vue from 'vue'
  import config from '../config/index'

  export default {
    name: 'app',
    components: {
      'djws-navbar': DjWebShikshaNavBar,
      'djws-shiksha-content': DjWebShikshaContent,
      'djws-footer': DjWebShikshaFooter
    },
    created () {
      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.baseURL = config.build.apiBaseURL
      // let global.axios = axios
      const global.Vue = Vue
    }
  }
</script>
<style lang="scss">
</style>
