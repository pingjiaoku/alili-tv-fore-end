<template>
  <div class="nav-right">
    <div>
      <el-avatar :icon="UserFilled" />
    </div>
    <div>
      <ul class="personal-msg-icon">
        <li>
          <el-badge :value="1" :max="99" :hidden="chatBadge">
            <el-icon
              class="icon"
              :size="iconSize"
              :color="props.changStyle ? 'rgb(40, 40, 40)' : 'aliceblue'"
            >
              <ChatLineRound />
            </el-icon>
          </el-badge>
        </li>
        <li>
          <el-badge>
            <el-icon
              class="icon"
              :size="iconSize"
              :color="props.changStyle ? 'rgb(40, 40, 40)' : 'aliceblue'"
            >
              <Clock />
            </el-icon>
          </el-badge>
        </li>
        <li>
          <el-badge :value="12" :max="99" :hidden="spaceBadge">
            <el-icon
              class="icon"
              :size="iconSize"
              :color="props.changStyle ? 'rgb(40, 40, 40)' : 'aliceblue'"
            >
              <Orange />
            </el-icon>
          </el-badge>
        </li>
      </ul>
    </div>
    <div class="uploadManagerButton">
      <el-button color="cornflowerblue" @click="toUploadPage" size="large">
        稿件管理
        <el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import { UserFilled } from "@element-plus/icons-vue";

const iconSize = ref(25);
const props = defineProps(["changStyle"]);
const chatBadge = ref(false);
const spaceBadge = ref(false);

const toUploadPage = () => {
  console.log("跳转到稿件管理页面");
};

onMounted(() => {});

// 卸载定时器之类的
onUnmounted(() => {});
</script>

<style>
.nav-right,
.personal-msg-icon {
  display: flex;
  align-items: center;
  margin: 20px;
}

.personal-msg-icon {
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  transition: all 0.2s;
}

.icon:hover {
  transform: scale(1.3);

}
.icon:active {
  animation: obviously-beat 0.3s;
}
.uploadManagerButton {
  margin-left: 10px;
}
.uploadManagerButton span {
  color: aliceblue;
  font-size: 16px;
  font-family: Helvetica;
  font-weight: 400;
}

</style>

<script>
// 不继承父组件附加的属性
export default {
  inheritAttrs: false,
};
</script>
