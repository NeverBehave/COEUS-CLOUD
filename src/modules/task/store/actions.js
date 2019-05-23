import { newTask as newTaskAPI,
  taskList as taskListAPI } from '@/api/task'

export default {
  newTask ({}, data) {
    return newTaskAPI(data)
  },
  taskList ({ commit }) {
    return taskListAPI().then(res => {
      commit('taskList', res.data.rows)
    })
  }
}
