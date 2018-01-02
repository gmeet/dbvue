<template>
    <section id="douban">
        <router-link to="/"> <img class="logo" src="../assets/images/logo.png" alt="logo"></router-link>
        <nav>
            <router-link v-for="item in headerJSON" :key="item.id" :to="item.url" tag="a" :style="{color:item.color}">{{item.title}}</router-link>
            <router-link to="/search" tag="span"><img src="../assets/images/search.png" alt="search"/></router-link>
        </nav>
    </section>
</template>
<script>
export default {
  data () {
    return {
      logo: require('../assets/images/logo.png'),
      headerJSON: {
        movies: {
          id: 1,
          url: '/movie',
          title: '电影',
          color: '#2384E8'
        },
        books: {
          id: 2,
          url: '/books',
          title: '图书',
          color: '#9F7860'
        },
        airing: {
          id: 3,
          url: '/airing',
          title: '广播',
          color: '#E4A813'
        },
        groups: {
          id: 4,
          url: '/groups',
          title: '小组',
          color: '#2AB8CC'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #douban {
    padding: .2rem .3rem;
    display: flex;
    font-size: .26rem;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;

    .logo {
      display: inline-block;
      width : 46px;
      height: 22px;
    }

    nav  {
      a {
        color: #42bd56;
        text-decoration: none;
        padding: 0 .16rem
      }
      img {
        display: inline-block;
        width: .54rem;
        vertical-align: middle;
        padding-left: .16rem;
      }
    }     
  }
</style>
