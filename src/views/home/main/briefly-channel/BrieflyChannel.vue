<template>
  <div ref="refDom" class="main-channel-card">
    <div class="main-videos-card">
      <div v-for="item in 8" class="default-video-card">
        <VideoCard :videoCover="coverList"></VideoCard>
      </div>
    </div>
    <div>{{ props.channelId }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VideoCard from "/src/components/VideoCard/VideoCard1.vue";
import { useLazyData } from "/src/utils/use-lazy-data";
import axios from "axios";

const props = defineProps(["channelId"]);

const coverList = ref(
  "http://localhost:8080/common/download?name=0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg"
);

// 懒加载频道信息
const { refDom, result } = useLazyData(() => {
  const data = ref()
  axios.get("/testaxios/test/now").then((res) => {
    console.log(res)
    data.value = res.data
  })
  return data;
});
</script>

<style scoped>
.main-channel-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.main-videos-card {
  width: 75%;
  height: 100%;
  border: 1px solid red;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.default-video-card {
  border: 1px solid rgb(85, 0, 255);
}

.main-videos-card + div {
  width: 25%;
  height: 100%;
  background-color: aqua;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
