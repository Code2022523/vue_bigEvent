import request from '../utils/request'

export const registerAPI = (data) => {
  const params = new URLSearchParams()
  params.append('username', data.username)
  params.append('password', data.password)
  return request({
    url: '/api/reguser',
    method: 'post',
    params
  })
}
export const loginAPI = (data) => request({ url: '/my/login', method: 'post', data })
