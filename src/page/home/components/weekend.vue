<template>
  <div class="wrapper">
    <div class="title">周末去哪儿</div>
    <div class="recom-content">
      <div class="recom-item" v-for="item in recomList" :key="item.id">
        <div class="recom-img">
          <img :src="item.ImgUrl" />
        </div>
        <div class="recom-info">
          <p class="recom-title">{{item.title}}</p>
          <p class="recom-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeek",
  data() {
    return {
      recomList: [
        {
          id: "001",
          ImgUrl:
            "http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg",
          title: "驾一叶扁舟，寻瓯江往事",
          desc: "厦门，带娃出行与幸福同行.厦门，带娃出行与幸福同行",
        },
        {
          id: "002",
          ImgUrl:
            "http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg",
          title: "驾一叶扁舟，寻瓯江往事",
          desc: "厦门，带娃出行与幸福同行.厦门，带娃出行与幸福同行",
        },
        {
          id: "003",
          ImgUrl:
            "http://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg",
          title: "驾一叶扁舟，寻瓯江往事",
          desc: "厦门，带娃出行与幸福同行.厦门，带娃出行与幸福同行",
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.title {
  width: 100%;
  line-height: 36px;
  padding-left: 20px;
  background: #eee;
}
.recom-content {
  .recom-item {
    margin: 8px 10px;
    .recom-img {
      overflow: hidden;
      height: 0;
      padding-bottom: 30%;
      img {
        width: 100%;
      }
    }
    //详情信息
    .recom-info {
      font-size: 14px;
      margin: 10px;
      .recom-title {
        font-size: 17px;
        line-height: 22px;
        margin-bottom: 10px;
        @include ellipsis();  //文字超出省略
        font-weight: 700;
      }
      .recom-desc {
        color: $font-color;
        margin-bottom: 5px;
        @include ellipsis();
      }
    }
  }
}
</style>