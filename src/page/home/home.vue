<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>
</div>
  
</template>
<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/iconapp.vue'

export default {
    name:"Home",
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcon
    }
}
</script>
