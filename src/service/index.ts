// service 统一出口
import tintRequest from '@/service/request'
import { BASE_URL, TIME_OUT } from '@/service/request/config'

const wlRequest = new tintRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default wlRequest
