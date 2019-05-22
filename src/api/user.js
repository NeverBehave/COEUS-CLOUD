import axios from '@/config/axios'

export async function getMe () {
  return axios({
    url: '/cloud/user/read/current'
  })
}

export async function updateUsername (name) {
  return axios({
    url: '/cloud/user/update',
    method: 'post',
    data: {
      account: name
    }
  })
}

export async function updateUser (data) {
  return axios({
    url: '/cloud/user/update',
    method: 'post',
    data: data
  })
}
