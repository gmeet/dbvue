<template>
  <section id="classify">
    <h2>分类浏览</h2>
    <ul>
      <li v-for="item in types" :key="item.id">
        <router-link class="item" :to="item.url" tag="a">{{item.text}} <span v-if="item.id" class="allow">&gt;</span></router-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data () {
    return {
      types: [{
        id: 1,
        url: '/',
        text: '经典'
      },
      {
        id: 2,
        url: '/',
        text: '冷门佳片'
      },
      {
        id: 3,
        url: '/',
        text: '豆瓣高分'
      },
      {
        id: 4,
        url: '/',
        text: '动作'
      },
      {
        id: 5,
        url: '/',
        text: '喜剧'
      },
      {
        id: 6,
        url: '/',
        text: '爱情'
      },
      {
        id: 7,
        url: '/',
        text: '悬疑'
      },
      {
        id: 8,
        url: '/',
        text: '恐怖'
      },
      {
        id: 9,
        url: '/',
        text: '科幻'
      },
      {
        id: 10,
        url: '/',
        text: '治愈'
      },
      {
        id: 11,
        url: '/',
        text: '文艺'
      }]
    }
  },
  created () {
    this.getTurnLength()
  },
  methods: {
    getTurnLength () {
      if (this.types.length % 2 !== 0) {
        this.types.push(
          {
            id: '',
            url: '',
            text: ' '
          }
        )
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#classify {
  font-size: .28rem;
  margin-left: .28rem;

  h2 {
    font-size: .3rem;
    font-weight: 200;
    padding-bottom: .3rem;
  }

  ul {
    overflow: hidden;
    border-bottom: 1px solid #e3e3e3;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    li:nth-child(2n) {
      .item {
        border-right: none;
        text-indent: .4rem;
        padding-right: .2rem;
      }
    }

    .allow {
      float: right;
      color: #ccc;
    }

    .item {
      width: 50%;
      padding: .2rem 0;
      padding-right: .4rem;
      float: left;
      color: #42bd56;
      border-right: 1px solid #e3e3e3;
      border-top: 1px solid #e3e3e3;
    }
  }

  h1 {
    font-weight: 400;
  }
}
</style>
