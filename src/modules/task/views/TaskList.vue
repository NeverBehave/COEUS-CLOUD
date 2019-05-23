<template>
    <TaskListCard/>
</template>

<script>
import TaskListCard from '../components/Cards/TaskList'
import { mapActions } from 'vuex'

export default {
  components: {
    TaskListCard
  },
  methods: {
    ...mapActions('task', ['taskList'])
  },
  mounted () {
    this.taskList().then(res => {
      this.$message('任务列表获取成功！')
    }).catch(err => {
      this.$message.error('任务列表获取失败')
    })
  }
}
</script>
