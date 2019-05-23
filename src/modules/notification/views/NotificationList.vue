<template>
  <el-row>
    <el-col>
      <el-table
        :data="notifications"
        :default-sort = "{prop: 'createTime', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          prop="noticeTitle"
          label="标题"
          sortable>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="发布日期"
          sortable>
        </el-table-column>
        <el-table-column
          prop="content"
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
  },
  mounted: {

  }
}
</script>
