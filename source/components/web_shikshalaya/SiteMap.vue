<template>
    <div id="main-content">
        <div class="post sitemap">
            <h2>Sitemap</h2>
            <ul>
                <li v-for='post in posts'><a href="#">{{ post.title }}</a> - {{ post.publish}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
//https://stackoverflow.com/questions/35840862/vue-js-cannot-read-property-get-of-undefined-on-get-request#answer-35841046
//http://jsfiddle.net/dccbbkam/4/
//https://tutorialzine.com/2016/08/building-your-first-app-with-vue-js

    import SiteMap from './SiteMap.vue'

    export default {
        name: 'main-content',
        component: {
            'sitemap': SiteMap,
        },
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
