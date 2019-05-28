<template>
<div>
    <el-card>
        <div slot="header">
            <span>设备列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
        </div>
        <el-row>
            <el-button
              type="primary"
              @click="addDevice"
            >
              添加
            </el-button>
            <el-button
              type="danger"
              @click="delDevices"
            >
              删除
            </el-button>
            <el-button>导入</el-button>
            <el-button>导出</el-button>
            <el-button
              type="warning"
              @click="disconDevices"
            >
              断开
            </el-button>
            <el-divider direction="vertical"/>
            <el-button
              @click="doRefresh"
            >
              刷新
            </el-button>
        </el-row>
        <el-divider/>
        <el-row>
            <DevicesTable
              :selectedDevices.sync="selectedDevices"
            />
        </el-row>
    </el-card>
</div>
</template>

<script>
import DevicesTable from '../Tables/Devices'

import { mapActions } from 'vuex'

export default {
  components: {
    DevicesTable
  },
  data () {
    return {
      selectedDevices: [],
      dialog: {
        addDevice: false
      }
    }
  },
  methods: {
    ...mapActions('device', ['deleteDevices', 'disconnectDevices', 'refresh']),
    addDevice () {
      this.addDevice = true
    },
    doRefresh () {
      this.refresh().then(() => {
        this.$message('刷新成功！')
      }).catch(() => {
        this.$message.error('刷新失败！')
      })
    },
    selected () {
      if (this.selectedDevices.length > 0) {
        return true
      } else {
        this.$message.warning('请选中设备后再操作')
        return false
      }
    },
    delDevices () {
      if (this.selected()) {
        this.$confirm('此操作将把所有选中设备从云端删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteDevices(this.selectedDevices.map(e => {
            return e.id
          })).then(() => {
            this.$message.success('删除成功！')
            this.refresh()
          }).catch(() => {
            this.$message.error('删除失败！')
          })
        }).catch(() => [
          // Cancelled
        ])
      }
    },
    disconDevices () {
      if (this.selected()) {
        this.$confirm('此操作将把所有选中设备从云端断开, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.disconnectDevices(this.selectedDevices.map(e => {
            return e.id
          })).then(() => {
            this.$message.success('断开成功！')
            this.refresh()
          }).catch((err) => {
            console.log(err)
            this.$message.error('断开失败！')
          })
        }).catch((err) => {
          // Cancelled
        })
      }
    }
  }
}
</script>
