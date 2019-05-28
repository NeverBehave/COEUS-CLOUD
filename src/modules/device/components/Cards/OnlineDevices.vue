<template>
<el-card>
  <div slot="header">
    <span>选择控制设备</span>
    <el-button style="float: right; padding: 3px 0" type="text">找不到设备？</el-button>
  </div>
  <el-row>
    <el-col>
      <ChooseOnlineDevices
        :selectedDevice.sync="selected"/>
    </el-col>
    <el-col>
      <RunStateButton
        v-if="selectedDevice"
        :device="selectedDevice"
      />
    </el-col>
  </el-row>
</el-card>
</template>

<script>
import ChooseOnlineDevices from '../Options/OnlineDevices'
import RunStateButton from '../Buttons/RunState'

export default {
  components: {
    ChooseOnlineDevices,
    RunStateButton
  },
  props: {
    selectedDevice: {
      type: Object,
      default: null
    }
  },
  computed: {
    selected: {
      get () {
        return this.selectedDevice
      },
      set (value) {
        this.$emit('update:selectedDevice', value)
      }
    }
  }
}
</script>
