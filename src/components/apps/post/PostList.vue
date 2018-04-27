<template>
  <div id="post-list">
    <div class="container">
      <v-flex>
        <post :endPoint="this.$options.endpoint">
          <template slot="results" slot-scope="res">
            <div v-for="post in res.results" :key="post.title">
              <v-card class="my-3" hover>
                <template v-if="post.image">
                  <v-card-media :src="post.image" height="200px" width="auto">
                  </v-card-media>
                </template>
                <template v-else>
                  <div class="color-image"></div>
                </template>
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                          <span class="headline"><router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">{{ post.title
                            }}</router-link>
                          </span>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-card-text>
                  <small>Published: {{ post.publish }}</small>
                  <div v-if="post.draft" class="body-1 red--text">Staff only: Draft</div>
                  <div v-if="post.future_post" class="body-1 red--text">Staff Only: Future Post</div>
                  <p>Author: {{ post.author }}</p>
                  <vue-simple-markdown :source="getListContent(post.content)"></vue-simple-markdown>
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text" fab>
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text" fab>
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4" fab>
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
          </template>
        </post>
      </v-flex>
    </div>
  </div>
</template>
<script>
  import Helper from '../../../mixins/Helper'
  import Collection from '../../Collection/Collection.vue'

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
    mixins: [Helper],
    components: {
      'post': Collection
    },
    endpoint: 'post/'
  }
</script>
