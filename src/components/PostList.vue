<template>
  <div id="post-list">
    <div class="container">
      <div class="post sitemap" v-for="post in posts">
        <img src='https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg'
             class='img-responsive'/>
        <!--if draft-->
        <h3 v-if="draft">Staff only: Draft</h3>
        <!--if more than published today-->
        <h3 v-if="getFuturePost">Staff Only: Future Post</h3>
        <!--endif-->
        <h4 class="mt-3 mb-1"><a href='#'>{{ post.title }}</a>
          <small>{{ post.publish }}</small>
        </h4>
        <p>Author: {{ post.author }}</p>
        <p v-html="post.content"></p>
        <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
          <button type="button" class="btn btn-outline-info"><a href="#">view</a></button>
        </router-link>
        <hr/>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  //  https://alligator.io/vuejs/rest-api-axios/
  export default {
    name: 'post-list',
    data () {
      return {
        posts: [],
        draft: false,
        getFuturePost: false,
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
    },
    methods () {
      return {
        getFuturePost (show) {
          show ? this.getFuturePost = true : this.getFuturePost = false
        }
      }
    }
  }
</script>
<style lang="scss">

</style>
