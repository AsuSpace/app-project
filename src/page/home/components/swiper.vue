<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="swiper.length">
      <swiper-slide v-for="item in swiper" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { headerSwiperList } from "../config";
export default {
  name: "HomeSwiper",
  props: {
    swiper: Array,
  },
  data() {
    return {
      swiperOptions: {
        direction: "horizontal",
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped lang="scss">
@import "assets/scss/base.scss";
.wrapper >>> .swiper-pagination-bullet-active {
  background: $bg-color;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 30%;
  .swiper-img {
    width: 100%;
  }
}
</style>

