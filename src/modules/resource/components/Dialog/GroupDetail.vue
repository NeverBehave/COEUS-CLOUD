<template>
    <el-dialog
    title="分组详情"
    :visible.sync="showDialog"
    >
        <el-row>
            <el-col>分组名称</el-col>
            <el-col>{{ node.name }}</el-col>
        </el-row>
        <el-row>
            <el-col>创建时间</el-col>
            <el-col>{{ node.createTime }}</el-col>
        </el-row>
        <el-row>
            <el-col>更新事件</el-col>
            <el-col>{{ node.updateTime }}</el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="closeDialog">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
    node: {
      type: Object
    }
  },
  methods: {
    closeDialog () {
      this.$emit('update:showDialog', false)
    }
  }
}
</script>
