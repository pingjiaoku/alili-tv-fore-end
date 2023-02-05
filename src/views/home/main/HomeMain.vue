<template>
  <div>
    <div>
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

#main-first-line {
  width: 100%;
  height: var(--HomePartitionLineHeight);
  position: relative;
  background-color: var(--BackBaffle);
  border-radius: 30px;

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
