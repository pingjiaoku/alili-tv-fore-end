<template>
  <div class="card-video">
    <div class="card-video-cover">
      <!-- <div class="card-video-cover" style=""> -->
      <div>
        <img
          ref="refDom"
          fit="cover"
          :src="result"
          @error="setDefaultCover"
        />
        <div>
          <div class="card-view-count"></div>
          <div class="card-barrage-count"></div>
        </div>
        <div>
          <div class="card-video-duration"></div>
        </div>
      </div>
    </div>
    <div>
      <div class="card-title"></div>
      <div class="card-author"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import { useLazyData } from "/src/utils/use-lazy-data";

const props = defineProps(["videoCover"]);

const setDefaultCover = (e) => {
  e.target.src = "/src/assets/imgs/img-fail.svg";
};

const loadPicture = (dom) => {
  return props.videoCover;
};

const { refDom, result } = useLazyData(loadPicture);

onMounted(() => {
  // 从后端获取图片案例
});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>
.card-video {
  width: 100%;
  height: 100%;
}
.card-video-cover {
  width: 100%;
  height: 75%;
  border: 1px solid red;
  border-radius: 20px;
  overflow: hidden;
}
.card-video-cover > div > img {
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
