<template>
    <el-dialog
    title="选择目标分组"
    :visible.sync="dialog"
    >
        <el-row>
            <SimpleList
              :selectedResourceGroup.sync="selectedResourceGroup"
            />
        </el-row>
        <span slot="footer">
            <el-button
                type="primary"
                @click="confirmed"
                @disabled="selected"
            >
                确 定
            </el-button>
            <el-button
                @click="dialog = false"
            >
                取 消
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
import child from '@/mixins/dialog/child'
import SimpleList from '../Group/SimpleList'

export default {
  mixins: [child],
  components: {
    SimpleList
  },
  props: {
    node: {
      type: Object
    }
  },
  data () {
    return {
      selectedResourceGroup: null
    }
  },
  computed: {
    selected () {
      return !!this.selectedResourceGroup
    }
  },
  methods: {
    confirmed () {
      this.$message('尚未实现')
      this.dialog = false
    }
  }
}
</script>
