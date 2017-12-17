<template>
  <div id="side-bar">
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="post in posts.slice(1, 5)" :key="post.id">
              <div slot="header">{{post.title}}</div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  {{ post.content | turncate(100) }}
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
      <div class="custom-shadow card">
        <!--post comment and tags-->
        <div class="text-center">
          <p class="sidebar-github mt-2">Contribute on github or download source code and have fun.</p>
          <a class="github-button" href="https://github.com/vimm0" aria-label="Follow @vimm0 on GitHub">Follow@vimm0</a>
          <a class="github-button" href="https://github.com/vimm0/web_sikhalaya/fork" data-icon="octicon-repo-forked"
             aria-label="Fork vimm0/web_sikhalaya on GitHub">Fork</a>
          <a class="github-button" href="https://github.com/vimm0/web_sikhalaya" data-icon="octicon-star"
             aria-label="Star vimm0/web_sikhalaya on GitHub">Star</a>
        </div>
      </div>
      <v-layout row wrap>
        <v-flex>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="comment in comments.slice(1, 5)" :key="comment.id">
              <div slot="header">{{comment.post_name}}</div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>{{ comment.content | turncate(100) }}
                    <small class="meta ml-5">{{comment.timestamp|jsDate}} By: {{comment.commenter}}</small>
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'side-bar',
    data () {
      return {
        posts: [],
        comments: [],
        errors: [],
        draft: false,
        tag: false
      }
    },
    // Fetches posts when the component is created.
    created () {
      axios.get(`http://djshikshalaya.herokuapp.com/v1/post/`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      axios.get(`http://djshikshalaya.herokuapp.com/v1/comment/`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.comments = response.data
        }).catch(e => {
          this.errors.push(e)
        })
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
      },
      jsDate: function (d) {
//        console.log(new Date(d.getYears))
        return new Date(d.year, d.month - 1, d.day)
      }
    }
  }
</script>
<style>

</style>
