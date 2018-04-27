<template>
  <div class="sitemap">
    <div class="container">
      <div class="post sitemap">
        <h2>Sitemap</h2>
        <ul>
          <site-map :endPoint="this.$options.endpoint">
            <template slot="results" slot-scope="res">
              <li v-for='post in res.results'>
                <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
                  {{ post.title }}
                </router-link>
                - {{ post.publish}}
              </li>
            </template>
          </site-map>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Collection from '../Collection/Collection.vue'

  export default {
    name: 'SiteMap',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    components: {
      'site-map': Collection
    },
    endpoint: 'post/'
  }
</script>
