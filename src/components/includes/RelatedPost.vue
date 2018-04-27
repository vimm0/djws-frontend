<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-expansion-panel>
          <v-card-title class="card-title">Related Posts</v-card-title>
          <related-post :endPoint="this.$options.endpoint">
            <template slot="results" slot-scope="res">
              <v-expansion-panel>
                <v-expansion-panel-content v-for="obj in res.results.slice(-4)" :key="obj.id">
                  <div slot="header">{{obj.title}}</div>
                  <v-card>
                    <v-list two-line>

                      <v-list-tile avatar :key="obj.title" @click="">

                        <!--<v-card-actions>-->
                        <v-list-tile-avatar>
                          <img src="https://avatars3.githubusercontent.com/u/17888497?s=460&v=4" alt="img">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>asdasdda</v-list-tile-title>
                          <v-list-tile-sub-title v-html="subtitle"></v-list-tile-sub-title>

                          <v-list-tile-sub-title>
                            <ul>
                              <div v-if="obj.tag_list">
                                <li class="meta-list">
                                  <template v-if="pluralTag(obj.tag_count)">Tags</template>
                                  <template v-else>Tag</template>
                                </li>
                                <v-chip><a href="#">{{obj.tag_list | capitalizeTags}}</a></v-chip>
                              </div>
                              <li v-else class="meta-list">No tagged yet.</li>
                            </ul>
                          </v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </template>
          </related-post>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Collection from '../Collection/Collection.vue'
  import Helper from '../../mixins/Helper'

  export default {
    name: 'RelatedPost',
    data () {
      return {
        divider: true,
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      }
    },
    mixins: [Helper],
    components: {
      'related-post': Collection
    },
    endpoint: 'post/'
  }
</script>
