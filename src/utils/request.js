import axios from 'axios'

// 创建axios实例
const myAxios = axios.create({
  // 基本地址
  baseURL: 'http://127.0.0.1'
})

// 导出axios
export default myAxios
