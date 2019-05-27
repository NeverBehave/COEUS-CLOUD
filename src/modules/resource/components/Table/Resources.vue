<template>
  <el-table
    ref="resourceTable"
    :data="resources"
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
      label="素材"
      column-key="thumbBlob"
      prop="thumbBlob"
    >
      <template slot-scope="scope">
        <Nail :base64="scope.row.thumbBlob"/>
      </template>
    </el-table-column>
     <el-table-column
      label="素材名称"
      column-key="name"
      prop="name"
      sortable
      >
    </el-table-column>
     <el-table-column
      label="大小"
      column-key="size"
      prop="size"
      sortable
      >
      <template slot-scope="scope">
        <span>{{ scope.row.size }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="状态"
      column-key="state"
      prop="state"
      sortable
      :filters="stateFilters"
      :filter-method="filterHandler"
    >
     <template slot-scope="scope">
        <span>{{ valueHandler(scope.row.state, stateFilters) }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="分组"
      column-key="groupName"
      prop="groupName"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="创建时间"
      column-key="createTime"
      prop="createTime"
      sortable
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
import Nail from '../Image/Blob'
import filter from '@/mixins/table/filter'
import { mapGetters, mapActions } from 'vuex'

export default {
  mixins: [filter],
  components: {
    Nail
  },
  props: {
    selectedResourceGroup: {
      type: Object,
      default: null
    },
    selectedResources: {
      type: Array,
      default: []
    }
  },
  watch: {
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
      stateFilters: [
        { text: '未审核通过', value: '0' },
        { text: '审核中', value: '2' },
        { text: '审核通过', value: '1' }
      ],
      search: ''
    }
  },
  computed: {
    ...mapGetters('resource', ['resources'])
  },
  methods: {
    ...mapActions('resource', ['resourceList']),
    handleSelectionChange (val) {
      this.$emit('update:selectedResources', val)
    }
  }
}
</script>
