import { App } from 'vue'
import 'element-plus/dist/index.css' // 引入element-plus样式
// import 'element-plus/lib/theme-chalk/base.css' // 引入element-plus样式

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon
} from 'element-plus/lib/components'

import { Avatar, Iphone, PhoneFilled } from '@element-plus/icons' // svg图标

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon
]

const icons = [Avatar, PhoneFilled, Iphone]

export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  icons.forEach((icon) => {
    app.component(icon.name, icon)
  })
}
// for (const cpn of components) {
//   app.component(cpn.name, cpn)
// }
