import axios from '@/config/axios'

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

export async function addDevice (data) {
  return axios({
    url: '/cloud/device/update',
    method: 'post',
    data: {
      desc: data.password,
      deviceNo: data.deviceID,
      remark: data.description,
      version: data.version
    }
  })
}

export async function updateDevice (data) {
  return axios({
    url: '/cloud/device/update',
    method: 'post',
    data: {
      id: '',
      desc: 'aaa',
      deviceNo: 'aa',
      remark: '',
      version: 'X65'
    }
  })
}

// [{"id":"1131099426635640833"},{"id":"1131099404028342273"}]
// ?????
export async function deleteDevice (ids) {
  return axios({
    url: '/cloud/device/deleteBatch',
    method: 'delete',
    data: ids
  })
}

// rows:[]
export async function onlineDeviceList () {
  return axios({
    url: '/cloud/device/read/onlineList',
    method: 'put',
    data: {}
  })
}
