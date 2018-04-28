<template>
  <div id="post-detail">
    <v-flex>
      <div class="post">
        <template v-if="post.image"><v-card-media :src="post.image" height="200px" width="auto">
        </v-card-media></template>
        <template v-else><div class="image" :style="{backgroundColor: randomColor(post.id)}"></div></template>
        <v-card-title primary-title>
          <div class="meta">
            <h1 class="detail-title mt-2">{{ post.title }}</h1>
            <p>Published: {{ post.publish|jsDate }} ● Updated: {{ post.updated|jsDate }}</p>
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
        <vue-simple-markdown class='post-detail-item' :source="post.content"></vue-simple-markdown>
        <br/>
      </v-card-actions>
    </v-flex>
    <author></author>
  </div>
</template>
<script>
  import Helper from '../../../mixins/Helper'
  import Author from '../../includes/Author'

  export default {
    name: 'post-detail',
    data () {
      return {
        post: [],
        errors: [],
        draft: false,
        tag: false
      }
    },
    mixins: [Helper],
    components: { 'author': Author },
    created () {
      global.axios.get('post/' + this.$route.params.postId)
        .then(response => {
          this.post = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
