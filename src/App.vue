<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-8 col-lg-8">
          <router-view/>
        </div>
        <div class="col-md-4 col-lg-3">
          <side-bar></side-bar>
        </div>
      </div>
    </div>
    <div class="container mt-3">
    </div>
  </div>
</template>

<script>
  import NavBar from './components/includes/NavBar.vue'
  import SideBar from './components/includes/SideBar.vue'
  import Vue from 'vue'
  import axios from 'axios'
  import config from '../config/index'

  export default {
    name: 'app',
    components: {'nav-bar': NavBar, 'side-bar': SideBar},
    created () {
      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.baseURL = config.build.apiBaseURL
      global.axios = axios
      global.Vue = Vue
    }
  }
</script>

<style>

</style>
