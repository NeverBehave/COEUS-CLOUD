<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>设备设置</span>
    <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
  </div>
  <div v-if="selected">
    <DeviceSettingForm/>
  </div>
  <div v-else>
    <p>请先选择设备</p>
  </div>
</el-card>
</template>

<script>
import DeviceSettingForm from '../Forms/DeviceSetting'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    DeviceSettingForm
  },
  computed: {
    ...mapGetters('device', {
      selected: 'deviceControlSelected'
    })
  }
}
</script>
