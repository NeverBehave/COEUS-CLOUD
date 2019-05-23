import { addDevice as addDeviceAPI,
  deviceList as deviceListAPI } from '@/api/device'

export default {
  addDevice ({}, data) {
    return addDeviceAPI(data)
  },
  deviceList ({ commit }) {
    return deviceListAPI().then(res => {
      commit('devices', res.data.rows)
    })
  }
}
