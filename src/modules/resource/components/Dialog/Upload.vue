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
import child from '@/mixins/dialog/child'

export default {
  mixins: [child],
  data () {
    return {
      fileList: []
    }
  },
  props: {
    groupId: {
      type: String,
      default: '0'
    }
  },
  computed: {
    url () {
      return uploadResource()
    }
  },
  methods: {
  }
}
</script>
