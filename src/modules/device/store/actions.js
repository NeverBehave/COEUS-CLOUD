import { deviceList as deviceListAPI,
  allDeviceList,
  onlineDeviceList,
  deleteDevices as deleteDevicesAPI,
  updateDevice,
  disconnectDevices as disconnectDevicesAPI,
  pauseDevice,
  playDevice,
  runDevice,
  deviceSetting as deviceSettingAPI,
  devicePlayList as devicePlayListAPI,
  setAutoStart,
  setLight,
  setCor,
  setVolumn,
  setMode,
  setBreath,
  renamePlayListItem as renamePlayListItemAPI,
  deletePlayListItems as deletePlayListItemAPI,
  playPosition,
  pausePosition } from '@/api/device'

import _ from 'lodash'

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
  devicePlay ({}, id) {
    return playDevice(id)
  },
  devicePause ({}, id) {
    return pauseDevice(id)
  },
  deviceStop ({}, id) {
    return runDevice({
      state: 0,
      id
    })
  },
  deviceStart ({}, id) {
    return runDevice({
      state: 1,
      id
    })
  },
  deviceSetting ({ commit }, id) {
    return deviceSettingAPI(id)
      .then(res => {
        let { data } = res.data
        return {
          ...data,
          light: parseInt(data.light),
          corner: parseInt(data.corner),
          volumn: parseInt(data.vol),
          breath: data.isBreath,
          mode: data.playMode,
          autoStart: data.isAutoPlay
        }
      }).then(res => {
        commit('deviceSetting', res)
        return res
      })
  },
  devicePlayList ({ commit }, id) {
    return devicePlayListAPI(id)
      .then(res => {
        res.data.data.playList = JSON.parse(res.data.data.playList)
        commit('devicePlayList', res.data.data)
        return res
      })
  },
  deviceVolumn ({ commit, getters }, { id, value }) {
    return setVolumn(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.volumn = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceAutoStart ({ commit, getters }, { id, value }) {
    return setAutoStart(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.volumn = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceAngle ({ commit, getters }, { id, value }) {
    return setCor(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.corner = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceLight ({ commit, getters }, { id, value }) {
    return setLight(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.light = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceMode ({ commit, getters }, { id, value }) {
    return setMode(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.mode = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceBreath ({ commit, getters }, { id, value }) {
    return setBreath(id, value)
      .then(res => {
        let setting = getters.deviceSetting
        setting.breath = value
        commit('deviceSetting', setting)
        return res
      })
  },
  deviceControlPlay ({ commit, getters }, { id, position }) {
    return playPosition(id, position)
  },
  deviceControlPause ({ commit, getters }, { id, position }) {
    return pausePosition(id, position)
  },
  renamePlayListItem ({ commit, getters }, { id, position, name }) {
    return renamePlayListItemAPI({ id, position, name }).then(res => {
      let detail = getters.devicePlayList
      let i = _.findIndex(detail.playList, { sort: position })
      if (i !== -1) {
        detail.playList[i].name = name
      }
      commit('devicePlayList', detail)
      // Must have a better way
      return res
    })
  },
  deletePlayListItem ({ commit, getters }, { id, positions }) {
    return deletePlayListItemAPI(id, positions).then(res => {
      let detail = getters.devicePlayList
      positions.forEach(e => {
        let i = _.findIndex(detail.playList, { sort: e })
        if (i !== -1) {
          detail.playList.splice(i, 1)
        }
      })
      commit('devicePlayList', detail)
      // Must have a better way
      return res
    })
  },
  refresh ({ commit }) {
    commit('refresh')
  }
}
