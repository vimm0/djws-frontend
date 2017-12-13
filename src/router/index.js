import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import PostCreate from '@/components/PostCreate'

import SiteMap from '@/components/SiteMap'

Vue.use(Router)
// https://stackoverflow.com/questions/42904025/vuejs-vue-router-create-details-page-from-list-item#answer-42905800
// https://medium.com/@softwarecf/getting-started-with-vue-router-37cd7d783245
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/create',
      name: 'PostCreate',
      component: PostCreate
    },
    {
      path: '/post/:postId',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/sitemap',
      name: 'SiteMap',
      component: SiteMap
    }
  ]
})
