<template>
  <div class="card-video">
    <div class="card-video-cover">
      <VideoCover
        :cover="props.data.coverPath"
        :viewCount="props.data.viewCount"
        :bulletCount="props.data.bulletCount"
        :totalTime="props.data.totalTime"
      ></VideoCover>
    </div>
    <div>
      <h4 class="card-title text-ellipsis link-blue" :title="props.data.title">
        {{ props.data.title }}
      </h4>
      <div>
        <img src="/src/assets/imgs/icon/uploader.svg" />
        <span class="link-blue">
          <span class="text-ellipsis">{{ props.data.createUserName }}</span>
          {{ "| " + dateConversion(props.data.createTime) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoCover from "./componment/VideoCover.vue";
import { dateConversion } from "/src/utils/transformation";

const props = defineProps(["data"]);
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
  text-align: left;
  font-weight: 500;
  font-size: 17px;
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
  font-size: 15px;

  display: flex;
  align-items: baseline;
}
.card-title + div .text-ellipsis {
  font-size: 15px;
  max-width: 90px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
