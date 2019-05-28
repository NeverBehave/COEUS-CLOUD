<template>
  <el-table
    ref="deviceTable"
    :data="devices"
    tooltip-effect="dark"
    style="width: 100%"
    min-height="600px"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="设备编号"
      column-key="deviceNo"
      prop="deviceNo"
      sortable
      fixed
      >
    </el-table-column>
     <el-table-column
      label="设备状态"
      column-key="isOnline"
      prop="isOnline"
      sortable
      :filters="onlineFilters"
      :filter-method="filterHandler"
      >
      <template slot-scope="scope">
        <span>{{ valueHandler(scope.row.isOnline, onlineFilters) }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="启动状态"
      column-key="enable"
      prop="enable"
      sortable
      :filters="enableFilters"
      :filter-method="filterHandler"
      >
      <template slot-scope="scope">
        <span>{{ valueHandler(scope.row.enable, enableFilters) }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="播放状态"
      column-key="playState"
      prop="playState"
      sortable
      :filters="playStateFilters"
      :filter-method="filterHandler"
    >
     <template slot-scope="scope">
        <span>{{ valueHandler(scope.row.playState, playStateFilters) }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      column-key="createTime"
      prop="createTime"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="版本号"
      column-key="version"
      prop="version"
      sortable
      :filters="versionFilters"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      label="备注"
      column-key="remark"
      prop="remark"
      sortable
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column
      fixed="right"
      width="220"
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
              content="编辑" 
              placement="top"
            >
              <el-button 
                icon="el-icon-edit" 
                @click="editDevice(scope.row)"
                circle
              />
            </el-tooltip>
             <el-tooltip 
              effect="dark" 
              content="断开" 
              placement="top"
            >
              <el-button 
                type="warning" 
                circle
                @click="disconDevice(scope.row)"
              >
                  <font-awesome-icon
                    icon="slash"
                  />
              </el-button>
             </el-tooltip>
             <PlayStateButton
              :device="scope.row"
             />
             <RunStateButton
              :device="scope.row"
            />
              <el-tooltip 
              effect="dark" 
              content="删除" 
              placement="top"
              >
                <el-button 
                  type="danger" 
                  icon="el-icon-delete" 
                  circle
                  @click="delDevice(scope.row)"
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

import PlayStateButton from '../Buttons/PlayState'
import RunStateButton from '../Buttons/RunState'

export default {
  mixins: [filter],
  props: {
    selectedDevices: {
      type: Array, 
      default: []
    }
  },
  components: {
    PlayStateButton,
    RunStateButton
  },
  data () {
    return {
      enableFilters: [
        { text: '关闭', value: '0' },
        { text: '启动', value: '1' }
      ],
      onlineFilters: [
        { text: '离线', value: '0' },
        { text: '在线', value: '1' }
      ],
      playStateFilters: [
        { text: '停止', value: '0' },
        { text: '启动', value: '1' }
      ],
      search: '',
      selectedDevice: null,
      dialog: {
        editDevice: false
      }
    }
  },
  computed: {
    ...mapGetters('device', ['devices', 'versions']),
    versionFilters () {
      return this.versions.map((e) => {
        return {
          text: e.label,
          value: e.value
        }
      })
    }
  },
  methods: {
    ...mapActions('device', ['deleteDevices', 'disconnectDevices', 'refresh']),
    handleSelectionChange (val) {
      this.$emit('update:selectedDevices', val)
    },
    editDevice(device) {
      this.selectedDevice = device
      this.dialog.editDevice = true
    },
    disconDevice (device) {
      this.$confirm('此操作将把设备从云端断开, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.disconnectDevices([device.id])
            .then(() => {
              this.$message.success('断开成功！')
              this.refresh()
            }).catch(() => {
              this.$message.error('断开失败！')
            })
        }).catch(() => {
          // Cancelled
        })
    },
    delDevice (device) {
      this.$confirm('此操作将把设备从云端删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteDevices([device.id])
          .then(() => {
            this.$message.success('删除成功！')
            this.refresh()
          }).catch(() => {
            this.$message.error('删除失败！')
          })
        }).catch(() => {
          // Cancelled
        })
    },

  }
}
</script>
