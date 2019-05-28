<template>
  <el-table
    ref="taskTable"
    :data="tasks"
    tooltip-effect="dark"
    style="width: 100%"
    min-height="400px"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"/>
    <el-table-column
      label="任务名"
      column-key="taskName"
      prop="taskName"
      sortable
      fixed
      />
    <el-table-column
      label="设备编号"
      column-key="order"
      prop="order"
      sortable
      />
     <el-table-column
      label="状态"
      column-key="status"
      prop="status"
      sortable
      :filters="enableFilters"
      :filter-method="filterHandler"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          {{ scope.row.status === "1" ? '启用' : '禁用' }}
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="下次执行时间"
      column-key="nextExctime"
      prop="nextExctime"
      width="180"
      sortable
    />
    <el-table-column
      label="创建时间"
      column-key="createTime"
      width="180"
      prop="createTime"
      sortable
    />
    <el-table-column
      label="备注"
      column-key="remark"
      prop="remark"
      sortable
      show-overflow-tooltip
    />
    <el-table-column
      fixed="right"
      width="280"
    >
     <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button-group>
              <el-tooltip
                effect="dark"
                content="立即执行"
                placement="top-start"
              >
                <el-button
                  circle
                  @click="runNow(scope.row)"
                >
                    <font-awesome-icon
                      icon="running"
                    />
                </el-button>
              </el-tooltip>
             <el-tooltip
                effect="dark"
                content="查看日志"
                placement="top-start"
              >
              <el-button
                circle
                @click="viewLog(scope.row)"
              >
                  <font-awesome-icon
                    icon="stream"
                  />
              </el-button>
             </el-tooltip>
              <el-tooltip
                effect="dark"
                content="查看详情"
                placement="top-start"
              >
                <el-button
                  circle
                  @click="viewDetail(scope.row)"
                >
                    <font-awesome-icon
                      icon="info-circle"
                    />
                </el-button>
              </el-tooltip>
               <el-tooltip
                v-if="scope.row.status === '1'"
                effect="dark"
                content="禁用"
                placement="top-start"
              >
                <el-button
                  type="warning"
                  circle
                  @click="disable(scope.row)"
                >
                    <font-awesome-icon
                      icon="power-off"
                    />
                </el-button>
               </el-tooltip>
                <el-tooltip
                v-else
                effect="dark"
                content="启用"
                placement="top-start"
              >
                <el-button
                  type="primary"
                  circle
                  @click="enable(scope.row)"
                >
                    <font-awesome-icon
                      icon="power-off"
                    />
                </el-button>
               </el-tooltip>
                 <el-tooltip
                  effect="dark"
                  content="删除"
                  placement="top-start"
                >
                  <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="deleteTask(scope.row)"
                  />
                 </el-tooltip>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import filter from '@/mixins/table/filter'
import { mapGetters, mapActions } from 'vuex'

export default {
  mixins: [filter],
  props: {
    selected: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      enableFilters: [
        { text: '禁用', value: '0' },
        { text: '启用', value: '1' }
      ],
      search: '',
      deleteVisible: false
    }
  },
  computed: {
    ...mapGetters('task', ['tasks'])
  },
  methods: {
    ...mapActions('task', ['runTasks', 'disableTasks', 'enableTasks', 'deleteTasks']),
    handleSelectionChange (val) {
      this.$emit('update:selected', val)
    },
    runNow (task) {
      this.runTasks([task.id]).then(res => {
        this.$message.success('执行成功！')
      }).catch(err => {
        this.$message.error('任务执行失败')
      })
    },
    viewLog (task) {
      this.$message('尚未实现')
    },
    viewDetail (task) {
      this.$message('尚未实现')
    },
    disable (task) {
      this.disableTasks([task.id]).then(res => {
        this.$message.success('禁用成功!')
        task.status = '0'
      }).catch(err => {
        this.$message.error('禁用失败')
      })
    },
    enable (task) {
      this.enableTasks([task.id]).then(res => {
        this.$message.success('启用成功!')
        task.status = '1'
      }).catch(err => {
        this.$message.error('启用失败')
      })
    },
    deleteTask (task) {
      this.$confirm('此操作将永久删除此任务, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteTasks([task.id]).then(res => {
          this.$message.success('删除成功!')
        }).catch(err => {
          this.$message.error('删除失败')
        }).finally(() => {
          this.deleteVisible = false
          this.$emit('refresh')
        })
      }).catch(() => {
        // Cancelled
      })
    }
  }
}
</script>
