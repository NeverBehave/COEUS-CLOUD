<template>
  <el-table
    ref="deviceTable"
    :data="devices"
    tooltip-effect="dark"
    style="width: 100%"
    height="400px"
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
    </el-table-column>
     <el-table-column
      label="启动状态"
      column-key="enable"
      prop="enable"
      sortable
      :filters="enableFilters"
      :filter-method="filterHandler"
      >
    </el-table-column>
    <el-table-column
      label="播放状态"
      column-key="playState"
      prop="playState"
      sortable
      :filters="playStateFilters"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      label="创建时间"
      column-key="createdAt"
      prop="createdAt"
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
    >
     <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          >编辑
        </el-button>
        <el-button
          size="mini"
          >详情
        </el-button>
        <el-button
          size="mini"
          >离线
        </el-button>
        <el-button
          size="mini"
          type="danger"
          >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      enableFilters: [
        { text: '关闭', value: 0 },
        { text: '启动', value: 1 }
      ],
      onlineFilters: [
        { text: '离线', value: 0 },
        { text: '在线', value: 1 }
      ],
      playStateFilters: [
        { text: '停止', value: 0 },
        { text: '启动', value: 1 }
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
    filterHandler (value, row, column) {
      console.log(row, value)
      return true
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
