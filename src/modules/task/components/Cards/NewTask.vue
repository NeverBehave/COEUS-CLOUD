<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>提交新任务</span>
    <el-button style="float: right; padding: 3px 0" type="text" @click="helpDialog = true">需要帮助？</el-button>
  </div>
  <NewTaskForm/>
  <NewTaskHelp :helpDialog="helpDialog"/>
</el-card>
</template>

<script>
import NewTaskForm from '../Forms/NewTask'
import NewTaskHelp from '../Dialogs/NewTaskHelp'

export default {
  data () {
    return {
      helpDialog: false
    }
  },
  components: {
    NewTaskForm,
    NewTaskHelp
  }
}
</script>
