<template>
  <div class="hello">
    <div class="container">
      <div class="post sitemap">
        <h2>Sitemap</h2>
        <ul>
          <li v-for='post in posts'><a href="#">{{ post.title }}</a> - {{ post.publish}} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  //  https://alligator.io/vuejs/rest-api-axios/
  export default {
    name: 'SiteMap',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get(`https://djshikshalaya.herokuapp.com/v1/post/`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })

      // async / await version (created() becomes async created())
      //
      // try {
      //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
      //   this.posts = response.data
      // } catch (e) {
      //   this.errors.push(e)
      // }
    }
  }
</script>

<style scoped>
</style>
