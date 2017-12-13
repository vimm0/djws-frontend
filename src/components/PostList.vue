<template>
  <div id="post-list">
    <div class="container">

            <v-flex>
              <div v-for="post in posts" :key="post.title">
                <v-card class="my-3" hover>
                  <v-card-media
                    class="white--text"
                    height="170px"
                    src='https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg'>
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"><router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">{{ post.title }}</router-link>
                          </span>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-text>
                      <small>Published: {{ post.publish }}</small>

                      <h3 v-if="draft">Staff only: Draft</h3>
        <!--if more than published today-->
        <h3 v-if="getFuturePost">Staff Only: Future Post</h3>
        <!--endif-->

        <p>Author: {{ post.author }}</p>
                    {{ post.content| turncate(400) }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn icon class="red--text">
                      <v-icon medium>fa-reddit</v-icon>
                    </v-btn>
                    <v-btn icon class="light-blue--text">
                      <v-icon medium>fa-twitter</v-icon>
                    </v-btn>
                    <v-btn icon class="blue--text text--darken-4">
                      <v-icon medium>fa-facebook</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
                      <v-btn flat class="blue--text">Read More</v-btn>
                    </router-link>
                  </v-card-actions>
                </v-card>
              </div>
            </v-flex>
      <!-- <div class="post sitemap" v-for="post in posts">
        <img src='https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg'
             class='img-responsive'/>
        <p v-html="">{{ post.content | turncate(400) }}</p>
        <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
          <button type="button" class="btn btn-outline-info"><a href="#">view</a></button>
        </router-link>
        <hr/>
      </div> -->
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
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      turncate: function (value, length) {
        if (value.length < length) {
          return value
        }
        length = length - 3
        return value.substring(0, length) + '...'
      }
    }
  }
</script>
<style lang="scss" scoped>
.headline{
  color:#000;
}
a:hover {
    color: #0056b3;
    text-decoration: none;
}
</style>
