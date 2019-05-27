import { newTask as newTaskAPI,
  taskList as taskListAPI,
  deleteTasks as deleteTaskAPI } from '@/api/task'

export default {
  newTask ({}, data) {
    return newTaskAPI(data)
  },
  taskList ({ commit }) {
    return taskListAPI().then(res => {
      commit('taskList', res.data.rows)
    })
  },
  deleteTasks ({}, ids) {
    return deleteTaskAPI(ids)
  }
}
