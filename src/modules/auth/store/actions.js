import { getMe,
  login as loginAPI,
  register as registerAPI,
  logout as logoutAPI } from '@/api/auth'

export default {
  login ({ commit }, data) {
    return loginAPI(data).then(res => {
      commit('isLogin', true)
    })
  },
  register ({}, data) {
    return registerAPI(data)
  },
  logout ({ commit }) {
    return logoutAPI().then(res => {
      commit('isLogin', false)
    })
  },
  isLogin ({ commit }) {
    return getMe().then(res => {
      commit('isLogin', true)
      return res.data
    }).catch(err => {
      commit('isLogin', false)
      throw err
    })
  }
}
