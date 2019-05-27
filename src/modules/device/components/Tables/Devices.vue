<template>
  <el-table
    ref="deviceTable"
    :data="devices"
    tooltip-effect="dark"
    style="width: 100%"
    min-height="400px"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="设备编号"
      column-key="deviceID"
      prop="deviceID"
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
      width="180"
    >
     <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button-group>
            <el-button icon="el-icon-edit" circle></el-button>
            <el-button circle>
                <font-awesome-icon
                  icon="info-circle"
                />
            </el-button>
            <el-button type="warning" circle>
                <font-awesome-icon
                  icon="power-off"
                />
            </el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import filter from '@/mixins/table/filter'
import { mapGetters } from 'vuex'

export default {
  mixins: [filter],
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
      search: ''
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
    },
    multipleSelection: {
      get () {
        return []
      },
      set (value) {
        console.log(value)
      }
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
