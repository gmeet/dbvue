<template>
  <section>
    <div style="{width: 100px,height: 100px,background: '#aaa'}"></div>
    <HomeHeader/>
    <HomeTitle/>
    <HomeList/>
  </section>
</template>
<script>
import HomeHeader from '@/components/header'
import HomeTitle from '../components/homeHeader'
import HomeList from '../components/homeList'
export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.getAjax()
  },
  methods: {
    getAjax () {
      // this.$jsonp('https://api.douban.com/v2/movie/search?q=生化危机')
      // .then((res) => {
      //   console.log(res)
      // }).catch((err) => {
      //   console.log(err)
      // })
    }
  },
  components: {
    HomeHeader,
    HomeTitle,
    HomeList
  }
}
</script>
<style lang="scss" scoped>

</style>
