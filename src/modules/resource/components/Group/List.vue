<template>
<div>
    <el-tree :data="tree"
             :props="structure"
             ref="tree"
             draggable
             @node-click="clickedNode"
    >
     <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>{{ data.createTime }}</span>
        <span>
          <el-button
            size="mini"
            type="text"
            :loading="submitting"
            @click="nodeDetail(data)">
            详情
          </el-button>
          <el-button
            size="mini"
            type="text"
            style="color: red"
            :loading="submitting"
            @click="deleteNode(data)">
            删除
          </el-button>
        </span>
      </span>
    </el-tree>
    <GroupDetailDialog
      v-if="detailNode"
      :show-dialog.sync="showDialog"
      :node="detailNode"
    />
</div>
</template>

<script>
import GroupDetailDialog from '../Dialog/GroupDetail'
import { mapGetters, mapMutations, mapActions } from 'vuex'

import submit from '@/mixins/loading/submit'

export default {
  props: {
    selectedResourceGroup: {
      type: Object,
      default: null
    }
  },
  mixins: [submit],
  components: {
    GroupDetailDialog
  },
  data () {
    return {
      detailNode: null,
      showDialog: false
    }
  },
  computed: {
    ...mapGetters('resource', ['tree', 'structure']),
    currentNode: {
      get () {
        return null
      },
      set (value) {
        this.$emit('update:selectedResourceGroup', value)
      }
    }
  },
  methods: {
    ...mapActions('resource', ['deleteResourceGroup']),
    clickedNode (node) {
      this.currentNode = node
    },
    nodeDetail (node) {
      this.detailNode = node
      this.showDialog = true
    },
    deleteNode (node) {
      this.$confirm(`此操作将永久删除分组${node.name}, 是否继续?`, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.startSubmit()
        this.deleteResourceGroup(node.id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(err => {
          this.$message({
            type: 'success',
            message: '删除失败，请重试'
          })
        }).finally(() => {
          this.endSubmit()
        })
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-tree-node
  flex: 1
  display: flex
  align-items: center
  justify-content: space-between
  font-size: 14px
  padding-right: 8px
</style>
