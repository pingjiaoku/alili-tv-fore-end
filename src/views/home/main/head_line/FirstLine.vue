<template>
    <div id="my-carousel-view">
      <MyCarousel></MyCarousel>
    </div>
    <div id="f-line-r">
      <div v-for="item in recommend.slice(0, 6)">
        <div class="default-video-card">
          <VideoCard :data="item"></VideoCard>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MyCarousel from "./carousel/MyCarousel.vue";
import VideoCard from "../../../../components/VideoCard/VideoCard1.vue";

const recommend = ref([]);



onMounted(() => {
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
});

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
