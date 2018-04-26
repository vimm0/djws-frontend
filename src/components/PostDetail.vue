<template>
  <div id="post-detail">
    <v-flex>
      <!--<v-card>-->
      <div class="post sitemap">
        <v-card-media :src="post.image" height="200px" width="auto">
        </v-card-media>
        <v-card-title primary-title>
          <div class="meta">
            <h1 class="detail-title mt-2">{{ post.title }}</h1>
            <p>Published: {{ post.publish }} ● Updated: {{ post.updated }}</p>
            <p>Read time: {{post.read_time}} min ● Views: 12 times</p>
            <ul>
              <div v-if="post.tag_list">
                <li class="meta-list">
                  <template v-if="pluralTag(post.tag_count)">Tags</template>
                  <template v-else>Tag</template>
                </li>
                <v-chip><a href="#">{{post.tag_list | capitalizeTags}}</a></v-chip>
              </div>
              <li v-else class="meta-list">No tagged yet.</li>
            </ul>
          </div>
        </v-card-title>
      </div>
      <v-card-actions>
        <!-- this is the content -->
        <div class='post-detail-item' v-html="previewText"></div>
        <br/>
      </v-card-actions>
      <!--</v-card>-->
    </v-flex>
    <!-- author and recent post-->

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-title class="author-title">
              Author
            </v-card-title>
            <div class="card-block">
              <div class="media">
                <v-flex>
                  <v-avatar
                    :tile="tile"
                    :size="avatarSize"
                    class="grey lighten-4 author-avatar">
                    <img src="https://avatars3.githubusercontent.com/u/17888497?s=460&v=4" alt="avatar">
                  </v-avatar>
                </v-flex>
                <v-flex>
                  <div class="author-meta">
                    <div class="body-2">Sandesh Rana (a.k.a <a href="mailto:vimmrana0@gmail.com">Vimm0</a>)</div>
                    <div class="caption">
                      <v-icon class="icon-meta">far fa-map-marker</v-icon>
                      Kathmandu, Nepal
                    </div>
                    <div class="caption">
                      <v-icon class="icon-meta">fas fa-link</v-icon>
                      <a href="http://vimm0.github.io"> http://vimm0.github.io</a></div>
                    <div class="caption">
                      <v-icon class="icon-meta">fas fa-graduation-cap</v-icon>
                      Bachelore in Computer Science and Information Technology <strong>(Bsc. CSIT)</strong></div>
                    <div class="caption author-caption">Python enthusiast, Linux enthusiast and Senior writer at
                      Learning Academy.
                    </div>
                  </div>
                </v-flex>
              </div>
            </div>
            <v-footer class="pa-3 author-footer">
              <div>
                <a class="social-item" href="https://facebook.com/vimm0ghost"><i class="fab fa-facebook-f"></i></a>
                <a class="social-item" href="mailto:vimmrana0@gmail.com"><i class="fab fa-google"></i></a>
                <a class="social-item" href="https://www.instagram.com/vim_rana/"><i class="fab fa-instagram"></i></a>
                <a class="social-item" href="https://twitter.com/vimm0"><i class="fab fa-twitter"></i></a>
                <a class="social-item" href="https://www.youtube.com/channel/UCE9PRNtKKI0ZzroxjJ6mH0g"><i
                  class="fab fa-youtube"></i></a>
              </div>
              <v-spacer></v-spacer>
              <div>&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- related posts -->
    <!--<related-post></related-post>-->

  </div>
</template>
<script>
  // import Collection from 'Collection/Collection'
  // import RelatedPost from 'RelatedPost'
  let marked = require('marked')
  export default {
    name: 'post-detail',
    data () {
      return {
        post: [],
        errors: [],
        draft: false,
        tag: false,
        tile: false,
        avatarSizeValue: 10
      }
    },
    components: {
      // RelatedPost,
      // 'related-post': RelatedPost
    },
    // endpoint: 'post/',
    // Fetches posts when the component is created.
    created () {
      global.axios.get('post/' + this.$route.params.postId)
        .then(response => {
          // JSON responses are automatically parsed.
          this.post = response.data
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
      capitalizeTags: function (data) {
        return data.replace(/\b\w/g, l => l.toUpperCase())
      }
    },
    computed: {
      previewText () {
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
        return marked(this.post.content)
      },
      avatarSize () {
        return `${this.avatarSizeValue}rem`
      }
    },
    methods: {
      pluralTag: function (data) {
        return data > 1
      }
    }
  }
</script>
<style lang="scss">
  a.social-item {
    color: #000;
  }

  div.author-meta {
    margin: 3rem;
  }

  i.icon-meta {
    font-size: 1rem;
  }

  div.author-caption {
    color: #adb0b0;
  }

  div.author-avatar {
    margin: 2rem;
  }

  div.author-title {
    background-color: rgba(12, 8, 8, 0.05);
  }

  div.card-title {
    background-color: rgba(12, 8, 8, 0.05);
  }

  footer.author-footer {
    background-color: rgba(12, 8, 8, 0.05);
  }
</style>
