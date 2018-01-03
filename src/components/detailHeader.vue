<template>
  <section id="detailInfo">
    <h1>前任3：再见前任</h1>
    <section class="subjectInfo">
      <aside class="right">
        <img class="cover" src="../assets/images/fh.jpg" alt="">
      </aside>
      <aside class="left">
        <Start class="startComponent" :score="6"><span class="comment"> 23042人评价</span></Start>
        <p>
          120分钟 / 喜剧 / 爱情 / 田羽生(导演) / 韩庚 / 郑恺 / 于文文 / 2017-12-29(中国大陆) 上映
        </p>
      </aside>
    </section>
  </section>
</template>
<script>
import Start from '../components/start.vue'
export default {
  data () {
    return {
      title: ''
    }
  },
  components: {
    Start
  }
}
</script>
<style lang="scss" scoped>
#detailInfo {
  padding:0 .3rem;
  padding-top: .6rem;

  .cover {
    width: 1.82rem;
  }

  h1 {
    font-size: .4rem;
    font-weight: 200;
    word-break: break-all;
    color: #444;
  }
  .subjectInfo {
    overflow: hidden;

    .right {
      float: right;
    }

    .left {
      margin-right: 2.4rem;
      padding-bottom: .8rem; 

      .startComponent {
        margin-top: .1rem; 
        margin-bottom: .3rem;
        font-size: .28rem;
        color: #666;
      }

      .comment {
        position: relative;
        top: .02rem;
        font-size: .26rem;
      }
    }
  }
}  
</style>
