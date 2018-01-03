<template>
    <section id="main-contain">
      <section id="top">
          {{typeTitle}}
          <router-link to="/more">更多</router-link>
      </section>
      <section id="box">    
        <router-link v-for="(item, index) in movieList" :key="index" :to="`/movieDetail/${item.id}`" class="wraper">
        <section class="img" :style="{'background-image': `url(${item.cover.url}`}"></section>
          <section>
            <p>{{item.title}}</p>
            <MainStart v-if="item.rating.value" :score="item.rating.value" />
          </section>
        </router-link>   
      </section>       
    </section>
</template>
<script>
import MainStart from '../components/start.vue'

export default {
  props: {
    typeTitle: {
      type: String
    },
    movieInfo: {
      default: {}
    }
  },
  data () {
    return {
      typesName: '',
      movieName: '',
      movieList: null,
      score: 0,
      start: require('../assets/images/fillStart.png')
    }
  },
  created () {
    this.movieName = this.movieInfo.subject_collection.name
    this.movieList = this.movieInfo.subject_collection_items
  },
  methods: {
    getStart (value) {
      let start = this.startNumber(value)
      let nodeEle = []
      for (let i = 0; i < start; i++) {
        nodeEle.push('start')
      }
      for (let j = 0; j < (5 - start); j++) {
        nodeEle.push('nostart')
      }
      return nodeEle
    },
    startNumber (value) {
      switch (true) {
        case value > 1 && value <= 3:
          return 1
        case value > 3 && value <= 5:
          return 2
        case value > 5 && value <= 7:
          return 3
        case value > 7 && value < 9:
          return 4
        case value >= 9:
          return 5
      }
    }
  },
  components: {
    MainStart
  }
}
</script>
<style lang="scss" scoped>
  #main-contain {
      #top {
        display: flex;
        justify-content: space-between;
        padding: .2rem .3rem;
        font-size: .3rem;

        a {
          font-size: .26rem;
          color: #42bd56;
        }
      }
      #box {
        white-space: nowrap;
        overflow-x: auto;
        padding: .15rem 0 .43rem 0;
        &::-webkit-scrollbar {
            display: none;
        }
      }
      .wraper {
        display: inline-block;
        width: 2rem;
        margin-left: .2rem;

        &:nth-of-type(1) {
          margin-left: .3rem;
        }
        &:nth-last-of-type(1) {
          margin-right: .3rem;
        }

        .img {
          display: inline-block;
          width: 100%;
          background-size: 100%;


          &::after {
            content: '';
            display: block;
            padding-top: 140%;
          }
        }

        section {
          font-size: .26rem;
          text-align: center;
          color: #333;

          p:nth-of-type(1) {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: .1rem 0;
          }
          p:nth-last-of-type(1) {
            color: #aaa;
            font-size: .1rem;
          }
        }   
      }
  }
</style>
