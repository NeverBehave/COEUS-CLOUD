import axios from '@/config/axios'
import _ from 'lodash'

// With Conditon
export async function deviceList (data) {
  return axios({
    url: '/cloud/device/read/list',
    method: 'put',
    data: {
      endTime: '',
      isOnline: '',
      keyword: '',
      playState: '',
      runState: '',
      startTime: ''
    }
  })
}

export async function allDeviceList () {
  return axios({
    url: '/cloud/device/read/qlist2',
    method: 'put',
    data: {}
  })
}

//
export async function deviceDetail (id) {
  return axios({
    url: '/cloud/device/read/detail',
    method: 'put',
    data: {
      id
    }
  })
}

export async function updateDevice ({
  id = null, password, deviceId, description, version
}) {
  // Remove null field
  let data = _.omitBy({
    id,
    desc: password,
    deviceNo: deviceId,
    remark: description,
    version
  }, _.isNull)
  return axios({
    url: '/cloud/device/update',
    method: 'post',
    data
  })
}

// [{"id":"1131099426635640833"},{"id":"1131099404028342273"}]
// ?????
export async function deleteDevices (ids) {
  return axios({
    url: '/cloud/device/deleteBatch',
    method: 'delete',
    data: ids.map(e => {
      return {
        id: e
      }
    })
  })
}

export async function disconnectDevices (ids) {
  return axios({
    url: '/cloud/device/unlink',
    method: 'put',
    data: ids.map(e => {
      return {
        id: e
      }
    })
  })
}

// rows:[]
export async function onlineDeviceList (ids) {
  return axios({
    url: '/cloud/device/read/onlineList',
    method: 'put',
    data: {}
  })
}

export async function playDevice (id) {
  return axios({
    url: '/cloud/device/doPlay',
    method: 'put',
    data: {
      id,
      state: '1'
    }
  })
}

export async function playPosition (id, position) {
  return axios({
    url: '/cloud/device/doPlay',
    method: 'put',
    data: {
      id,
      position
    }
  })
}

export async function pauseDevice (id) {
  return axios({
    url: '/cloud/device/doPause',
    method: 'put',
    data: {
      id,
      state: '1'
    }
  })
}

export async function pausePosition (id, position) {
  return axios({
    url: '/cloud/device/doPause',
    method: 'put',
    data: {
      id,
      position
    }
  })
}

export async function runDevice ({ id, state }) {
  return axios({
    url: '/cloud/device/run',
    method: 'put',
    data: {
      id,
      state
    }
  })
}

// Control Center Section Begin

// id: "1132930361366638594"
// position: "9"
export async function playMedia ({
  id, position
}) {
  return axios({
    url: '/cloud/device/doPlay',
    method: 'put',
    data: {
      id,
      position
    }
  })
}

export async function renamePlayListItem ({
  id, name, position
}) {
  return axios({
    url: '/cloud/device/rename',
    method: 'put',
    data: {
      id,
      name,
      position
    }
  })
}

/*
{"data":{"corner":"360","createBy":"1131411248488116225","createTime":"2019-05-27 16:43:42","devId":"1132930361366638594","enable":"1","id":"1132930362738176002","isAutoplay":"0","isBreath":"1","keyword":"","light":"100","playMode":"2","remark":"","updateBy":"1131411248488116225","updateTime":"2019-05-27 16:44:54","vol":"78"},"code":"200","msg":"请求成功","timestamp":"1558947260366"}
*/

export async function deviceSetting (id) {
  return axios({
    url: '/cloud/deviceSetting/read/detail',
    method: 'put',
    data: {
      devId: id
    }
  })
}

/*
code: "200"
data: {createBy: "1131411248488116225", createTime: "2019-05-27 16:43:42", devId: "1132930361366638594",…}
createBy: "1131411248488116225"
createTime: "2019-05-27 16:43:42"
devId: "1132930361366638594"
enable: "1"
id: "1132930362058698753"
itemState: "1"
keyword: ""
playList: "[{"name":"drone.mp4","size":"16080","sort":"0"},{"name":"hambuiger.mp4","size":"10460","sort":"1"},{"name":"pk.mp4","size":"14710","sort":"2"},{"name":"Ring.mp4","size":"12080","sort":"3"},{"name":"xiangji.mp4","size":"16080","sort":"4"},{"name":"xintiao.mp4","size":"19130","sort":"5"},{"name":"zhuanshi.mp4","size":"9210","sort":"6"},{"name":"企鹅_PIC.mp4","size":"14000","sort":"7"},{"name":"广州塔_PIC.mp4","size":"14000","sort":"8"},{"name":"neko.jpg","size":"0","sort":"9"},{"name":"neko.jpg","size":"0","sort":"10"}]"
playingItem: "11"
remark: ""
updateBy: "1131411248488116225"
updateTime: "2019-05-27 16:52:39"
msg: "请求成功"
timestamp: "1558947260582"
*/
// 不能知道当前影片是否在播放，只知道当前位置
export async function devicePlayList (id) {
  return axios({
    url: '/cloud/devicePlaylist/read/detail',
    method: 'put',
    data: {
      devId: id
    }
  })
}

// 0, 1
export async function setAutoStart (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setAutoOpen',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

// number
export async function setVolumn (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setVol',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

// number
export async function setLight (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setLight',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

// 角度
export async function setCor (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setCor',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

// 播放顺序
// 单曲0，顺序1，随机2
export async function setMode (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setMode',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

export async function setBreath (id, value) {
  return axios({
    url: '/cloud/deviceSetting/setBreath',
    method: 'put',
    data: {
      id,
      value
    }
  })
}

// Positions: array of ids
export async function deletePlayListItems (id, positions) {
  console.log(id, positions)
  return axios({
    url: '/cloud/device/delPlayList',
    method: 'put',
    data: {
      id,
      position: positions
    }
  })
}
