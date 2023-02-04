import { createApp } from 'vue'
import './style.css'
import './style/animation.css'
import App from './App.vue'
import * as ElementPlusIconsVue  from '@element-plus/icons-vue';
import 'default-passive-events'

const app = createApp(App)
//全局注册elementplus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.provide('channel', [
  { id: 1, icon: "#el-icon-fangwu", name: "主页" },
  { id: 2, icon: "#el-icon-huore", name: "热门" },
  { id: 3, icon: "#el-icon-dianshijiB", name: "影视" },
  { id: 4, icon: "#el-icon-erjiB", name: "音乐" },
  { id: 5, icon: "#el-icon-youxiji", name: "游戏" },
  { id: 6, icon: "#el-icon-mianshi", name: "美食" },
  { id: 7, icon: "#el-icon-gou", name: "宠物" },
  { id: 8, icon: "#el-icon-yuedu", name: "学习" },
  { id: 9, icon: "#el-icon-xiaochou", name: "搞笑" },
  { id: 10, icon: "#el-icon-jianshen", name: "运动" },
  { id: 11, icon: "#el-icon-xingqiu", name: "科普" },
  { id: 12, icon: "#el-icon-zhifengche", name: "生活" },
  { id: 13, icon: "#el-icon-shishang", name: "时尚" }, 
  { id: 14, icon: "#el-icon-youxi", name: "娱乐" }, 
])

app.mount('#app')
