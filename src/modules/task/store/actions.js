import { newTask as newTaskAPI } from '@/api/task'

export default {
  newTask ({}, data) {
    return newTaskAPI(data)
  }
}
