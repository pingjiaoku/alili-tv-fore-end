<template>
  <div>
    <ul class="brief-channels">
      <li v-for="channel in channels" :key="channel.id" ref="channelCard">
        <BrieflyChannel :channelId="channel.id"></BrieflyChannel>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from "vue";
import BrieflyChannel from "./BrieflyChannel.vue";

const channels = ref(inject("channel"));

</script>

<style scoped>
.brief-channels {
  width: 100%;
}
.brief-channels > li {
  width: 100%;
  height: var(--HomePartitionLineHeight);
  margin-top: 40px;

  background-color: var(--BackBaffle);
  border-radius: 30px;

}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
