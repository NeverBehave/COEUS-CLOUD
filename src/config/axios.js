import axios from 'axios'
import store from '@/store'

const API_ENDPOINT = '/api/'

const service = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 15000
})

service.interceptors.request.use(config => {
  config.headers.credentials = 'include'

  return config
}, error => {
  /* eslint-disable no-console */
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.code !== '200') { // 200, 303, 401, 500
    if (response.data.code === '401' || response.data.code === '303') {
      // Login issue
      store.commit('auth/isLogin', false)
    }
    const err = new Error('Code Check Failed')
    err.data = response.data

    throw err
  } else {
    return response
  }
}, error => {
  /* eslint-disable no-console */
  // Here we may encounter network issue or security policy related issue
  // We need to throw an error since we have no data received
  console.log(error)
  store.commit('auth/isLogin', false)
  const res = new Error('Request Failed')
  res.data = {}
  res.data.msg = '网络开小差了，请稍后重试'

  throw res
})

export default service
