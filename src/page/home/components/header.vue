<template>
     <div class="header">
       <div class="header-back">
           <i class="iconfont icon-fanhui"></i>
       </div>
       <div class="header-search">
           <i class="iconfont icon-search"></i>
           请输入城市/景点
       </div>
       <div class="header-city">
           大连
           <i class="iconfont icon-xia"></i>
       </div>
       
    </div> 
    
</template>

<script>
export default {
    name:"HomeHeader"    
}
</script>
<style scoped lang="scss">
@import "assets/scss/base.scss";
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
        .icon-fanhui{
            text-align: center;
            line-height: 36px;
        }  
        
    }
    &-city{
       font-size: $header-font-size;
       line-height: 36px;
       margin-left: 2px;
       .icon-xia{
           margin:0 3px;
       }      

    }
    .iconfont{
        font-size: $icon-size;
        }
}
</style>



