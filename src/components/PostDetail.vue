<template>
  <div id="post-detail">
    <div class="post sitemap">
      <img src='https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg'
           class='img-responsive'/>
      <h1 class="detail-title">{{ post.title }}
        <small v-if='draft' class="detail-draft">
          <span>Draft</span>
        </small>
      </h1>
    </div>
    <div class="meta">
      <p>Published: {{ post.publish }} ● Updated: {{ post.updated }}</p>
      <p>Read time: {{post.read_time}} min</p>
      <p>Views: 12 times</p>
      <ul>
        <div v-if="tag">
          <li class="meta-list">Tag:</li>
          <li class="meta-list"><a href='#'>| tag_num </a></li>
        </div>
        <li v-else class="meta-list">No tagged yet.</li>
      </ul>
      <p>Author: {{ post.author | capitalize}}</p>
    </div>
    <div class='row'>
      <div class=' col-md-12 col-lg-12'>
        <!-- this is the content -->
        <div class='post-detail-item' v-html="post.content"></div>
        <hr/>
        <br/>
        <!-- share button -->
        <span class="lead">Share on:</span>
        <hr/>
        <iframe class='mt-2'
                src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId"
                width="59" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                allowTransparency="true"></iframe>
        <!--<hr/>-->
        <!-- author and recent post-->
        <div class="card text-center">
          <div class="card-header">
            Author
          </div>
          <div class="card-block">
            <div class="media ">
              <!--<a><img class="img-responsive" alt="No Internet" height="62" width="52"/></a>-->
              <img class="d-flex mr-3"
                   src="https://yoast-mercury.s3.amazonaws.com/uploads/2015/09/Avatar_Joost_500x500.png"
                   alt="Generic placeholder image" height="100" width="100">
              <div class="media-body">
                <h5 class="mt-3 auth-name"><a href="https://vimm0.github.io" title="personal-website">Vimm0 |</a>
                  kathmandu</h5>
                <p>Python enthusiast, Linux enthusiast and Senior writer at Learning Academy.<br>
                  website:<a href="https://vimm0-blog.herokuapp.com" class="auth-website">https://vimm0-blog.herokuapp.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
        <!-- related posts -->
        <div class="card mt-4">
          <div class="card-header">
            Related Posts
          </div>
          <div class="card-block">
            <a href="#!" class="collection-item">New<span class="badge-md">1</span></a>
            <a href="#!" class="collection-item">Comments<span class="new badge-md">4</span></a>
            <a href="#!" class="collection-item">Updates<span class="badge-md">14</span></a>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
  // https://stackoverflow.com/questions/35840862/vue-js-cannot-read-property-get-of-undefined-on-get-request#answer-35841046
  // http://jsfiddle.net/dccbbkam/4/
  // https://tutorialzine.com/2016/08/building-your-first-app-with-vue-js
  import axios from 'axios'
  //  https://alligator.io/vuejs/rest-api-axios/
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
    // Fetches posts when the component is created.
    created () {
      axios.get(`http://127.0.0.1:8000/v1/post/` + this.$route.params.postId)
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
      }
    }
  }
</script>
<style lang="scss">

</style>
