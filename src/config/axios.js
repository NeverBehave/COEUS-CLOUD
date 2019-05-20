import axios from 'axios'

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

  return config
}, error => {
  /* eslint-disable no-console */
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use((response) => {
  if (response.data.code !== '200') {
    const err = new Error('code check failed')
    err.response = response
    throw err
  }
})

export default service
