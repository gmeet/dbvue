<template>
  <section id="homeHeader">
    <router-link class="item" v-for="item in routerTitle" :key="item.id" :to="item.url">{{item.title}}</router-link>
  </section>
</template>
<script>
export default {
  data () {
    return {
      routerTitle: [{
        id: 1,
        url: '/movie',
        title: '影院热映'
      },
      {
        id: 2,
        url: '/movie',
        title: '同城活动'
      },
      {
        id: 3,
        url: '/movie',
        title: '豆瓣时间'
      },
      {
        id: 4,
        url: '/movie',
        title: '使用豆瓣App'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  #homeHeader {
    padding: .6rem .4rem;
    .item {
      margin: 0;
      display: inline-block;
      width: 50%;
      font-size: .3rem;
      text-align: center;
      color: #494949;
      padding: .26rem 0;
      background: #f6f6f6;
      outline: .12rem solid #fff;
    }
  }

</style>
