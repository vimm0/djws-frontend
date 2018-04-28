<template>
  <!--<v-container>-->
  <!--<v-layout row wrap>-->
  <!--<v-flex>-->
  <v-card>
    <v-card-title class="author-title">
      Author
    </v-card-title>
    <div class="card-block">
      <div class="media">
        <v-container>
          <v-layout row wrap>
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
                  <v-icon class="icon-meta">fas fa-map-marker</v-icon>
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
          </v-layout>
        </v-container>
      </div>
    </div>
    <v-footer class="pa-3 author-footer">
      <v-btn icon fab style="position:relative;padding:0;">
        <v-icon medium style="position:absolute">fa-reddit</v-icon>
      </v-btn>
      <v-btn icon class="social-item" href="https://twitter.com/vimm0" rel="noopener noreferrer" target="_blank" fab style="position:relative;padding:0;">
        <v-icon medium style="position:absolute">fa-twitter</v-icon>
      </v-btn>
      <v-btn icon class="social-item" href="https://facebook.com/vimm0ghost" rel="noopener noreferrer" target="_blank" fab style="position:relative;padding:0;">
        <a>
          <v-icon medium style="position:relative">fa-facebook</v-icon>
        </a>
      </v-btn>
      <v-btn class="social-item" href="mailto:vimmrana0@gmail.com" icon rel="noopener noreferrer" target="_blank" fab style="position:relative;padding:0;">
        <v-icon medium style="position:absolute">fa-google</v-icon>
      </v-btn>
      <v-btn icon class="social-item" href="https://www.instagram.com/vim_rana/" rel="noopener noreferrer" target="_blank" fab style="position:relative;padding:0;">
        <v-icon medium style="position:absolute">fa-instagram</v-icon>
      </v-btn>
      <v-btn icon class="social-item" href="https://www.youtube.com/channel/UCE9PRNtKKI0ZzroxjJ6mH0g" rel="noopener noreferrer" target="_blank" fab style="position:relative;padding:0;">
        <v-icon medium style="position:absolute">fa-youtube</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-flex hidden-sm-and-down>&copy; {{ new Date().getFullYear() }}</v-flex>
    </v-footer>
  </v-card>
  <!--</v-flex>-->
  <!--</v-layout>-->
  <!--</v-container>-->
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
