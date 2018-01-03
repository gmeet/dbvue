<template>
  <section id="intro">
    <h5>前任3：再见前任的剧情简介</h5>
    <p>
      一对好基友孟云（韩庚 饰）和余飞（郑恺 饰）跟女友都因为一点小事宣告分手，并且“拒绝挽回，死不认错”。
      两人在夜店、派对与交友软件上放飞人生第二春，大肆庆祝“黄金单身期”，从而引发了一系列好笑的故事。
      孟云与女友同甘共苦却难逃“五年之痒”，余飞与女友则棋逢敌手相爱相杀无绝期。
      然而现实的“打脸”却来得猝不及防：一对推拉纠结零往来，一对纠缠互怼全交代。
      两对恋人都将面对最终的选择：是再次相见？还是再也不见？
      <span @click="showAll">展开</span>
    </p>
  </section>
</template>
<script>
export default {
  props: ['datas'],
  data () {
    return {
      introText: `一对好基友孟云（韩庚 饰）和余飞（郑恺 饰）跟女友都因为一点小事宣告分手，并且“拒绝挽回，死不认错”。
      两人在夜店、派对与交友软件上放飞人生第二春，大肆庆祝“黄金单身期”，从而引发了一系列好笑的故事。
      孟云与女友同甘共苦却难逃“五年之痒”，余飞与女友则棋逢敌手相爱相杀无绝期。
      然而现实的“打脸”却来得猝不及防：一对推拉纠结零往来，一对纠缠互怼全交代。
      两对恋人都将面对最终的选择：是再次相见？还是再也不见？`
    }
  },
  methods: {
    showAll () {
      
    }
  }
}
</script>
<style lang="scss" scoped>
#intro {
  padding: 0 .4rem;
  font-size: .28rem;

  h5 {
    color: #aaa;
    font-weight: 200;
    font-size: .29rem;
    padding: 0 0 .24rem;
  }
  p {
    color: #333;
    line-height: .42rem;
    height: 3rem;
    text-align: justify;
  }
}
</style>
