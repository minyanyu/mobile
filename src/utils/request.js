import axios from 'axios'
import JSONBig from 'json-bigint'
import store from '../store/index'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn',
  timeout: 1000
})
axios.defaults.transformResponse = [function (data) {
  return data ? JSONBig.parse(data) : data // 处理大数字
}]
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.user) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data.data || response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance
