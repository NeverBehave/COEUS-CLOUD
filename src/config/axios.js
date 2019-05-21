import axios from 'axios'
import store from '@/store'

const dev = process.env.NODE_ENV || 'development'
// In order to make cookie works, we must have a dot in the domain (security issue)
const API_ENDPOINT = dev === 'development' ? 'http://127.0.0.1:8010/proxy' : '/api/'

const service = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 15000
})

service.interceptors.request.use(config => {
//   const userToken = store.getters['user/token']
//   if (userToken) {
//     config.headers.Authorization = `Bearer ${userToken}`
//   }

  return config
}, error => {
  /* eslint-disable no-console */
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.code !== '200') { // 200, 303, 401, 500
    if (response.data.code === '401') {
      // Login issue
      store.dispatch('auth/isLogin', false)
    }
    const err = new Error('code check failed')
    err.response = response
    throw err
  }
})

export default service
