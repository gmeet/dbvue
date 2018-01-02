import Vue from 'vue'
import Vuex from 'vuex'

import movieList from './module/movieList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    movieList
  }
})
