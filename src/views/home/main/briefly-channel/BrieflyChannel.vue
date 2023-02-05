<template>
  <div ref="refDom" class="main-channel-card">
    <div>
      <div v-for="item in 8" class="default-video-card">
        <VideoCard :videoCover="coverList"></VideoCard>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h4 class="ranking-list">排行榜</h4>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            >
            <!-- @tab-click="handleClick" -->
            <el-tab-pane label="日榜" name="day">日榜</el-tab-pane>
            <el-tab-pane label="周榜" name="week">周榜</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VideoCard from "/src/components/VideoCard/VideoCard1.vue";
import { useLazyData } from "/src/utils/use-lazy-data";
import axios from "axios";

const activeName = ref('day')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const props = defineProps(["channelId"]);



const coverList = ref(
  "http://localhost:8080/common/download?name=0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg"
);

// 懒加载频道信息
const { refDom, result } = useLazyData(() => {
  const data = ref();
  axios.get("/testaxios/test/now").then((res) => {
    console.log(res);
    data.value = res.data;
  });
  return data;
});
</script>

<style scoped>
.main-channel-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
.main-channel-card > div:first-child {
  width: 75%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
}

.main-channel-card > div:last-child {
  width: 25%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-channel-card > div:last-child > div {
  width: 90%;
  height: 92%;
  background-color: rgb(222, 222, 222, 0.2);
  box-shadow: inset 0px 0px 16px 0px rgb(150, 150, 150);
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.main-channel-card > div:last-child > div > div {
  width: 95%;
  height: 97%;
  position: relative;
}

.ranking-list {
  position: absolute;
  top: 5px;
  right: 10px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
