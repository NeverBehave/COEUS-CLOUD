<template>
<div>
    <el-card>
        <div slot="header">
            <span>资源管理</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
        </div>
        <el-row>
          <el-col>
            <span>选择资源分组</span>
          </el-col>
          <el-col>
            <SimpleList
              :selectedResourceGroup.sync="selectedResourceGroup"
            />
          </el-col>
        </el-row>
        <el-divider/>
        <el-row>
          <el-col>
              <el-popover
                placement="top"
                ref="popover"
                title="提示"
                width="200"
                trigger="hover"
                content="先选择一个分组才可以添加资源">
              </el-popover>
              <div class="tooltip-wrapper" v-popover:popover>
                <el-button
                    type="primary"
                    :disabled="!this.selectedResourceGroup"
                    @click="dialog.upload = true"
                    :loading="submitting"
                >
                    添加
                </el-button>
              </div>
              <el-button
                @click="deleteRes"
                :loading="submitting"
                type="danger"
              >
                删除
              </el-button>
              <el-button
                :loading="submitting"
                @click="downloadResource"
              >下载
              </el-button>
              <el-button
                @click="refresh"
                :loading="submitting"
              >
                刷新
              </el-button>
          </el-col>
        </el-row>
        <el-divider/>
        <el-row>
          <el-col>
            <ResourceTable
              :selectedResourceGroup="selectedResourceGroup"
              :selectedResources.sync="selectedResources"
            />
          </el-col>
        </el-row>
    </el-card>
    <DownloadToDevice
      :showDialog.sync="dialog.download"
      :nodes="selectedResources"
    />
    <UploadDialog
      :showDialog.sync="dialog.upload"
      :groupId="groupId"
      v-on:refresh="refresh"
     />
</div>
</template>

<script>
import SimpleList from '../Group/SimpleList'
import ResourceTable from '../Table/Resources'

import UploadDialog from '../Dialog/Upload'
import DownloadToDevice from '../Dialog/DownloadToDevice'

import submit from '@/mixins/loading/submit'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    SimpleList,
    ResourceTable,
    UploadDialog,
    DownloadToDevice
  },
  mixins: [submit],
  data () {
    return {
      selectedResourceGroup: null,
      selectedResources: [],
      dialog: {
        upload: false,
        download: false
      }
    }
  },
  watch: {
    selectedResourceGroup (value) {
      this.refresh()
    }
  },
  computed: {
    resources: {
      get () {
        return this.$store.getters['resource/resources']
      },
      set (value) {
        this.$store.commit('resource/resources', value)
      }
    },
    groupId () {
      return this.selectedResourceGroup ? this.selectedResourceGroup.id : '0'
    }
  },
  methods: {
    ...mapActions('resource', ['resourceList', 'deleteResources']),
    refresh () {
      if (this.selectedResourceGroup !== null) {
        let { id } = this.selectedResourceGroup
        this.updateResourceList({
          groupId: id
        })
      }
    },
    updateResourceList (obj) {
      this.startSubmit()
      this.resourceList(obj).then(res => {
        this.$message('资源信息获取成功！')
      }).catch(err => {
        this.$message.error('资源信息获取失败！')
      }).finally(() => {
        this.endSubmit()
      })
    },
    deleteRes () {
      this.$confirm('此操作将永久删除资源, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.startSubmit()
        this.deleteResources(this.selectedResources.map(e => {
          return e.id
        })).then(res => {
          this.$message.success('删除成功！')
          this.refresh()
        }).catch(err => {
          console.log(err)
          this.$message.error('删除失败')
        }).finally(() => {
          this.endSubmit()
        })
      }).catch(() => {
        // Cancelled
      })
    },
    downloadResource () {
      if (this.selectedResources.length <= 0) {
        this.$message.warning('请先选择资源，再下载')
      } else {
        this.dialog.download = true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.tooltip-wrapper
  display: inline-block
  margin-right: 10px
</style>
