import { getMe as UserAPI,
  updateUsername as updateUsernameAPI } from '@/api/user'

export default {
  getMe ({ commit }) {
    return UserAPI().then(res => {
      let { data } = res.data
      commit('username', data.account)
      commit('address', data.address)
      commit('email', data.email)
      commit('id', data.id)
      commit('phone', data.phone)
      commit('remark', data.remark)
      commit('userType', data.userType)
      return res
    })
  },
  updateUsername ({}, newName) {
    return updateUsernameAPI(newName)
  },
  updatePassword ({}, { verificationCode, password }) {

  },
  updatePhoneNumber ({}, { oldVerificatioCode, newVerificationCode, newPhone }) {

  }
}
