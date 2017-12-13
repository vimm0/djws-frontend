<template>
  <div id="navbar">
    <v-toolbar light>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
	<v-toolbar-title class="brand">
		<router-link to="/">Web ShikShalaya</router-link>
	</v-toolbar-title>
      <v-spacer></v-spacer>
	<router-link to="/sitemap">
	<v-btn icon>
	  <v-icon>fa-sitemap</v-icon>
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
