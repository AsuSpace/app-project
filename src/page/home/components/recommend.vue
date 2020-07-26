<template>
    <div class="wrapper">
        <div class="title">热门推荐</div>
        <div class="recom-content">
            <div class="recom-item" v-for="item in recomList" :key="item.id">
                <div class="recom-img" >
             <img :src="item.ImgUrl">
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
    data(){
        return{
            recomList:[
                {id:"001",
                ImgUrl:"http://imgs.qunarzz.com/p/tts6/1906/6b/50ff5f9be7e77602.jpg_r_480x320x95_d04c5a69.jpg",
                title:"美帝的美，留在图里也要藏在心底",
                desc:"不负嵊夏好时光，泗乎太安逸.不负嵊夏好时光，泗乎太安逸"
                },
                {id:"002",
                ImgUrl:"http://imgs.qunarzz.com/p/tts6/1906/6b/50ff5f9be7e77602.jpg_r_480x320x95_d04c5a69.jpg",
                title:"美帝的美，留在图里也要藏在心底",
                desc:"不负嵊夏好时光，泗乎太安逸.不负嵊夏好时光，泗乎太安逸"
                },
                {id:"003",
                ImgUrl:"http://imgs.qunarzz.com/p/tts6/1906/6b/50ff5f9be7e77602.jpg_r_480x320x95_d04c5a69.jpg",
                title:"美帝的美，留在图里也要藏在心底",
                desc:"不负嵊夏好时光，泗乎太安逸.不负嵊夏好时光，泗乎太安逸"
                }
            ]
        }
    }
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
            width:90px;
            height: 80px;
            // background: burlywood;
            margin-right: 20px;
            // overflow: hidden;
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