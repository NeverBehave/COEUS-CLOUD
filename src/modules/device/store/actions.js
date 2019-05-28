import { deviceList as deviceListAPI,
         allDeviceList,
         onlineDeviceList,
         deleteDevices as deleteDevicesAPI,
         updateDevice,
         disconnectDevices as disconnectDevicesAPI,
         pauseDevice,
         playDevice,
         runDevice } from '@/api/device'

export default {
  addDevice ({}, data) {
    return updateDevice(data)
  },
  updateDevice ({}, data) {
    return updateDevice(data)
  },
  deviceList ({ commit }) {
    return allDeviceList().then(res => {
      commit('devices', res.data.rows)
    })
  },
  updateOnlineDevices ({ commit }) {
    return onlineDeviceList().then(res => [
      commit('onlineDevices', res.data.rows)
    ])
  },
  deleteDevices ({}, deviceIds) {
    return deleteDevicesAPI(deviceIds)
  },
  disconnectDevices ({}, deviceIds) {
    return disconnectDevicesAPI(deviceIds)
  },
  devicePlay ({}, id){
    return playDevice(id)
  },
  devicePause({}, id){
    return pauseDevice(id)
  },
  deviceStop({}, id) {
    return runDevice({
      state: '0',
      id
    })
  },
  deviceStart ({}, id){
    return runDevice({
      state: '1',
      id
    })
  },
  refresh ({ commit }) {
    commit('refresh')
  }
}
