import axios from '@/config/axios'

/*
{"data":{"devices":"0","runed":"0","online":"0","resources":"1","passed":"1","tasks":"2"},"code":"200","msg":"请求成功","timestamp":"1558495756910"}
*/
export async function status () {
  return axios({
    url: '/cloud/device/read/index/list',
    method: 'put',
    data: {}
  })
}
