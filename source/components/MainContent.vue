<template>
    <div id="main-content">
        <h1>Main content Here!!</h1>
        <div class="post sitemap">
            <img src='https://opendata.cityofnewyork.us/wp-content/uploads/2016/12/placeholder-1200x400.svg'
                 class='img-responsive'/>
            <h1 class="detail-title">{{ post.title }}
                <small class="detail-draft">
                    <span>Draft</span>
                </small>
            </h1>
        </div>
        <div class="meta">
            <p>By: {{ user }} ● {{ post.publish }} ● {{ post.updated }}</p>
            <p>Read time:</p>
            <p>Views: 12 times</p>
            <ul>
                <li class="meta-list">Tag{{ num_tags }}:</li>
                <li class="meta-list"><a href='#'>| {{ tag }} </a></li>
                <li class="meta-list">No tagged yet</li>
            </ul>
            <p>Author: {{ post.user }}</p>
        </div>
        <div class='row'>
            <div class=' col-md-12 col-lg-12'>
                <!-- this is the content -->
                <div class='post-detail-item'>{{ post.content }} </div>
                <hr/>
                <br/>
                <!-- share button -->
                <span class="lead">Share on:</span>

                <hr/>
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
    //https://stackoverflow.com/questions/35840862/vue-js-cannot-read-property-get-of-undefined-on-get-request#answer-35841046
    //http://jsfiddle.net/dccbbkam/4/
    //https://tutorialzine.com/2016/08/building-your-first-app-with-vue-js

    //    import SiteMap from './web_shikshalaya/SiteMap.vue'
    export default {
        name: 'main-content',
        data() {
            return {post: ''}
        },
        created: function () {
            this.$http.get('http://127.0.0.1:8000/v1/post/1').then(response => {
                this.post = response.body;
            }, response => {
                // error callback
                alert("error")
            }).bind(this);
        }
    }


</script>
<style lang="scss">

</style>
