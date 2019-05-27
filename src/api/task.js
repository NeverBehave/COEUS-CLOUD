import axios from '@/config/axios'

/*
{"deviceNo":"","taskName":"aaa","remark":"111","status":"0","cron":"* * * * * ?","orderNum":"3","value":["1"],"enable":1}
*/
export async function newTask (data) {
  return axios({
    url: '/userTask',
    method: 'post',
    data: {
      deviceNo: data.deviceID,
      taskName: data.taskName,
      remark: data.description,
      status: data.enable,
      cron: data.cron,
      orderNum: data.type,
      value: [data.play_num],
      enable: 1 // ?
    }
  })
}

/*
{"rows":[{"createBy":"1130294111627264002","createTime":"2019-05-22 14:25:08","cron":"30 * * * * ?","enable":"1","id":"1131083555829706753","keyword":"","nextExctime":"2019-05-22 14:26:30","order":"#F1F2F306010108F4F5F6","remark":"111","status":"0","taskName":"aaa","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-22 14:25:08"},{"createBy":"1130294111627264002","createTime":"2019-05-22 14:21:25","cron":"30 * * * * ?","enable":"1","id":"1131082620072095746","keyword":"","nextExctime":"2019-05-22 14:22:30","order":"#F1F2F304010106F4F5F6","remark":"111","status":"0","taskName":"aaa","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-22 14:21:25"},{"createBy":"1130294111627264002","createTime":"2019-05-21 15:39:40","cron":"30 * 1-2 * * ?","enable":"1","id":"1130739920550490114","keyword":"","nextExctime":"2019-05-22 01:00:30","order":"#F1F2F306010108F4F5F6","remark":"11111","status":"0","taskName":"1111","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-21 15:39:40"},{"createBy":"1130294111627264002","createTime":"2019-05-20 10:19:27","cron":"30 * * * * ?","enable":"1","id":"1130296949690593281","keyword":"","nextExctime":"2019-05-20 10:20:30","order":"#F1F2F306010108F4F5F6","remark":"test","status":"0","taskName":"test","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-20 10:19:27"}],"current":"1","size":"10","pages":"1","total":"4","code":"200","msg":"请求成功","timestamp":"1558506357329"}
*/
export async function taskList () {
  return axios({
    url: '/userTask/read/tasks',
    method: 'put',
    data: {}
  })
}

export async function taskDetail (id) {
  return axios({
    url: '/userTask/read/detail',
    method: 'put',
    data: {
      id
    }
  })
}

// Array of IDs
export async function enableTask (ids) {
  return axios({
    url: '/userTask/open',
    method: 'post',
    data: {
      id: ids
    }
  })
}

// Array of IDs
export async function runTask (ids) {
  return axios({
    url: '/userTask/run',
    method: 'post',
    data: {
      id: ids
    }
  })
}

// Array of IDs
export async function disableTask (ids) {
  return axios({
    url: '/userTask/close',
    method: 'post',
    data: {
      id: ids
    }
  })
}

/*
{"rows":[{"createBy":null,"createTime":"2019-05-22 14:34:07","enable":"1","exctime":"2019-05-22 14:34:07","id":"1131085814856675329","keyword":"","remark":"","status":"1","taskId":"1130739920550490114","updateBy":null,"updateTime":"2019-05-22 14:34:07"}],"current":"1","size":"10","pages":"1","total":"1","code":"200","msg":"请求成功","timestamp":"1558506900570"}
*/
export async function taskLog (id) {
  return axios({
    url: '/userTaskLog/read/tasks',
    method: 'put',
    data: {
      id
    }
  })
}

// Array of IDs
export async function deleteTasks (ids) {
  return axios({
    url: '/userTask',
    method: 'delete',
    data: {
      id: ids
    }
  })
}
