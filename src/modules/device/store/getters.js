export default {
  onlineDevices: state => state.onlineDevices,
  devices: state => state.devices,
  versions: state => state.versions,
  refresh: state => state.refresh,
  modes: state => state.modes,
  deviceSetting: state => state.deviceSetting,
  devicePlayList: state => state.devicePlayList,
  // Device Control
  deviceControlId: (state, getters) => {
    let c = getters.deviceControlSelected
    if (c) {
      return c.id
    }
    return null
  },
  deviceControlSelected: state => state.deviceControl.selected,
  deviceControlRefresh: state => state.deviceControl.refresh,
  deviceVolumn: (state, getters) => getters.deviceSetting.volumn,
  deviceLight: (state, getters) => getters.deviceSetting.light,
  deviceAngle: (state, getters) => getters.deviceSetting.corner
}
