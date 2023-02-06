<template>
  <div ref="refDom" class="main-channel-card">
    <div>
      <div v-for="item in recommend.slice(0, 8)" class="default-video-card">
        <VideoCard :data="item"></VideoCard>
      </div>
    </div>
    <div>
      <div>
        <div>
          <h4 class="ranking-list">排行榜</h4>
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="
              (tab) => {
                getChannelCharts(tab.props.name);
              }
            "
          >
            <el-tab-pane label="日榜" :name="'day-' + props.channelId">
              <div class="charts-card">
                <ChartsCard :data="chart"></ChartsCard>
              </div>
            </el-tab-pane>
            <el-tab-pane label="周榜" :name="'week-' + props.channelId">
              <div class="charts-card">
                <ChartsCard :data="chart"></ChartsCard>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import VideoCard from "/src/components/VideoCard/VideoCard1.vue";
import ChartsCard from "./charts_card/ChartsCard.vue";
import { useLazyData } from "/src/utils/use-lazy-data";
import axios from "axios";

const activeName = ref("day-" + props.channelId);

const getChannelCharts = (type) => {
  console.log("查询频道排行：" + props.channelId + " : " + type);
};

const props = defineProps(["channelId"]);

// const coverList = ref(
//   "http://localhost:8080/common/download?name=0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg"
// );
const recommend = ref([])
const chart = ref([])
// 懒加载频道信息
const { refDom, result } = useLazyData(() => {
  let data = {};
  console.log("懒加载频道推荐：" + props.channelId);
  recommend.value = [
    {id: "1",title: "我是标题1我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a697a6b1d3.jpg",createUserName: "作者名士大夫立刻分是",totalTime: 3600,createTime: "2022-11-11 25:12:30",viewCount: 1111,bulletCount: 13516516,},
    {id: "2",title: "我是标题2我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名2",totalTime: 1800,createTime: "2023-11-10 25:12:30",viewCount: 563456,bulletCount: 345,},
    {id: "3",title: "我是标题3我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名3",totalTime: 360,createTime: "2020-01-11 25:12:30",viewCount: 1234535,bulletCount: 4356,},
    {id: "4",title: "我是标题4我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名4",totalTime: 300,createTime: "2015-11-11 25:12:30",viewCount: 54345232,bulletCount: 456,},
    {id: "5",title: "我是标题5我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名5",totalTime: 10,createTime: "2010-01-25 25:12:30",viewCount: 31516165,bulletCount: 789454,},
    {id: "6",title: "我是标题6我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名6",totalTime: 15,createTime: "2022-11-07 25:12:30",viewCount: 87657,bulletCount: 11345345,},
    {id: "7",title: "我是标题7我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名7",totalTime: 351651651,createTime: "2023-01-11 25:12:30",viewCount: 86423,bulletCount: 4545,},
    {id: "8",title: "我是标题8我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名8",totalTime: 16898,createTime: "2023-01-30 25:12:30",viewCount: 3453,bulletCount: 13516516,},
  ];
  // 使用父方法
  console.log("获取频道推荐");
  getChannelCharts("day");
  chart.value = [
    {id: "1",title: "我是标题1我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名1",totalTime: 3600,createTime: "2022-11-11 25:12:30",viewCount: 1111,bulletCount: 13516516,},
    {id: "2",title: "我是标题2我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名2",totalTime: 1800,createTime: "2023-11-10 25:12:30",viewCount: 563456,bulletCount: 345,},
    {id: "3",title: "我是标题3我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名3",totalTime: 360,createTime: "2020-01-11 25:12:30",viewCount: 1234535,bulletCount: 4356,},
    {id: "4",title: "我是标题4我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名4",totalTime: 300,createTime: "2015-11-11 25:12:30",viewCount: 5432,bulletCount: 456,},
    {id: "5",title: "我是标题5我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名5",totalTime: 10,createTime: "2010-01-25 25:12:30",viewCount: 31516165,bulletCount: 789454,},
    {id: "6",title: "我是标题6我是标题我是标题8d-8065-9a6797",coverPath: "0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg",createUserName: "作者名6",totalTime: 15,createTime: "2022-11-07 25:12:30",viewCount: 87657,bulletCount: 11345345,},
  ];
  // axios.get("/testaxios/test/now").then((res) => {
  //   console.log(res);
  //   data.value = res.data;
  // });
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
  background-color: var(--BackBaffle);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;

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
  height: 100%;
  background-color: var(--BackBaffle);
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

.charts-card {
  width: 310px;
  height: 380px;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
