<template>
    <el-dialog
        title="帮助信息"
        :visible.sync="helpDialog"
        width="30%"
        center>
        <span>如果你不清楚如何使用Cron设定执行时间，可以查阅
            <a href="http://www.bejson.com/othertools/cron/">此教程</a>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="helpDialog = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  props: {
    helpDialog: {
      type: Boolean,
      required: true
    }
  }
}
</script>
