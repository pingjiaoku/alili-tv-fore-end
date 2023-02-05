<template>
  <div class="card-video">
    <div class="card-video-cover">
      <VideoCover :videoCover="props.videoCover"></VideoCover>
    </div>
    <div>
      <span class="card-title text-ellipsis" :title="props.videoTitle">
        {{ props.videoTitle }}
      </span>
      <div>
        <img src="/src/assets/imgs/icon/uploader.svg" />
        <span>{{ props.videoAuthor }} | {{ dateConversion(testTime) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VideoCover from "./componment/VideoCover.vue";
import { dateConversion } from "/src/utils/transformation";
import axios from "axios";

const testTime = ref();

onMounted(() => {
  axios.get("/testaxios/test/now").then((res) => {
    testTime.value = res.data;
  });
});

const props = defineProps({
  videoCover: {},
  videoTitle: {},
  videoAuthor: {},
  videoCreateTime: {},
});


</script>

<style scoped>
.card-video {
  width: 100%;
  height: 100%;
}
.card-video-cover {
  width: 100%;
  height: 75%;
  border-radius: 20px;
  overflow: hidden;
}
.card-title {
  width: 95%;
  font-family: Helvetica;
}
.card-title + div {
  height: 25%;
  display: flex;
  align-items: center;
  margin-left: 7px;
}
.card-title + div > img {
  width: 20px;
}
.card-title + div > span {
  font-size: 14px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
