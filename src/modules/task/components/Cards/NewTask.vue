<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>提交新任务</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="showDialog = true">需要帮助？</el-button>
  </div>
  <NewTaskForm/>
  <NewTaskHelp :showDialog.sync="showDialog"/>
</el-card>
</template>

<script>
import NewTaskForm from '../Forms/NewTask'
import NewTaskHelp from '../Dialogs/NewTaskHelp'

export default {
  data () {
    return {
      showDialog: false
    }
  },
  components: {
    NewTaskForm,
    NewTaskHelp
  }
}
</script>
