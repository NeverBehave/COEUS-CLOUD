import { indexInfo } from '@/api/dashboard'

export default {
  updateStatus ({ commit }) {
    return indexInfo().then(res => {
      let { data } = res.data
      commit('deviceNum', data.devices)
      commit('onlineDeviceNum', data.online)
      commit('taskNum', data.tasks)
      commit('runedTaskNum', data.runed)
      commit('resourceNum', data.resources)
      commit('passedResourceNum', data.passed)

      return res
    })
  }
}
