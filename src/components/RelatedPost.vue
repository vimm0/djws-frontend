<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-title class="card-title">Related Posts</v-card-title>
          <related-post v-for="post in posts">
            {{post.title}}
            <!--<v-card-actions>-->
            <!--<v-list-tile avatar  @click="">-->
            <!--<v-list-tile-avatar>-->
            <!--<img :src="img" alt="img">-->
            <!--</v-list-tile-avatar>-->
            <!--<v-list-tile-content>-->
            <!--<v-list-tile-title v-html="post.title"></v-list-tile-title>-->
            <!--&lt;!&ndash;<v-list-tile-sub-title v-html="post.content"></v-list-tile-sub-title>&ndash;&gt;-->
            <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
            <!--</v-card-actions>-->
          </related-post>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  import Collection from 'Collection/Collection'

  export default {
    name: 'RelatedPost',
    data () {
      return {}
    },
    components: {
      'post-list': Collection
    },
    endpoint: 'post/',
    created () {

    }
  }
</script>

<style scoped>
</style>
