<template>
  <div>
    <ul class="brief-channels">
      <li
        v-for="channel in channels.slice(2, channels.length)"
        :key="channel.id"
        ref="channelCard"
      >
        <div class="bc-channel-title">
          <svg class="icon" aria-hidden="true" @click="toChannelView(channel.id)">
            <use :xlink:href="channel.icon"></use>
          </svg>
          <h3 class="link-blue" @click="toChannelView(channel.id)">{{ channel.name }}</h3>
          <el-button link @click="refreshChannelRecommend(channel.id)">
            换一批<el-icon><Refresh /></el-icon>
          </el-button>
        </div>
        <BrieflyChannel :channelId="channel.id"></BrieflyChannel>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from "vue";
import BrieflyChannel from "./BrieflyChannel.vue";

const channels = ref(inject("channel"));

const refreshChannelRecommend = (channelId) => {
  console.log("刷新频道推荐：" + channelId);
}
const toChannelView = (id) => {
  console.log("跳转到频道页面：",id);
}
</script>

<style scoped>
.brief-channels {
  width: 100%;
}
.brief-channels > li {
  width: 100%;
  height: var(--HomePartitionLineHeight);
  margin-top: 100px;
}

.bc-channel-title {
  width: 200px;
  height: 40px;
  background-color: var(--BackBaffle);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: larger;
}

.bc-channel-title .icon {
  width: 2em;
  height: 2em;
  cursor: pointer;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
