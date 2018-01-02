<template>
  <section id="bottom">
    <section class="content">
      <img src="../assets/images/dblogo.png" alt="豆瓣logo" />
      <aside>
        <h1>豆瓣</h1>
        <slot></slot> 
      </aside>
    </section>
    <section class="link">
      <router-link to="/" tag="p">去App Store免费下载iOS客户端</router-link>
    </section>
  </section>
</template>
<style lang="scss" scoped>
#bottom {
  text-align: center;
  font-size: .24rem;

  .content {
    padding: 1.4rem 0 0;
    display: inline-block;
    text-align: left;

    img {
      width: .9rem;
      height: .9rem;
      float: left;
      margin-right: .2rem;
    }

    aside {
      overflow: hidden;
    }

    h1 {
      font-size: .42rem;
      font-weight: 200;
    }
  }

  .link {
    padding: .4rem 0 .8rem;
    color: #42bd56;
    font-size: .28rem;
  }
}
</style>
