<template>
  <div class="icon-contain">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon-item" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" />
          </div>
          <span class="icon-name">{{item.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeIcon",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    iconList: Array,
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 10);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.icon-contain >>> .swiper-container {
  height: 0;
  padding-bottom: 44%;
}
.icon-contain {
  margin-bottom: 5px;

  .icon-item {
    width: 20%;
    height: 0;
    padding-bottom: 20%;
    text-align: center;
    float: left;
    margin: 5px 0;
    .icon-img {
      width: 70%;
      height: 0;
      padding-bottom: 70%;
      margin: 0 auto;
      margin-bottom: 8px;
      img {
        width: 100%;
      }
    }
    .icon-name {
      display: block;
      @include ellipsis();
    }
  }
}
</style>