<template>
  <el-row>
    <el-col>
      <el-table
        :data="notifications"
        style="width: 100%">
        <el-table-column
          prop="noticetitle"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="createdBy"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="createdBy"
          label="详情">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('notification', ['notifications'])
  }
}
</script>
