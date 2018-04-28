<template>
  <div id="navbar">
    <v-toolbar light>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title class="brand">
        <router-link to="/">ShikShalaya</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn icon style="position:relative;padding:0;" rel="noopener noreferrer" target="_blank" href="https://github.com/vimm0/vimm0.github.io">
        <v-icon style="position:relative;">fa-github</v-icon>
      </v-btn>
      <router-link to="/sitemap">
        <v-btn icon style="position:relative;padding:0;">
          <v-icon style="position:relative;">fa-sitemap</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    name: 'nav-bar'
//    data () {
//      return {}
//    }
  }
</script>
<style scoped>
  a:hover {
    color: #000;
    text-decoration: none;
  }
</style>
