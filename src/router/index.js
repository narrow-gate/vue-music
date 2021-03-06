import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Tab from 'components/tab/tab'
import Singer from 'components/singer/singer'
import SingerDetail from 'components/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/tab',
      name: 'tab',
      component: Tab
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children:[
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
