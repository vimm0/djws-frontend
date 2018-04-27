<template>
  <div id="side-bar">
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <latest-post :endPoint="this.$options.endpoint">
            <template slot="results" slot-scope="res">
              <v-expansion-panel popout>
                <!--last 4 items-->
                <v-expansion-panel-content v-for="post in res.results.slice(-4)" :key="post.id">
                  <div slot="header">{{post.title}}</div>
                  <v-card>
                    <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
                      <v-card-text class="grey lighten-3">
                        <vue-simple-markdown :source="getSideBarConent(post.content)"></vue-simple-markdown>
                      </v-card-text>
                    </router-link>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </template>
          </latest-post>
        </v-flex>
        <v-flex>
          <v-card class="custom-shadow card">
            <div class="text-center">
              <div class="caption sidebar-github mt-2">Contribute on github or download source code and have fun.</div>
              <a class="github-button" href="https://github.com/vimm0"
                 aria-label="Follow @vimm0 on GitHub">Follow@vimm0</a>
              <a class="github-button" href="https://github.com/vimm0/web_sikhalaya/fork"
                 data-icon="octicon-repo-forked"
                 aria-label="Fork vimm0/web_sikhalaya on GitHub">Fork</a>
              <a class="github-button" href="https://github.com/vimm0/web_sikhalaya" data-icon="octicon-star"
                 aria-label="Star vimm0/web_sikhalaya on GitHub">Star</a>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  import Helper from '../../mixins/Helper'
  import Collection from '../Collection/Collection.vue'

  export default {
    name: 'side-bar',
    data () {
      return {
        posts: [],
        errors: [],
        draft: false,
        tag: false
      }
    },
    components: {
      'latest-post': Collection
    },
    mixins: [Helper],
    endpoint: 'post/'
  }
</script>
