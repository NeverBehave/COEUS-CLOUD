import { getMe, login as loginAPI, register as registerAPI } from '@/api/auth'

export default {
    login({}, data) {
        return loginAPI(data)
    },
    register({}, data) {
        return registerAPI(data)
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
