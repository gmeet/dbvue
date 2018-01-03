import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/pages/Movie'
import Home from '@/pages/Home'
import MovieDetail from '@/pages/MovieDetail'

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
      path: '/movieDetail/:subject',
      name: 'MovieDetail',
      component: MovieDetail
    }
  ]
})
