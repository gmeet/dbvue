import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/pages/Movie'
import Home from '@/pages/Home'
import Search from '@/pages/Search'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
