<template>
  <section id="want">
    <section>
      <router-link class="wantWatched" to="/">想看</router-link>
      <router-link class="wantWatched" to="/">看过</router-link>
    </section>
    <router-link to="/" tag="p">在App上保存你的观影足迹</router-link>
  </section>
</template>
<style lang="scss" scoped>
#want {
  padding: .5rem .4rem;
  font-size: .3rem;
  text-align: center;

  section {
    display: flex;
    justify-content: space-between;

    .wantWatched {
      display: inline-block;
      width: 48%;
      color: #ffb712;
      border: 1px solid;
      line-height: .54rem;
      border-radius: 3px;
    }    
  }
  p {
    margin: .2rem 0 0;
    line-height: .56rem;
    border-radius: 3px;
    border: 1px solid;
    color: #42bd56;
  }
}
</style>
