<template>
    <div class="search">
      <input class="search-info" type="text" placeholder="请输入城市名称或拼音" />
    </div>
</template>
<script>
export default {
    name:"SearchCity"
}
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.search{
    background-color:$bg-color;
    @include flexCenter;
    padding:5px;
    &-info{
        line-height: 25px;
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        border-radius: 5px;
        padding:0 5px;
    }
}

</style>
