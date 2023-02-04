<template>
  <div id="home-guide">
    <ul v-if="props.isOpenGuide" id="home-guide-icons">
      <li v-for="item in channel" @click="togglesChannel(item)">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div v-else class="current-channel">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="currentChannel.icon"></use>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted, defineProps, inject } from "vue";

const props = defineProps(["isOpenGuide"]);

const channel = ref(inject('channel'))

const currentChannel = ref(channel.value[0]);

const togglesChannel = (item) => {
  currentChannel.value = item;
};

onBeforeMount(() => {
  // 便于初始化图标的状态，防止重新加载时overlay又会影响图标的悬浮状态
  document.body.style.overflowY = "hidden";
});

onMounted(() => {
  // 延迟加载body的overflow，防止影响图标的悬浮状态
  setTimeout(() => {
    document.body.style.overflowY = "overlay";
  }, 100);
});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>
#home-guide {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  color: rgb(100, 100, 100);
}

#home-guide-icons {
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

#home-guide-icons > li {
  height: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}

#home-guide-icons > li:hover {
  background-color: lightgrey;
}

#home-guide-icons > li:hover .icon {
  animation: obviously-beat 0.3s;
}

#home-guide-icons > li:active {
  animation: obviously-beat 0.3s;
}

#home-guide-icons span {
  margin-right: 5px;
}

.current-channel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 1.7em;
  height: 1.7em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  animation-name: none;
}


</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
