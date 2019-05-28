<template>
    <el-dialog
        title="上传文件"
        :visible.sync="dialog"
        :close="$emit('refresh')"
    >
        <el-upload
            :action="url"
            drag
            multiple
            :name="'fileName'"
            :data="{groupId}"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">提示语</div>
        </el-upload>
    </el-dialog>
</template>

<script>
import { uploadResource } from '@/api/resource'

export default {
  data () {
    return {
      fileList: []
    }
  },
  props: {
    groupId: {
      type: String,
      default: '0'
    },
    showDialog: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    dialog: {
      get () {
        return this.showDialog
      },
      set (value) {
        this.$emit('update:showDialog', false)
      }
    },
    url () {
      return uploadResource()
    }
  },
  methods: {
  }
}
</script>
