<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recomList="recommendList"></home-recommend>
    <home-week :weekList="weekendList"></home-week>
  </div>
</template>
<script>
import HomeHeader from "./components/header.vue";
import HomeSwiper from "./components/swiper.vue";
import HomeIcon from "./components/iconapp.vue";
import HomeRecommend from "./components/recommend";
import HomeWeek from "./components/weekend";
const axios = require("axios");
export default {
  name: "Home",
  data() {
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
     weekendList:[]
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeek,
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        console.log(res.data);
        this.swiperList= res.data.swiperList,
        this.iconList=res.data.iconList,
        this.recommendList=res.data.recommendList,
        this.weekendList=res.data.weekendList

      }
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
