<template>
  <section id="findMovie">
    <slot></slot>
    <ul>
      <li v-for="item in infos" :key="item.id" v-if="item.id !== 5"><router-link class="item" :to="item.url" :style="{'color':getRandomColor()}">{{item.text}}</router-link></li>
      <li v-else></li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    infos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      borderColors: ['#42BD56', '#FFAC2D', '#CC3344', '#FF4055', '#2384E8', '#2384E8', '#42BD56', '#FFC46C']
    }
  },
  methods: {
    getRandomColor () {
      return this.borderColors[Math.floor(Math.random() * this.borderColors.length)]
    }
  }
}
</script>
<style lang="scss" scoped>
#findMovie {
  padding: .2rem 0 0;
  font-size: .26rem;

  h2 {
    font-size: .3rem;
    text-indent: .4rem;
    font-weight: 200;
  }

  ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: .1rem 0 .4rem;
    padding-left: .4rem; 

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      padding-top: .1rem;
      display: inline-block;
      border-radius: 2px;
      margin: 0 .4rem 0 0;
    }

    li:nth-of-type(5) {
      display: block;
      width: 100%;
    }

    .item {
      display: block;
      height: 1rem;
      padding: 0 .6rem;
      line-height: 1rem;
      border: 1px solid;
      border-radius: 6px;
    }
  }
}
</style>
