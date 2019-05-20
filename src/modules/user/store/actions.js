import { getMe } from '@/api/auth'

export default {
  login ({ commit }, token) {
    commit('setToken', token)
  },
  logout ({ commit }) {
    commit('setToken', null)
  },
  async getMe ({ commit }) {
    const userInfo = await getMe()
    commit('setProfile', userInfo.data.user)
  }

}
