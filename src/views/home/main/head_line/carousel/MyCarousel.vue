<template>
  <div
    id="my-carousel"
    @wheel="goWheel"
    @mouseover="openWindowWheel(false)"
    @mouseleave="openWindowWheel(true)"
    @mousewheel.prevent
  >
    <el-carousel
      height="var(--HomeFirstLineHeight)"
      direction="vertical"
      @change="load"
      ref="swiper"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const one = ref(true);
const swiper = ref(null);

const load = () => {};

const openWindowWheel = (flag) => {
  document.body.style.overflowY = flag ? "overlay" : "hidden";
};

const goWheel = (e) => {
  if (e.deltaY > 0) {
    //data中定义one为true 当one为true时执行
    swiper.value.next();
    one.value = false;
  } else {
    swiper.value.prev();
  }
};

onMounted(() => {});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style scoped>

#my-carousel {
  width: 580px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
}



.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
