<template>
    <section>
      <HeaderMovie />
      <MainContain  v-if="hotMovies" :typeTitle="types[0]" :movieInfo="hotMovies"></MainContain>
      <MainContain  v-if="freeMovies" :typeTitle="types[1]" :movieInfo="freeMovies"></MainContain>
      <MainContain  v-if="newMovies" :typeTitle="types[2]" :movieInfo="newMovies"></MainContain>
      <FindMovie 
        :infos="moviesName"  
       >
        <h2>发现好电影</h2>  
      </FindMovie>            
      <MovieClassify />
      <MovieBottom>
         <p>我们的精神角落</p> 
      </MovieBottom>
    </section>
</template>
<script>
import HeaderMovie from '@/components/header'
import MainContain from '@/components/mainContain'
import MovieClassify from '@/components/classify'
import FindMovie from '@/components/findMovie'
import MovieBottom from '@/components/bottom'

export default {
  data () {
    return {
      types: ['影院热映', '免费在线观影', '新片速递'],
      hotMovies: null,
      freeMovies: null,
      newMovies: null,
      moviesName: [{
        id: 1,
        url: '/',
        text: '同时入选IMDB250和豆瓣电影250的电影',
        color: '#42BD56'
      },
      {
        id: 2,
        url: '/',
        text: '带你进入不正常的世界',
        color: '#FFAC2D'
      },
      {
        id: 3,
        url: '/',
        text: '用电【影】来祭奠逝去的岁月',
        color: '#CC3344'
      },
      {
        id: 4,
        url: '/',
        text: '女孩们的故事【电影】',
        color: '#FF4055'
      },
      {
        id: 5,
        url: '/',
        text: '使用App【找电影】功能',
        color: '#2384E8'
      },
      {
        id: 6,
        url: '/',
        text: '科幻是未来的钥匙--科幻启示录【科幻题材】',
        color: '#2384E8'
      },
      {
        id: 7,
        url: '/',
        text: '美国生活面面观',
        color: '#42BD56'
      },
      {
        id: 8,
        url: '/',
        text: '2015终极期待',
        color: '#FFC46C'
      },
      {
        id: 9,
        url: '/',
        text: '经典韩国电影--收集100部',
        color: '#CC3344'
      }]
    }
  },
  created () {
    this.getHotMoives()
    this.getFreeMoives()
    this.getNewMoives()
  },
  methods: {
    getHotMoives () {
      this.$http.jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&callback&count=8')
      .then((data) => {
        this.hotMovies = JSON.parse(data.bodyText)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getFreeMoives () {
      this.$http.jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&callback&count=8')
      .then((data) => {
        this.freeMovies = JSON.parse(data.bodyText)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getNewMoives () {
      this.$http.jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&callback&count=8')
      .then((data) => {
        this.newMovies = JSON.parse(data.bodyText)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  components: {
    HeaderMovie,
    MainContain,
    MovieClassify,
    FindMovie,
    MovieBottom
  }
}
</script>
<style lang="sass" scoped>

</style>
