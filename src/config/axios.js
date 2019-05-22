import axios from 'axios'
import store from '@/store'

const API_ENDPOINT = '/api/'

const service = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 15000
})

service.interceptors.request.use(config => {
//   const userToken = store.getters['user/token']
//   if (userToken) {
//     config.headers.Authorization = `Bearer ${userToken}`
//   }
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
    const err = new Error('code check failed')
    err.response = response
    throw err
  }
})

export default service
