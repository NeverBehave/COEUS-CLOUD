import axios from 'axios'
import store from '@/store'

const API_ENDPOINT = 'http://127.0.0.1'

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
  console.log(response)
})

export default service
