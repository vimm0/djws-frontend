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

  export default {
    name: 'app',
    components: {'nav-bar': NavBar, 'side-bar': SideBar}
  }
</script>

<style>

</style>
