<template>
    <el-card>
        <div slot="header">
            <span>任务列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
        </div>
        <el-row>
            <el-button
                :loading="submitting"
                type="danger">删除选中</el-button>
            <el-button
                :loading="submitting"
                @click="refresh">刷新</el-button>
        </el-row>
        <el-divider/>
        <el-row>
            <TaskTable/>
        </el-row>
    </el-card>
</template>

<script>
import TaskTable from '../Tables/TaskList'
import { mapActions } from 'vuex'

import submit from '@/mixins/loading/submit'

export default {
  mixins: [submit],
  components: {
    TaskTable
  },
  methods: {
    ...mapActions('task', ['taskList']),
    refresh () {
      this.taskList().then(res => {
        this.startSubmit()
        this.$message('刷新成功！')
      }).catch(err => {
        this.$message.error('刷新失败，请重试')
      }).finally(() => {
        this.endSubmit()
      })
    }
  }
}
</script>
