import Vue from 'vue'
import Router from 'vue-router'
import tabBar from '@/components/tabBar'
import itemList from '@/components/itemList'
import itemDetail from '@/components/itemDetail'
import publish from '@/components/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabBar',
      component: tabBar
    },
    {
      path: '/itemList',
      name: 'itemList',
      component: itemList
    },
    {
      path: '/itemDetail',
      name: 'itemDetail',
      component: itemDetail
    },
    {
      path: '/publish',
      name: 'publish',
      component: publish
    }
  ]
})
