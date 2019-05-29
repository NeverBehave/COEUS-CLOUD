export default {
  devices (state, data) {
    state.devices = data
  },
  onlineDevices (state, data) {
    state.onlineDevices = data
  },
  refresh (state) {
    state.refresh = !state.refresh
  },
  // Device Control
  deviceSetting (state, data) {
    state.deviceSetting = data
  },
  devicePlayList (state, data) {
    state.devicePlayList = data
  },
  deviceControlSelected (state, device) {
    state.deviceControl.selected = device
  },
  deviceControlPlayListRefresh (state) {
    state.deviceControl.refresh = !state.deviceControl.refresh
  },
  deviceControlrunState (state, run) {
    state.deviceControl.selected.runState = run
  }
}
