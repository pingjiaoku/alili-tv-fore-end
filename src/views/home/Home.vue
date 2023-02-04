<template>
  <div>
    <div
      id="home-hello-view"
      :style="{
        height: windowHeight + 'px',
        display: isShowHello ? 'block' : 'none',
      }"
    >
      <Hello></Hello>
    </div>
    <div id="home-main-view">
      <el-affix @change="fixedChange" :offset="120">
        <div
          id="home-guide-view"
          :class="isOpenGuide&&isFixed ? 'home-guide-view-hover' : 'home-guide-view'"
          @mouseover="isOpenGuide = true"
          @mouseleave="isOpenGuide = false"
        >
          <HomeGuide :isOpenGuide="isOpenGuide&&isFixed"></HomeGuide>
        </div>
      </el-affix>
      <HomeMain></HomeMain>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import Hello from "./hello/Hello.vue";
import HomeMain from "./main/HomeMain.vue";
import HomeGuide from "./home_guide/HomeGuide.vue";
const emit = defineEmits(["update:isFixed"]);

const windowHeight = ref(0);
const isFixed = ref(false);
const isShowHello = ref(true);
const isOpenGuide = ref(false);


onMounted(() => {
  getWindowResize();
  window.addEventListener("resize", getWindowResize);
});

// 获取屏幕尺寸
const getWindowResize = () => {
  windowHeight.value = window.innerHeight;
};

// 当affix状态变化向父组件发送，用于改变滚动时改变导航栏的颜色
const fixedChange = (data) => {
  console.log(data)
  isFixed.value = data
  emit("update:isFixed", data);
};

</script>

<style scoped>
#home-hello-view {
  width: 100%;
}

#home-main-view {
  width: 100%;
}

#home-guide-view {
  /* 设置过渡属性 */
  transition-property: all;
  /*设置过渡时长 */
  transition-duration: 0.2s;
  text-shadow: 1px 1px 2px #545454;
  box-shadow: var(--BoxShadow);

  border-radius: 20px;
  overflow: hidden;
}

.home-guide-view {
  width: 50px;
  height: 50px;
}

.home-guide-view-hover {
  width: 100px;
  height: 550px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
