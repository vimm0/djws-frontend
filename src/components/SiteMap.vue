<template>
  <div class="hello">
    <div class="container">
      <div class="post sitemap">
        <h2>Sitemap</h2>
        <ul>
          <li v-for='post in posts'>
            <router-link :to="{ name: 'PostDetail', params: { postId: post.id }}">
              {{ post.title }}
            </router-link>
            - {{ post.publish}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SiteMap',
    data () {
      return {
        posts: [],
        errors: []
      }
    },
    created () {
      global.axios.get(`post/`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style scoped>
</style>
