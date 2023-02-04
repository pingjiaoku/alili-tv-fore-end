<template>
    <div id="my-carousel-view">
      <MyCarousel></MyCarousel>
    </div>
    <div id="f-line-r">
      <div v-for="item in 6">
        <div class="default-video-card">
          {{ item }}
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MyCarousel from "./carousel/MyCarousel.vue";

onMounted(() => {});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>
#my-carousel-view {
  width: 620px;
  height: 400px;

  display: flex;
  justify-content: center;
}
#f-line-r {
  width: calc(100% - 640px);
  height: 400px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-around;
}



</style>
<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
