import { App } from 'vue'
import 'element-plus/dist/index.css' // 引入element-plus样式

import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]
export default function (app: App): void {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
// for (const cpn of components) {
//   app.component(cpn.name, cpn)
// }
