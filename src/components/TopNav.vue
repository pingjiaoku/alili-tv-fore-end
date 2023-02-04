<template>
  <div
    id="top-nav"
    :style="{
      'background-color': props.isToHome
        ? 'aliceblue'
        : 'rgba(219, 219, 219, 0.256)',
    }"
  >
    <div>
      <TopNavLeft :changStyle="props.isToHome"></TopNavLeft>
    </div>
    <div style="width: 30%">
      <InputBox></InputBox>
    </div>
    <div>
      <TopNavRight :changStyle="props.isToHome"></TopNavRight>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, defineProps, watch } from "vue";
import TopNavLeft from "./left/TopNavLeft.vue";
import TopNavRight from "./right/TopNavRight.vue";
import InputBox from "./input_box/InputBox.vue";

const props = defineProps(["isToHome"]);

const isToHome = ref(false);

onMounted(() => {
  setInterval(() => {
    isToHome.value = !isToHome.value;
  }, 5000);
});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>
#top-nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background-color: rgba(219, 219, 219, 0.256); */
  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.1);

  /* 设置过渡属性 */
  transition-property: all;
  /*设置过渡时长 */
  transition-duration: 0.7s;
  /* 过渡变化速率 */
  transition-timing-function: linear;
  /* 过渡延时1s */
  transition-delay: 0s;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
