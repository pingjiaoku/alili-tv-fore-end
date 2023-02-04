<template>
  <div class="nav-left">
    <div>
      <img class="logo" src="../../assets/imgs/font-logo.svg" alt="">
    </div>
    <div class="guide-icon">
      <el-icon :class="iconRotate" :size="iconSize" :color="iconColor">
        <Menu></Menu>
      </el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, watch } from 'vue'

const iconRotate = ref('')
const iconSize = ref(25)
const iconColor = ref('aliceblue')
const props = defineProps(['changStyle'])

watch(() => props.changStyle, () => {
  iconColor.value = props.changStyle ? 'darkgray' : 'aliceblue'
})

onMounted(() => {

})

// 卸载定时器之类的
onUnmounted(() => {

})

</script>

<style scoped>
.nav-left {
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 40px;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #04f78aaa);
}

.guide-icons {
  margin-left: 5px;
  color:dimgray
}

.guide-icon:hover svg {
  animation: rotate 0.5s;
}

@keyframes rotate {
  100% {
    transform: rotate(90deg);
  }
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false
}
</script>
