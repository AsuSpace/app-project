<template>
  <ul class="list">
    <li
      v-for=" item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "AlphabetCity",
  props: {
    alphabtList: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (const i in this.alphabtList) {
        letters.push(i);
      }
      return letters;
    },
  },
  data() {
    return {
      touchStatus: false,
    };
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
          const startY=this.$refs['A'][0].offsetTop;
        const touchY=e.touches[0].clientY;
        const index=Math.floor((touchY-startY)/20)
        this.$emit('change',this.letters[index]);

      }
    },
    handleTouchEnd(e) {
      this.touchStatus = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "assets/scss/mixin.scss";
.list {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  @include flexCenter(column);
  li {
    line-height: 20px;
    margin-right: 3px;
    color: $bg-color;
    font-size: $header-font-size;
  }
}
</style>