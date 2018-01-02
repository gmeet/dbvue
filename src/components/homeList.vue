<template>
<section id="homeList">
  <section class="listBox">
    <router-link class="listItem" to="/movie" tag="section">
      <section class="homeText">
        <div class="listImg"><div></div></div>
        <h1>我见过最美的杨贵妃不是在《妖猫传》，而是在华清池的贵妃出浴</h1>
        <p>白居易《长恨歌》中没讲到的“华清赐浴”的历史背景是这样的。</p>
      </section>
    <p  class="bottomBar"> by 豆瓣时间  <span>来自栏目一周热门图书</span></p>
    </router-link>
    <router-link class="listItem" to="/movie" tag="section">
      <section class="homeText">
        <div class="listImg"><div></div></div>
        <h1>我见过最美的杨贵妃不是在《妖猫传》，而是在华清池的贵妃出浴</h1>
        <p>白居易《长恨歌》中没讲到的“华清赐浴”的历史背景是这样的。</p>
      </section>
    <p  class="bottomBar"> by 豆瓣时间  <span>来自栏目一周热门图书</span></p>
    </router-link>
  </section>
  <section class="listBox">
    <h1 class="rest"> 2017-12-26 </h1>
    <router-link class="listItem" to="/movie" tag="section">
      <section class="homeText">
        <div class="listImg"><div></div></div>
        <h1>我见过最美的杨贵妃不是在《妖猫传》，而是在华清池的贵妃出浴</h1>
        <p>白居易《长恨歌》中没讲到的“华清赐浴”的历史背景是这样的。</p>
      </section>
    <p  class="bottomBar"> by 豆瓣时间  <span>来自栏目一周热门图书</span></p>
    </router-link>  
  </section>

</section>

</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  #homeList {
    position: relative;
    color: #494949;
    text-align: justify;

    .listItem {
      position: relative;
      padding: .3rem .4rem .3rem 0;
      margin-left: .4rem;
      font-size: .28rem;
    }
    .listItem + .listItem::before {
      position: absolute;
      top: 0;
      left: 0;
      display: table;
      content: '';
      width: 100%;
      height: 1px;
      background: #e3e3e3;
      transform: scaleY(0.5)
    }


    .rest {
      position: relative;
      padding: .4rem 0;
      font-size: .32rem;
      text-align: center;
      &::before,
      &::after {
        position: absolute;
        left: 0;
        display: table;
        content: '';
        width: 100%;
        height: 1px;
        background: #e3e3e3;
        transform: scaleY(0.5)
      }
      &::before {
        top: 0;
      }
      &::after {
        bottom: 0;
      }
      // border-top: 1px solid #e3e3e3;
      // border-bottom: 1px solid #e3e3e3;
    }

    .homeText {
      text-align: justify;
      h1 {
        font-size: .28rem;
      }
      p {
        font-size: .24rem;
        padding: .16rem 0 .3rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      &:after {
        content: '';
        display: table;
        clear: both;
      }
    }
    .bottomBar {
      padding: .1rem 0 0;
      font-size: .22rem;
      color: #aaa; 
      span {
        float: right;
      }
    }
    .listImg {
      float: right;
      width: 25.6%;
      margin-left: .24rem;
      box-sizing: border-box;

      div {
        padding-top: 100%;
        background: url("https://img1.doubanio.com/lpic/s29591148.jpg") center center / cover no-repeat rgb(250, 250, 250)
      }
    }

    p {
      font-size: .24rem;
      color: #aaa;
    }
  }
</style>

