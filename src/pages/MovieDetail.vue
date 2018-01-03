<template>
  <section id="detail">
    <DetailHeader />
    <DetailTitle />
    <WantMovie />
    <Introduce />
  </section>
</template>
<script>
import DetailHeader from '../components/header.vue'
import DetailTitle from '../components/detailHeader.vue'
import WantMovie from '../components/wantMovie.vue'
import Introduce from '../components/intro.vue'

export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    getDatas () {
      console.log(111)
    }
  },
  components: {
    DetailHeader,
    DetailTitle,
    WantMovie,
    Introduce
  }
}
</script>
<style lang="scss" scoped>
#detail {
  font-size: .24rem;
}
</style>
