export default {
  devices (state, data) {
    state.devices = data
  },
  onlineDevices (state, data) {
    state.onlineDevices = data
  },
  refresh (state) {
    state.refresh = !state.refresh
  }
}
