import { createApp } from 'vue'
import { registerApp } from '@/global' // 全局注册组件
import wlRequest from '@/service'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.less'
// import '@/service/axios.demo' // 全局注册 axios

const app = createApp(App)
registerApp(app) // 全局注册组件,element-plus
app.use(store)
app.use(router)
app.mount('#app')

interface DataType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  returnCode: string
  success: boolean
}

wlRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
