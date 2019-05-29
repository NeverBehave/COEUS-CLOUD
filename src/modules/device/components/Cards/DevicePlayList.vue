<template>
<el-card>
  <div slot="header">
    <span>播放列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
  </div>
  <div v-if="selected">
    <el-button
      type="danger"
      @click="deleteSelectedPlayItem"
      :loading="submitting"
    >
        删除选中
    </el-button>
    <el-button
      @click="refresh"
      :loading="submitting"
    >
      刷新
    </el-button>
    <el-divider/>
    <DevicePlayListTable
      :selectedItems.sync="selectedPlayItems"/>
  </div>
  <div v-else>
    <p>请先选择设备</p>
  </div>
</el-card>
</template>

<script>
import DevicePlayListTable from '../Tables/DevicePlayList'
import { mapActions, mapGetters } from 'vuex'
import submit from '@/mixins/loading/submit'

export default {
  components: {
    DevicePlayListTable
  },
  mixins: [submit],
  data () {
    return {
      selectedPlayItems: []
    }
  },
  computed: {
    ...mapGetters('device', {
      selected: 'deviceControlId'
    })
  },
  watch: {
    selected () {
      if (this.selected) {
        this.refresh()
      } else {
        this.$message.warning('没有选中设备！')
      }
    }
  },
  methods: {
    ...mapActions('device', ['devicePlayList', 'deletePlayListItem']),
    refresh () {
      this.devicePlayList(this.selected).then(res => {
        this.$message('设备播放列表获取成功！')
      }).catch(() => {
        this.$message.error('列表获取失败！')
      })
    },
    deleteSelectedPlayItem () {
      this.$confirm('此操作将永久删除文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.startSubmit()
        this.deletePlayListItem({
          id: this.selected,
          positions: this.selectedPlayItems.map(e => e.sort)
        }).then(res => {
          this.$message.success('删除成功！')
        }).catch(() => {
          this.$message.error('删除失败！')
        }).finally(() => this.endSubmit())
      }).catch((err) => {
        // Cancelled
      })
    }
  }
}
</script>
