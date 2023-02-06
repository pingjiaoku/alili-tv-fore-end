<template>
  <div class="common-layout">
    <el-container>
      <header id="top-nav-view">
        <TopNav :isToHome="isFixed"></TopNav>
      </header>
      <div id="main-views">
        <Home id="home" v-model:isFixed="isFixed"></Home>
      </div>
    </el-container>
    <a href="#" title="回到顶部" id="to-top-button" :style="{ opacity: isFixed ? '1' : '0' }">
      <el-icon><ArrowUpBold /></el-icon>
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TopNav from "./components/top_nav/TopNav.vue";
import Home from "./views/home/Home.vue";

const isFixed = ref(false);

</script>

<style scoped>
#top-nav-view {
  width: 100%;
  max-width: var(--MaxWidth);
  height: 65px;
  position: fixed;
  z-index: 100;
}

#main-views {
  width: 100%;
}

#to-top-button {
  position: fixed;
  bottom: 50px;
  right: 20px;
  background-color: aliceblue;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in;
  box-shadow: var(--BoxShadow);
}
</style>
