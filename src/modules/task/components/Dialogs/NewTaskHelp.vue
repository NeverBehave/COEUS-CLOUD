<template>
    <el-dialog
        title="帮助信息"
        :visible.sync="dialog"
        width="30%"
        center>
        <span>如果你不清楚如何使用Cron设定执行时间，可以查阅
            <el-link href="http://www.bejson.com/othertools/cron/">此教程</el-link>
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialog = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import child from '@/mixins/dialog/child'

export default {
  mixins: [child]
}
</script>
