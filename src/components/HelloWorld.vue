<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Essential Links</h2>
    <h2>Sitemap</h2>
    <ul>
      <li v-for='post in posts'><a href="#">{{ post.title }}</a> - {{ post.publish}} </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  //  https://alligator.io/vuejs/rest-api-axios/
  export default {
    name: 'HelloWorld',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get(`http://127.0.0.1:8000/v1/post/`)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
