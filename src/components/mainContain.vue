<template>
    <section id="main-contain">
      <section id="top">
          {{typeTitle}}
          <router-link to="/more">更多</router-link>
      </section>
      <section id="box">    
        <router-link v-for="(item, index) in movieList" :key="index" to="/movie" class="wraper">
          <img :src="item.cover.url" alt="fh">
          <section>
            <p>{{item.title}}</p>
            <p> 
              <span class="nostart"></span>
              <span class="nostart"></span>
              <span class="nostart"></span>
              <span class="nostart"></span>
              <span class="nostart"></span>                        
               {{item.rating.value}}
            </p>
          </section>
        </router-link>   
      </section>       
    </section>
</template>
<script>
export default {
  props: {
    typeTitle: {
      type: String
    },
    movieInfo: {
      default: {}
    }
  },
  data () {
    return {
      typesName: '',
      movieName: '',
      movieList: null,
      score: 0,
      start: require('../assets/images/fillStart.png')
    }
  },
  created () {
    this.movieName = this.movieInfo.subject_collection.name
    this.movieList = this.movieInfo.subject_collection_items
  },
  filter: {
    start (value) {
      switch (true) {
        case value > 1 && value < 3:
          return 1
        case value > 3 && value < 5:
          return 2
        case value > 5 && value < 7:
          return 3
        case value > 7 && value < 9:
          return 4
        case value > 9:
          return 5
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #main-contain {
      #top {
        display: flex;
        justify-content: space-between;
        padding: .2rem .3rem;
        font-size: .3rem;

        a {
          font-size: .26rem;
          color: #42bd56;
        }
      }
      #box {
        white-space: nowrap;
        overflow-x: auto;
        padding: .15rem 0 .43rem 0;
        &::-webkit-scrollbar {
            display: none;
        }
      }
      .wraper {
        display: inline-block;
        width: 2rem;
        margin-left: .2rem;

        &:nth-of-type(1) {
          margin-left: .3rem;
        }
        &:nth-last-of-type(1) {
          margin-right: .3rem;
        }

        img {
          display: inline-block;
          width: 100%;
          // padding-top: 120%;
        }

        section {
          font-size: .26rem;
          text-align: center;
          color: #333;

          p:nth-of-type(1) {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: .1rem 0;
          }
          p:nth-last-of-type(1) {
            color: #aaa;
            font-size: .1rem;
          }
        }  
        .start,.nostart {
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
      }
  }
</style>
