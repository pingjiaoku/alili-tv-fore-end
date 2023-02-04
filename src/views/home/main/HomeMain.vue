<template>
  <div>
    <div style="height: 1234px">
      <div id="main-first-line">
        <FirstLine></FirstLine>
      </div>
      <div id="main-other-lines">

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FirstLine from './01_line/FirstLine.vue'

onMounted(() => {
})

// 卸载定时器之类的
onUnmounted(() => {

})

</script>

<style scoped>

#main-first-line {
  width: 100%;
  height: 450px;
  position: relative;
  background-color: aliceblue;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false
}
</script>
