<template>
<el-card>
  <div slot="header">
    <span>播放列表</span>
    <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
  </div>
  <div v-if="device">
    <DevicePlayListTable
      :device="device"/>
  </div>
  <div v-else>
    <p>请先选择设备</p>
  </div>
</el-card>
</template>

<script>
import DevicePlayListTable from '../Tables/DevicePlayList'

export default {
  components: {
    DevicePlayListTable
  },
  props: {
    device: {
      type: Object,
      default: null
    }
  }
}
</script>
