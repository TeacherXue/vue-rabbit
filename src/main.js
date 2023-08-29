// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入自定义指令
import { lazyPlugin } from '@/directives'

//引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia()) //注册状态管理
app.use(router) //注册路由
app.use(lazyPlugin) //注册自定义指令
app.mount('#app')
