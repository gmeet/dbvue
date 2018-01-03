<template>
  <p>
    <span v-for="(startItem,subIndex) in getStart(score)" :key="subIndex" :class="startItem"></span>
    <strong>{{score}}</strong>
    <slot></slot>
  </p>
</template>
<script>
export default {
  props: {
    score: Number
  },
  methods: {
    getStart (value) {
      let start = this.startNumber(value)
      let nodeEle = []
      for (let i = 0; i < start; i++) {
        nodeEle.push('start')
      }
      for (let j = 0; j < (5 - start); j++) {
        nodeEle.push('nostart')
      }
      return nodeEle
    },
    startNumber (value) {
      switch (true) {
        case value > 1 && value <= 3:
          return 1
        case value > 3 && value <= 5:
          return 2
        case value > 5 && value <= 7:
          return 3
        case value > 7 && value < 9:
          return 4
        case value >= 9:
          return 5
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  span {
    color: #aaa;
    font-size: .1rem;
  }
  strong {
    position: relative;
    top: .02rem;
    left: .04rem;
    margin-right: .2rem;
  }
  .start,
  .nostart {
    vertical-align: middle;
    display: inline-block;
    width: .22rem;
    height: .22rem;
    background: url(../assets/images/fillStart.png) no-repeat;
    background-size: 100% 100%;
  }   
  .nostart {
    background: url(../assets/images/noStart.png) no-repeat;
    background-size: 100% 100%;
  } 
</style>
