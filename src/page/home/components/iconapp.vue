<template>
  <div class="icon-contain">
      <swiper :options="swiperOptions" >
    <swiper-slide v-for="(page,index) in pages" :key="index">           
    <div 
    class="icon-item" 
    v-for="item in page"
    :key="item.id"
    >
      <div class="icon-img">
        <img :src="item.imgUrl">
      </div>
      <span class="icon-name">{{item.name}}</span>
    </div>
    </swiper-slide>  
    </swiper>  
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
export default {
  name: "HomeIcon",
  components:{
  Swiper,
  SwiperSlide
  },
  data(){
      return{
          swiperOptions:{
          autoplay: false
          },
          iconList:[{
          id:"0001",
          name:"酒店",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png"
      },{
          id:"0002",
          name:"机票",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/flight.png"
      },{
          id:"0003",
          name:"火车票",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/train.png"
      },{
          id:"0004",
          name:"旅行",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/package.png"
      },{
          id:"0005",
          name:"景点",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/piao.png"
      },{
          id:"0006",
         name:"机票",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/flight.png"
      },
      {
          id:"0007",
          name:"酒店",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png"
      },{
          id:"0008",
         name:"旅行",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/package.png"
      },{
          id:"0009",
          name:"酒店",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png"
      },{
          id:"00010",
         name:"景点",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/piao.png"
      },{
          id:"00011",
          name:"酒店",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png"
      },{
          id:"00012",
          name:"机票",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/flight.png"
      },{
          id:"00013",
          name:"火车票",
          imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/train.png"
      }
      ]

      }
      
  },
  computed:{
      pages(){
          const pages=[];
          this.iconList.forEach((item,index)=>{
              const page=Math.floor(index/10);
              if(!pages[page]){
                  pages[page]=[]
              }
              pages[page].push(item);              
          
          })
          return pages;
      }
  }
};
</script>
<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
  .icon-contain >>> .swiper-container{      
  height: 0;
  padding-bottom:44%;
  }  
.icon-contain {
    margin-bottom: 5px;

  .icon-item {
    width: 20%;
    height: 0;
    padding-bottom: 20%;
    text-align: center;
    float: left;
    margin:5px 0;
    .icon-img{
       width:70%;
       height: 0;
       padding-bottom: 70%;
       margin: 0 auto;   
       margin-bottom: 8px;   
    img{
        width: 100%;
    }
    }
    .icon-name{
        display:block;
       @include ellipsis();
    }
  }
}
</style>