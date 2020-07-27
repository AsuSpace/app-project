<template>
  <div class="wrapper" ref="content">
    <div>
      <!-- 当前城市 -->
      <div class="list">
        <div class="list-title">当前城市</div>
        <div class="list-city">
          <div class="list-desc">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="list">
        <div class="list-title">热门城市</div>
        <!-- 热门城市列表 -->
        <div class="list-city">
          <div class="list-desc" v-for="item in hostCity" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="list"
       v-for="(item,key) in listCity" 
       :key="key"
       :ref="key">
        <div class="list-title">{{key}}</div>
        <div class="item-list" v-for="innerItem in item" :key="innerItem.id">
          <div class="item">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "ListCity",
  props:{
    hostCity:Array,
    listCity:Object,
    letter:String  
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.content);
  },
  watch:{
    letter(){
     if( this.letter){
       const element=this.$refs[this.letter][0];
       this.scroll.scrollToElement(element)
     }
    }

  }
};
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.wrapper {
  position: absolute;
  top: 65px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .list {
    &-title {
      line-height: 24px;
      padding: 5px;
      background: $bg-title;
      font-size: $city-font;
    }
    &-city {
      margin: 10px 15px 10px 5px;
      overflow: hidden;
      .list-desc {
        float: left;
        width: 33.3%;
        .button {
          margin: 5px;
          padding: 6px;
          text-align: center;
          border: 1px solid #d3d2d1;
          border-radius: 4px;
        }
      }
    }
    .item-list {
      border-bottom: 1px solid #e6e4e3;
      .item {
        padding: 5px;
        line-height: 20px;
      }
    }
  }
}
</style>