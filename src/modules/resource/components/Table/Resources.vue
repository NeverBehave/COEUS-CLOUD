<template>
<div>
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
      width="100"
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
      show-overflow-tooltip
      sortable
      >
    </el-table-column>
     <el-table-column
      label="大小(M)"
      column-key="size"
      prop="size"
      sortable
      >
      <template slot-scope="scope">
        <span>{{ Math.round(scope.row.size / 1024 / 1024 * 100) / 100 }}</span>
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
      width="200"
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
              content="编辑素材名"
              placement="top"
            >
              <el-button
                icon="el-icon-edit"
                @click="editName(scope.row)"
                :loading="submitting"
                circle
              />
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="详情"
              placement="top"
            >
              <el-button
                circle
                @click="detail(scope.row)"
                :loading="submitting"
              >
                  <font-awesome-icon
                    icon="info-circle"
                  />
              </el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="下载到设备"
              placement="top"
            >
            <el-button
                circle
                @click="downloadToDevice(scope.row)"
                :loading="submitting"
              >
                  <font-awesome-icon
                    icon="cloud-download-alt"
                  />
              </el-button>
            </el-tooltip>
            <el-tooltip
              effect="dark"
              content="删除"
              placement="top"
            >
              <el-button
                type="danger"
                icon="el-icon-delete"
                :loading="submitting"
                @click="deleteRes(scope.row)"
                circle/>
            </el-tooltip>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
   <DownloadToDevice
      :showDialog.sync="dialog.downloadToDevice"
      :nodes="[clickedesource]"
    />
</div>
</template>

<script>
import Nail from '../Image/Blob'
import DownloadToDevice from '../Dialog/DownloadToDevice'
import filter from '@/mixins/table/filter'
import submit from '@/mixins/loading/submit'
import { mapGetters, mapActions } from 'vuex'

export default {
  mixins: [filter, submit],
  components: {
    Nail,
    DownloadToDevice
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
  data () {
    return {
      stateFilters: [
        { text: '未审核通过', value: '0' },
        { text: '审核中', value: '2' },
        { text: '审核通过', value: '1' }
      ],
      search: '',
      dialog: {
        downloadToDevice: false,
        detail: false
      },
      clickedesource: null
    }
  },
  computed: {
    ...mapGetters('resource', ['resources'])
  },
  methods: {
    ...mapActions('resource', ['resourceList', 'deleteResources', 'editResourceName']),
    handleSelectionChange (val) {
      this.$emit('update:selectedResources', val)
    },
    editName (resource) {
      this.$prompt('请输入名字', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator (value) {
          if (value) {
            if (value.length < 3 || value.length > 20) {
              return '长度在3-20个字符之间'
            } else {
              return true
            }
          } else {
            return '请填写名称'
          }
        }
      }).then(({ value }) => {
        this.startSubmit()
        this.editResourceName({
          id: resource.id,
          name: value
        }).then(() => {
          this.$message.success('更新成功！')
          resource.name = value
          // i have no idea how update should work but this is not the best way I believe
        }).catch(() => {
          this.$message.error('更新失败！')
        }).finally(() => {
          this.endSubmit()
        })
      }).catch((err) => {
        // Cancelled
      })
    },
    detail (resource) {

    },
    downloadToDevice (resource) {
      this.clickedesource = resource
      this.dialog.downloadToDevice = true
    },
    deleteRes (resource) {
      this.$confirm('此操作将永久删除该资源, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.startSubmit()
        this.deleteResources([resource.id]).then(res => {
          this.$message.success('删除成功！')
          this.$emit('refresh')
        }).catch(err => {
          this.$message.error('删除失败！请重试')
        }).finally(() => [
          this.endSubmit()
        ])
      }).catch(() => {
        // Cancelled
      })
    }
  }
}
</script>
