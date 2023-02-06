<template>
  <div>
    <div>
      <div id="main-recommend-view" class="link-blue">
        换一换<el-icon><Refresh /></el-icon>
      </div>
      <div id="main-first-line">
        <FirstLine></FirstLine>
      </div>
      <div id="main-other-lines">
        <BrieflyChannel></BrieflyChannel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FirstLine from './head_line/FirstLine.vue'
import BrieflyChannel from './briefly-channel/BrieflyChannels.vue'

onMounted(() => {
})

// 卸载定时器之类的
onUnmounted(() => {

})

</script>

<style scoped>
#main-recommend-view {
  width: 120px;
  height: 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: var(--BackBaffle);
  float: right;
  
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
#main-first-line {
  width: 100%;
  height: var(--HomePartitionLineHeight);
  position: relative;
  background-color: var(--BackBaffle);
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

#main-other-lines{
  width: 100%;
  position: relative;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false
}
</script>
