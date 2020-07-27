<template>
     <div class="header">
       <div class="header-back">
           <i class="iconfont icon-fanhui"></i>
       </div>
       <div class="header-search">
           <i class="iconfont icon-search"></i>
           请输入城市/景点
       </div>
       <router-link to="/city">
       <div class="header-city">大连           
           <i class="iconfont icon-xia"></i>
       </div>
       </router-link>
       
       
    </div> 
    
</template>

<script>
export default {
    name:"HomeHeader"    
}
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.header{
    width:100%;
    background-color:$bg-color ;
    display: flex;
    color:#fff;
    &-search{
        flex:1;
        margin:5px;
        background-color: #fff;
        border-radius: 3px;
        color:rgb(122, 121, 118);
        line-height:28px;
        font-size:$header-font-size;
    }
    &-back{
        width:20px;
        margin:0 2px;
        @include flexCenter;      
    }
    &-city{
        min-width:100%;
        @include flexCenter;
       font-size: $header-font-size; 
       height:100%;
       margin:0 2px;
       color:$header-font-color;            
       .icon-xia{
           margin-left: 1px;
           margin-right: 2px;
       }   
    }
    .iconfont{
        font-size: $icon-size;
        }
}
</style>



