import { newTask as newTaskAPI,
  taskList as taskListAPI,
  deleteTasks as deleteTaskAPI,
  disableTasks as disableTasksAPI,
  enableTasks as enableTasksAPI,
  runTasks as runTasksAPI } from '@/api/task'

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
  },
  disableTasks ({}, ids) {
    return disableTasksAPI(ids)
  },
  enableTasks ({}, ids) {
    return enableTasksAPI(ids)
  },
  runTasks ({}, ids) {
    return runTasksAPI(ids)
  }
}
