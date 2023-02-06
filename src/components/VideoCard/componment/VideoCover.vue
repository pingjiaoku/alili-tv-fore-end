<template>
  <div
    class="video-cover"
    :style="{
      backgroundImage:
        'url(' +
        getCover(props.cover) +
        '), url(/src/assets/imgs/img-fail.svg)',
    }"
  >
    <div v-if="props.showMassage">
      <div class="video-card__state">
        <img src="/src/assets/imgs/icon/view.svg" />
        <div>{{ numberConversion(props.viewCount) }}</div>
        <img src="/src/assets/imgs/icon/bullet.svg" />
        <div>{{ numberConversion(props.bulletCount) }}</div>
      </div>
      <div>{{ timeConversion(props.totalTime) }}</div>
    </div>
    <div>
      <img src="/src/assets/imgs/icon/play.svg" />
    </div>
  </div>
</template>

<script setup>
import { numberConversion, timeConversion } from "/src/utils/transformation.js";
const props = defineProps({
  cover: { default: "/src/assets/imgs/img-fail.svg" },
  viewCount: {},
  bulletCount: {},
  totalTime: {},
  showMassage: { default: true },
});

const getCover = (cover) => {
  if (cover != "/src/assets/imgs/img-fail.svg") {
    cover = "/api-req/common/download?name=" + cover;
  }
  return cover;
};

</script>

<style scoped>
.video-cover {
  width: 100%;
  height: 100%;
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
}
.video-cover:hover > div:last-child {
  filter: opacity(1);
}

.video-cover > div:first-child {
  width: 100%;
  height: 25%;
  background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0));
  color: aliceblue;
  font-size: 16px;

  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.video-cover > div:last-child {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  filter: opacity(0);
  transition: all 0.3s;
}
.video-cover > div:last-child > img {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
