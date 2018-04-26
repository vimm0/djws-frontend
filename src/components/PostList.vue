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
                          <span class="headline"><router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">{{ post.title
                            }}</router-link>
                          </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              <small>Published: {{ post.publish }}</small>
              <div v-if="post.draft" class="body-1 red--text">Staff only: Draft</div>
              <div v-if="post.future_post" class="body-1 red--text">Staff Only: Future Post</div>
              <p>Author: {{ post.author }}</p>
              <p v-html="getContent(post.content)"></p>
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
              <template v-if="post.future_post">
                <v-btn flat class="blue--text" :disabled="post.future_post">Read More</v-btn>
              </template>
              <template v-else>
                <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
                  <v-btn flat class="blue--text" :disabled="post.future_post">Read More</v-btn>
                </router-link>
              </template>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </div>
  </div>
</template>
<script>
  let marked = require('marked')

  export default {
    name: 'post-list',
    data () {
      return {
        posts: [],
        draft: false,
        futurePost: false,
        errors: []
      }
    },
    created () {
      global.axios.get('post/')
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },
      truncate: function (text, stop, clamp) {
        return text.split(' ').slice(0, stop).join(' ') + (stop < text.length ? clamp || ' ...' : '')
      }
    },
    methods: {
      getContent: function (data) {
        marked.setOptions({
          renderer: new marked.Renderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        })
        return marked(this.$options.filters.truncate(data, 30, ' ...'))
      }
    }
  }
</script>
<style lang="scss" scoped>
  .headline {
    color: #000;
  }

  a:hover {
    color: #0056b3;
    text-decoration: none;
  }
</style>
