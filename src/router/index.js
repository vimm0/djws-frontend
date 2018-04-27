import Vue from 'vue'
import Router from 'vue-router'

import PostList from '@/components/apps/post/PostList'
import PostDetail from '@/components/apps/post/PostDetail'

import SiteMap from '@/components/includes/SiteMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
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
