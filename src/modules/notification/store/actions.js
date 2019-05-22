import { notification } from '@/api/notification'

export default {
  updateNotification ({ commit }) {
    notification().then(res => {
      commit('notification', res.data.rows)
    })
  }
}
