import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue  from '@element-plus/icons-vue';
import 'default-passive-events'


const app = createApp(App)
//全局注册elementplus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}


app.mount('#app')
