<template>
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
            <v-btn icon class="" fab>
              <v-icon medium>fa-reddit</v-icon>
            </v-btn>
            <v-btn icon class="social-item" href="https://twitter.com/vimm0" fab>
              <v-icon medium>fa-twitter</v-icon>
            </v-btn>
            <v-btn icon class="social-item" href="https://facebook.com/vimm0ghost" fab>
              <a>
                <v-icon medium>fa-facebook</v-icon>
              </a>
            </v-btn>
            <v-btn class="social-item" href="mailto:vimmrana0@gmail.com" icon fab>
              <v-icon medium>fa-google</v-icon>
            </v-btn>
            <v-btn icon class="social-item" href="https://www.instagram.com/vim_rana/" fab>
              <v-icon medium>fa-instagram</v-icon>
            </v-btn>
            <v-btn icon class="social-item" href="https://www.youtube.com/channel/UCE9PRNtKKI0ZzroxjJ6mH0g" fab>
              <v-icon medium>fa-youtube</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
          </v-footer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    name: 'post-detail',
    data () {
      return {
        tile: false,
        avatarSizeValue: 10
      }
    },
    computed: {
      avatarSize () {
        return `${this.avatarSizeValue}rem`
      }
    }
  }
</script>
