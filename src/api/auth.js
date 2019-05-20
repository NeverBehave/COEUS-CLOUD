import axios from '@/config/axios'

export async function getMe () {
  return axios({
    url: '/cloud/user/read/current'
  })
}

export async function login (data) {
  return axios({
    url: '/user/invite',
    method: 'post',
    data
  })
}

export async function logout () {
  return axios({
    url: '/logout',
    method: 'post',
    data: {}
  })
}

export async function register (data) {
  return axios({
    url: '/regin',
    method: 'post',
    data
  })
}
