<template>
    <el-dialog
    title="分组详情"
    :visible.sync="dialog"
    >
        <el-row>
            <el-col>名称</el-col>
            <el-col>{{ node.name }}</el-col>
        </el-row>
        <el-row>
            <el-col>创建时间</el-col>
            <el-col>{{ node.createTime }}</el-col>
        </el-row>
        <el-row>
            <el-col>更新时间</el-col>
            <el-col>{{ node.updateTime }}</el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialog = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import child from '@/mixins/dialog/child'

export default {
  mixins: [child],
  props: {
    node: {
      type: Object
    }
  },
  methods: {
  }
}
</script>
