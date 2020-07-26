<template>
<div class="wrapper">  
  <swiper :options="swiperOptions" class="swiper">
    <swiper-slide v-for="item in slider" :key="item.id">
      <img :src="item.Url" class="swiper-img" />
    </swiper-slide>
    <div class="swiper-pagination"slot="pagination"></div>
  </swiper>
  </div> 
</template>
<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import {headerSwiperList} from "../config"
export default {
  name: "HomeSwiper",
  data() {
    return {
        swiperOptions:{
            direction:"horizontal",
            loop:true,
            autoplay:{
              delay:3000,
            },            
          pagination: {
            el: '.swiper-pagination'
          }
      },
      slider: [{
        id:"001",
        Url:"http://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg",
      },
  
      {
        id:"002",
        Url:"http://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg",
      },
      {
        id:"003",
        Url:"http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg",
      } 

      ]    
    
  }
  },

 components:{
 Swiper,
 SwiperSlide
 }
 }
</script>
<style scoped lang="scss">
@import "assets/scss/base.scss";
 .wrapper >>> .swiper-pagination-bullet-active{
     background:$bg-color;
}
.wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom:30%;
    .swiper-img{
        width: 100%;
    }

}
</style>

