<template>
    <el-dialog
    title="选择目标分组"
    :visible.sync="showDialog"
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
                @click="closeDialog"
            >
                取 消
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
import SimpleList from '../Group/SimpleList'

export default {
  components: {
    SimpleList
  },
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
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
    closeDialog () {
      this.$emit('update:showDialog', false)
    },
    confirmed () {

    }
  }
}
</script>
