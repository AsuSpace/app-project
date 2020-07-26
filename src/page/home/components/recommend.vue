<template>
    <div class="wrapper">
        <div class="title">热门推荐</div>
        <div class="recom-content">
            <div class="recom-item" v-for="item in recomList" :key="item.id">
                <div class="recom-img" >
             <img :src="item.imgUrl">
                </div>               
               <div class="recom-info">
               <p class="recom-title">{{item.title}}</p>
                <p class="recom-desc">{{item.desc}}</p>
                <button class="recom-detail">查看详情</button>
                </div>                
            </div>
        </div>
        <div class="recom-more">查看更多推荐</div>
    </div>
</template>
<script>
export default {
    name:"HomeRecommend",
    props:{
        recomList:Array
    },    
}
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.title{
    width:100%;
    line-height:36px;
    padding-left: 20px;
    background:#eee;
    }
    .recom-more{
        width:100%;
        height:30px;
        // margin-bottom: 10px;
        font-size: 16px;
         text-align: center;
        color:$bg-color;
     }
    .recom-content{
        .recom-item{
            margin:8px 10px;
            display: flex;
        .recom-img{
            width:70px;
            height:70px;
            margin-right: 20px;
            img{
                width: 100%;
            }
        }
        .recom-info{
            min-width: 0;
            flex:1;
            font-size:12px;
            .recom-title{
                font-size: 14px;
                line-height:20px;
                margin-bottom:8px;
                 @include ellipsis();
                 font-weight: 700;
            }
            .recom-desc{
                color:$font-color;
                margin-bottom: 5px;
                @include ellipsis();
            }
            .recom-detail{
                padding:1px 3px;
                color: #fff;
                background:$button-color;
            }

        }        
        }        
        
    }


</style>