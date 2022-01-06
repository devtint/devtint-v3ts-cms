import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global' // 全局注册组件
import '@/service/axios.demo' // 全局注册 axios

const app = createApp(App)
registerApp(app) // 全局注册组件,element-plus
app.use(store)
app.use(router)
app.mount('#app')
