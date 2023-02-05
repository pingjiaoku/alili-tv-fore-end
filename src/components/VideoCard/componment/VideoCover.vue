<template>
  <div
    class="video-cover"
    ref="refDom"
    :style="{
      backgroundImage:
        'url(' + result + '), url(/src/assets/imgs/img-fail.svg)',
    }"
  >
    <div>
      <div class="video-card__state">
        <img src="/src/assets/imgs/icon/view.svg" />
        <div>{{ numberConversion(props.viewCount) }}</div>
        <img src="/src/assets/imgs/icon/bullet.svg" />
        <div>{{ numberConversion(props.bulletCount) }}</div>
      </div>
      <div>{{ timeConversion(props.totalTime) }}</div>
    </div>
  </div>
</template>

<script setup>
import { useLazyData } from "/src/utils/use-lazy-data";
import { numberConversion, timeConversion } from "/src/utils/transformation.js";

const props = defineProps({
  videoCover: {},
  viewCount: {},
  bulletCount: {},
  totalTime: {},
});

const { refDom, result } = useLazyData(() => props.videoCover);
</script>

<style scoped>
.video-cover {
  width: 100%;
  height: 100%;
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.video-cover > div {
  width: 100%;
  height: 25%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.8));
  color: aliceblue;
  font-size: 16px;

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.video-card__state {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.video-card__state img {
  width: 20px;
  margin-left: 7px;
}

.video-card__state + div {
  margin-right: 7px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
