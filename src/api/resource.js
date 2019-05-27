import axios from '@/config/axios'

/*
{"rows":[{"Groupname":"/","createBy":"1131411248488116225","createTime":"2019-05-23 14:58:54","enable":"1","groupId":"1131411249264062465","groupname":"/","id":"1131454436963774465","keyword":"","name":"neko.jpg","remark":"d8a0fdce7f854c6c82e87707dbb61a1b","saveName":"c6d9752e-1245-421a-aff1-36a8bba1c4d4.jpg","size":"49085","state":"1","thumbBlob":null,"thumbnail":"","type":"1","uid":"1131411248488116225","updateBy":"1131411248488116225","updateTime":"2019-05-23 15:01:00"}],"current":"1","size":"10","pages":"1","total":"1","code":"200","msg":"请求成功","timestamp":"1558939520357"}
*/
export async function resourceList ({
  groupId
}) {
  return axios({
    url: '/cloud/resource/read/list',
    method: 'put',
    data: {
      endTime: '',
      groupId: groupId,
      keyword: '',
      startTime: '',
      state: ''
    }
  }).then(res => {
    res.data.rows.forEach(e => {
      if (e.groupname !== undefined) {
        e.groupName = e.groupname
      }
    })

    return res
  })
}

/*
{"data":{"createBy":"1130294111627264002","createTime":"2019-05-20 10:18:07","enable":"1","groupId":"1130294112583565313","groupName":"/","id":"1130296614695727105","keyword":"","name":"aaaa","remark":"841a15fd019d4cf981d69f06bf99d77f","saveName":"70360b82-651f-400d-910a-c710b1bcf856.png","size":"15121","state":"1","thumbBlob":null,"thumbnail":"","type":"1","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-22 15:06:53"},"code":"200","msg":"请求成功","timestamp":"1558508925403"}
*/
export async function resourceDetail (id) {
  return axios({
    url: '/cloud/resource/read/detail',
    method: 'put',
    data: {
      id
    }
  })
}

export async function updateResource (id, data) {
  return axios({
    url: '/cloud/resource/update',
    method: 'post',
    data: {
      id,
      name: data.name
    }
  })
}

export async function updateResourceGroup (id, data) {
  return axios({
    url: '/cloud/resourceGroup/update',
    method: 'post',
    data: {
      enable: 1,
      id: '',
      name: 'aaa',
      parentId: ''
    }
  })
}

export async function createResourceGroup ({ name, parentId = '' }) {
  return axios({
    url: '/cloud/resourceGroup/update',
    method: 'post',
    data: {
      enable: 1,
      id: '',
      name,
      parentId
    }
  })
}

/*
{"data":{"createBy":"1130294111627264002","createTime":"2019-05-22 15:17:30","enable":"1","id":"1131096731229089793","keyword":"","name":"aaa","parentId":null,"path":"","remark":"0,","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-22 15:17:30"},"code":"200","msg":"请求成功","timestamp":"1558509504640"}
*/
export async function resourceGroupDetail (id) {
  return axios({
    url: '/cloud/resourceGroup/read/detail',
    method: 'put',
    data: {
      id
    }
  })
}

export async function deleteResourceGroup (id) {
  return axios({
    url: '/cloud/resourceGroup/del',
    method: 'delete',
    data: {
      id
    }
  })
}

// Array of ids
export async function deleteResources (ids) {
  let flattern = []
  ids.forEach(e => {
    flattern.push({
      id: e
    })
  })
  return axios({
    url: '/cloud/resource/delBatch',
    method: 'delete',
    data: flattern
  })
}

/*
{"rows":[{"createBy":"1130294111627264002","createTime":"2019-05-20 14:15:36","enable":"1","id":"1130356376531628034","keyword":"","name":"jjjj","parentId":"1130294112583565313","path":"","remark":"0,1130294112583565313,","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-20 14:15:36"},{"createBy":"1130294111627264002","createTime":"2019-05-20 10:08:11","enable":"1","id":"1130294112583565313","keyword":"","name":"/","parentId":"0","path":"0,","remark":"根目录","uid":"1130294111627264002","updateBy":"1130294111627264002","updateTime":"2019-05-20 10:08:11"}],"total":"2","code":"200","msg":"请求成功","timestamp":"1558508589540"}
*/
export async function resourceGroup (data) {
  return axios({
    url: '/cloud/resourceGroup/read/list',
    method: 'put',
    data: {}
  })
}

/*
{"fileNames":[{"filename":"d799df5a-0cec-4a93-b335-c9e64a89c30e.jpg","size":"49085","thumb":"/usr/local/files/thumb/","name":"neko.jpg","state":"2","type":"1"}],"code":"200","msg":"请求成功","timestamp":"1558509160890"}
*/
export function uploadResource () {
  return '/api/cloud/resource/uploadFile'

  // return axios({
  //   url: '/cloud/resource/uploadFile',
  //   method: 'post',
  //   data: {
  //     id,
  //     fileName: file
  //   }
  // })
}

/*
[{"resourceId":"1132904937718771714","deviceNo":"Coeus65000002"},{"resourceId":"1132865570547658754","deviceNo":"Coeus65000002"},{"resourceId":"1131454436963774465","deviceNo":"Coeus65000002"}]
*/
export async function downloadResource () {
  return axios({
    url: '/cloud/device/downloadTo',
    method: 'put',
    data: [

    ]
  })
}
