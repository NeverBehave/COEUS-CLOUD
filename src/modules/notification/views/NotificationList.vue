<template>
    <el-table
      :data="notifications"
      style="width: 100%">
      <el-table-column
        prop="noticetitle"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createdBy"
        label="姓名"
        width="180">
      </el-table-column>
    </el-table>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('notification', ['notifications'])
    }
}
</script>
