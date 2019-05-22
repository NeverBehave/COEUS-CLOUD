import { getMe as UserAPI,
         updateUsername as updateUsernameAPI } from '@/api/auth'

export default {
  getMe ({ commit }) {
    return UserAPI().then(res => {
      let { data } = res.response
      commit('username', data.account)
      commit('address', data.address)
      commit('email', data.email)
      commit('id', data.id)
      commit('phone', data.phone)
      commit('remark', data.remark)
      commit('userType', data.userType)
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
