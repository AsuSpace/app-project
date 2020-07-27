<template>
  <div class="header-city">
    <router-link to="/">
      <div class="header-back">
        <i class="iconfont icon-fanhui"></i>
      </div>
    </router-link>
    <div class="header-info">城市选择</div>
  </div>
</template>
<script>
export default {
  name: "HeaderCity",
};
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.header-city {
  // height:30px;
  width: 100%;
  background: $bg-color;
  display: flex;
  .header-info {
    flex: 1;
    text-align: center;
    border-radius: 3px;
    color: $header-font-color;
    line-height:30px;
    font-size: $city-font;
  }
  .header-back {
    width: 100%;
    height: 100%;
    margin: 0 2px;
    color: $header-font-color;
    @include flexCenter;
  }
  .iconfont {
    font-size: $icon-size;
  }
}
</style>



