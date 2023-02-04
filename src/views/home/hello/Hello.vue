<template>
  <div class="hello-main">
    <div class="welcome-font" :class="helloMainClass">
      <h1>啊咧咧？这都被你发现了</h1>
      <p>{{ welcomeFont }}</p>
    </div>
    <div>
      <div class="animate-bounce-down">
        <a href="#start" id="start">
          <el-icon color="aliceblue" size="50">
            <ArrowDownBold />
          </el-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const helloMainClass = ref("hidden");
const welcomeFonts = ref(["Welcome to Alili TV😶‍🌫️😶‍🌫️😶‍🌫️", "下滑更精彩！🎉🎉🎉"]);
const welcomeFont = ref("");
const fontIndex = ref(0);
const intervalTime = ref(200);
const fontSeq = ref(true);
const intervalMachine = ref();

onMounted(() => {
  setTimeout(() => {
    helloMainClass.value = "show";
  }, 100);

  intervalMachine.value = setTimeout(fn, intervalTime.value);
});
let fn = () => {
  if (fontSeq.value) {
    if (welcomeFonts.value[fontIndex.value].length > 0) {
      welcomeFont.value += welcomeFonts.value[fontIndex.value].charAt(0);
      welcomeFonts.value[fontIndex.value] =
        welcomeFonts.value[fontIndex.value].substring(1);
    } else {
      fontSeq.value = !fontSeq.value;
      intervalTime.value = 50;
    }
  } else {
    if (welcomeFont.value.length > 0) {
      welcomeFonts.value[fontIndex.value] += welcomeFont.value.charAt(0);
      welcomeFont.value = welcomeFont.value.substring(1);
    } else {
      fontSeq.value = !fontSeq.value;
      intervalTime.value = 200;
      fontIndex.value = (fontIndex.value + 1) % 2;
    }
  }
  clearTimeout(intervalMachine.value);
  intervalMachine.value = setTimeout(fn, intervalTime.value);
};

onUnmounted(() => {
  clearTimeout(intervalMachine.value);
});
</script>

<style scoped>
.hello-main {
  width: 100%;
  height: 100%;
}

.welcome-font {
  width: 100%;
  height: 90%;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 40px;
}

.welcome-font > p {
  height: 40px;
  font-size: 30px;
  margin-top: 20px;
}

@keyframes show {
  to {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-10px);
  }

  50%,
  100% {
    -webkit-transform: translateY(0);
  }

  75% {
    -webkit-transform: translateY(10px);
  }
}

@keyframes bounce-down {
  25% {
    transform: translateY(-10px);
  }

  50%,
  100% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(10px);
  }
}

.animate-bounce-down {
  -webkit-animation: bounce-down 1.5s linear infinite;
  animation: bounce-down 1.5s linear infinite;
}
</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
