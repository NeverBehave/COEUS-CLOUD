<template>
    <el-dialog
    title="下载到设备"
    :visible.sync="dialog"
    >
        <el-row>
            <el-col>
              <OnlineDevice :selectedDevice.sync="deviceId"/>
            </el-col>
        </el-row>
          <span slot="footer">
            <el-button
                type="primary"
                :loading="submitting"
                @click="confirmed"
                :disabled="!selected"
            >
                确 定
            </el-button>
            <el-button
                @click="dialog = false"
                :loading="submitting"
            >
                取 消
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
import OnlineDevice from '@/modules/device/components/Options/OnlineDevices'

import { mapActions } from 'vuex'
import submit from '@/mixins/loading/submit'

export default {
  mixins: [submit],
  components: {
    OnlineDevice
  },
  props: {
    showDialog: {
      type: Boolean,
      required: true
    },
    nodes: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      deviceId: null
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
    selected () {
      return !!this.deviceId
    }
  },
  methods: {
    ...mapActions('resource', ['downloadResourcesToDevice']),
    confirmed () {
      this.startSubmit()
      this.downloadResourcesToDevice({
        deviceId: this.deviceId,
        resourceIds: this.nodes.map((e) => e.id)
      }).then(res => {
        this.$message.success('下载成功！')
        this.dialog = false
      }).catch(err => {
        this.$message.error('下载失败！')
      }).finally(() => {
        this.endSubmit()
      })
    }
  }
}
</script>
