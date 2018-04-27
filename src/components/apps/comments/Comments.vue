<template>
  <div id="comments">
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-expansion-panel popout>
            <v-expansion-panel-content v-for="comment in comments" :key="comment.id">
              <div slot="header">{{comment.post_name}}</div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>{{ getCommentContent(comment.content) }}
                    <small class="meta meta-comment">{{comment.timestamp|jsDate}} By: {{comment.commenter}}</small>
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
  import Helper from '../../../mixins/Helper'

  export default {
    name: 'comments',
    data () {
      return {
        comments: [],
        errors: [],
        tag: false
      }
    },
    mixins: [Helper],
    created () {
      global.axios.get(`comment/`)
        .then(response => {
          this.comments = response.data
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
