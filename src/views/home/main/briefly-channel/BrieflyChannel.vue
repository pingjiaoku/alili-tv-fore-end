<template>
  <div>
    <ul id="brief-channels">
      <li v-for="channel in channels">
        <div class="main-videos-card">
          <div v-for="item in 8" class="default-video-card">
            <VideoCard :videoCover="coverList"></VideoCard>
          </div>
        </div>
        <div>

        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import VideoCard from '../../../../components/VideoCard/VideoCard.vue'


const channels = ref(inject('channel'))
const coverList = ref("http://localhost:8080/common/download?name=0f252364-a561-4e8d-8065-9a6797a6b1d3.jpg")

onMounted(() => {

})

// 卸载定时器之类的
onUnmounted(() => {

})

</script>

<style scoped>
#brief-channels {
  width: 100%;
}
#brief-channels>li {
  width: 100%;
  height: var(--HomePartitionLineHeight);
  margin-top: 40px;
  
  background-color: var(--BackBaffle);
  border-radius: 30px;
}
.main-videos-card {
  width: 75%;
  height: 100%;
  border: 1px solid red;

  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.default-video-card {
  border: 1px solid rgb(85, 0, 255);
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false
}
</script>
