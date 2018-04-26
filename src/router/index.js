import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import PostCreate from '@/components/PostCreate'

import SiteMap from '@/components/SiteMap'

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
