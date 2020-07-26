<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>
<home-recommend></home-recommend>
<home-week></home-week>
</div>
  
</template>
<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/iconapp.vue'
import HomeRecommend from './components/recommend'
import HomeWeek from './components/weekend'

export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon,
        HomeRecommend,
        HomeWeek
    }
}
</script>
