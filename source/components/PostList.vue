<template>
    <div id="main-content">
        <h1>Main content Here!!</h1>
        <div class="post sitemap" v-for="post in posts">
            <img src='#' class='img-responsive'/>
            <!--if draft-->
            <h3>Staff only: Draft</h3>
            <!--if more than published today-->
            <h3>Staff Only: Future Post</h3>
            <!--endif-->
            <h4 class="mb-3"><a href='#'>{{ post.title }}</a>
                <small>{{ post.publish }}</small>
            </h4>
            <p>Author: {{ post.user }}</p>
            <p>{{ post.content }}</p>
            <button type="button" class="btn btn-outline-info"><a href="#">view</a></button>
            <hr/>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'main-content',
//        component: {
//            'sitemap': SiteMap,
//        },
        data() {
            return {posts: ''}
        },
        created: function () {
            this.$http.get('http://127.0.0.1:8000/v1/post/').then(response => {
                this.posts = response.body;
            }, response => {
                // error callback
                alert("error")
            }).bind(this);
        }
    }


</script>
<style lang="scss">

</style>
