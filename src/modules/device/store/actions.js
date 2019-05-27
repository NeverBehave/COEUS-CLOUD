import { addDevice as addDeviceAPI,
  deviceList as deviceListAPI,
  onlineDeviceList } from '@/api/device'

export default {
  addDevice ({}, data) {
    return addDeviceAPI(data)
  },
  deviceList ({ commit }) {
    return deviceListAPI().then(res => {
      commit('devices', res.data.rows)
    })
  },
  updateOnlineDevices ({ commit }) {
    return onlineDeviceList().then(res => [
      commit('onlineDevices', res.data.rows)
    ])
  }
}
