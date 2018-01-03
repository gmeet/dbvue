<template>
  <section id="search">
    <section class="header">
      <span class="close" @click="endSearch">关闭</span><input class="input" type="search" @blur="isBackground" @keyup.enter="getSearch" v-model="keyword">
    </section>
    <ul class="items">
      <li v-for="item in types" :key="item.id">
        <router-link class="item" to="/">
          <strong :style="{color:item.color}">{{item.text}}</strong>
          <span>{{item.desc}}</span>
        </router-link>
      </li>  
    </ul>
    <div class="navBottom">
      <div class="nav-item">
        <router-link class="taga" to="/">注册账号</router-link>
        <router-link class="taga" to="/">登录豆瓣</router-link>
      </div>
      <div class="nav-item">
        <router-link class="taga" to="/">使用桌面版</router-link>
        <router-link class="taga" to="/">使用豆瓣App</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      keyword: '',
      types: [{
        id: 1,
        text: '电影',
        desc: '影院热映',
        url: '/movie',
        color: 'rgb(35, 132, 232)'
      },
      {
        id: 2,
        text: '电视',
        desc: '正在热播',
        url: '/movie',
        color: 'rgb(122, 106, 219)'
      },
      {
        id: 3,
        text: '图书',
        desc: '畅销排行',
        url: '/movie',
        color: 'rgb(159, 120, 96)'
      },
      {
        id: 4,
        text: '同城',
        desc: '周末活动',
        url: '/movie',
        color: 'rgb(230, 70, 126)'
      },
      {
        id: 5,
        text: '小组',
        desc: '志趣相投',
        url: '/movie',
        color: 'rgb(42, 184, 204)'
      },
      {
        id: 6,
        text: '音乐',
        desc: '新碟榜',
        url: '/movie',
        color: 'rgb(244, 143, 46)'
      },
      {
        id: 7,
        text: '阅读',
        desc: '电子书',
        url: '/movie',
        color: 'rgb(159, 120, 96)'
      },
      {
        id: 8,
        text: '游戏',
        desc: '虚拟世界',
        url: '/movie',
        color: 'rgb(87, 116, 197)'
      },
      {
        id: 9,
        text: '应用',
        desc: '玩手机',
        url: '/movie',
        color: 'rgb(89, 108, 221)'
      },
      {
        id: 10,
        text: '广播',
        desc: '友邻动态',
        url: '/movie',
        color: 'rgb(225, 100, 77)'
      },
      {
        id: 11,
        text: 'FM',
        desc: '红心歌单',
        url: '/movie',
        color: 'rgb(64, 207, 169)'
      },
      {
        id: 12,
        text: '市集',
        desc: '购买原创',
        url: '/movie',
        color: 'rgb(66, 189, 86)'
      }]
    }
  },
  methods: {
    isBackground () {
      if (this.keyword.length > 0) {
        console.log(111)
      }
    },
    endSearch () {
      this.$emit('endSearch')
    },
    getSearch () {
      this.$jsonp(`https://api.douban.com/v2/movie/search?q=${this.keyword}`)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#search {
  position: fixed;
  height: 100vh;
  font-size: .29rem;
  z-index: 2;
  background: #fff;

  .header {
    box-sizing: border-box;
    padding: .3rem .16rem;
    border-bottom: 1px solid #e3e3e3;
    .close {
      color: #42bd56;
    }
    .input {
      width: 88%;
      height: .56rem;
      text-indent: .1rem;
      margin-left: .2rem;
      border-radius: 3px;
      color: #333;
      border: none;
      background: url(../assets/images/searchInput.png) no-repeat 50% #f3f3f3;
      background-size: .36rem;
    }
    .input:focus {
      border: 1px solid #FFD700;
      box-shadow: 0 0 2px #FFD700;
      background: #f3f3f3;
    }
  }
  .items {
    width: 100%;
    overflow: hidden;

    &:after {
      content: '';
      display: table;
      clear: both;
    }

    li {
      padding: .5rem 0 0;
      text-align: center;
      display: block;
      width: 33%;
      box-sizing: border-box;
      float: left;
    }
    .item {
      color: #333;
    }
    span {
      font-size: .2rem;
    }
    strong {
      display: block;
      width: 100%;
      font-size: .46rem;
      font-weight: 200;
    }
  }
  .navBottom {
    padding: .4rem 0 0;
    width: 100%;
    border-bottom: 1px solid #f3f3f3;

    .nav-item {
      width: 100%;
      overflow: hidden;
      padding: .2rem 0;
      font-size: .27rem;
      border-top: 1px solid #f3f3f3;

      &:after {
        content: '';
        display: table;
        clear: both;
      }
      .taga {
        text-align: center;
        width: 50%;
        display: inline-block;
        box-sizing: border-box;
        color: #42bd56;
        float: left;
      }
      .taga:nth-of-type(2n) {
        border-left: 1px solid #e3e3e3;
      }
    }
  }

}
</style>
