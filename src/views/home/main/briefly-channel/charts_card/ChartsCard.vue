<template>
  <div class="channel-chart-main">
    <div>
      <div
        v-for="(item, index) in props.data.slice(0, 3)"
        class="channel-chart-main__cover"
      >
        <div>
          <VideoCover
            :cover="item.coverPath"
            :viewCount="item.viewCount"
            :bulletCount="item.bulletCount"
            :totalTime="item.totalTime"
            :showMassage="false"
          ></VideoCover>
          <div class="sort">{{ index + 1 }}</div>
        </div>
        <div>
          <h5 class="text-ellipsis link-blue" :title="props.videoTitle">
            {{ item.title }}
          </h5>
          <div class="video-message link-blue">
            <img src="/src/assets/imgs/icon/uploader.svg" />
            {{ item.createUserName }}
          </div>
          <div class="video-message">
            <img src="/src/assets/imgs/icon/view.svg" />
            <div>{{ numberConversion(item.viewCount) }}</div>
            <img src="/src/assets/imgs/icon/bullet.svg" />
            <div>{{ numberConversion(item.bulletCount) }}</div>
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in props.data.slice(3, 6)"
        class="channel-main__nocover text-ellipsis link-blue"
      >
        <span style="color: grey">{{ index + 4 }}</span>
        <span>
          【{{ item.createUserName }}】{{ item.title }}
        </span>
      </div>
    </div>
    <div>
      查看更多<el-icon><ArrowRightBold /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { numberConversion, dateConversion } from "/src/utils/transformation";
import VideoCover from "../../../../../components/VideoCard/componment/VideoCover.vue";

const props = defineProps(["data"]);

onMounted(() => {});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>
.channel-chart-main {
  width: 100%;
  height: 100%;
}
.channel-chart-main > div:first-child {
  width: 100%;
  height: 88%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.channel-chart-main > div:last-child {
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
}
.channel-chart-main > div:last-child:hover {
  background-color: aliceblue;
  color: var(--el-color-danger);
}
.channel-chart-main__cover {
  width: 100%;
  height: 70px;
  display: inline;
  position: relative;
  /* border: 1px solid red; */
  overflow: hidden;
}
.channel-chart-main__cover > div:first-child {
  width: 110px;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--el-color-info);
  position: relative;
  overflow: hidden;
}
.channel-chart-main__cover .sort {
  position: absolute;
  top: 0;
  width: 25px;
  height: 20px;
  background-color: var(--el-color-danger);
  color: aliceblue;
  border-radius: 5px;
}
.channel-chart-main__cover > div:last-child {
  width: calc(100% - 120px);
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.channel-chart-main__cover .text-ellipsis {
  width: 100%;
  font-weight: 400;
  font-size: 16px;
}
.channel-chart-main__cover .video-message {
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
}

.channel-chart-main__cover img {
  width: 20px;

  /* 通过生产一个可指定颜色的阴影放置于svg的位置，并将原始svg移出视线 */
  position: relative;
  top: 180px;
  filter: drop-shadow(grey 0 -180px);
}

.channel-main__nocover {
  width: 100%;
  height: 25px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
