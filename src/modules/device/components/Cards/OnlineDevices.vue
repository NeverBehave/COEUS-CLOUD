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
      <template
        v-if="deviceSelected">
        <el-divider direction="vertical"/>
        <RunStateButton/>
      </template>
    </el-col>
  </el-row>
</el-card>
</template>

<script>
import ChooseOnlineDevices from '../Options/OnlineDevices'
import RunStateButton from '../Buttons/DeviceControl/RunState'

import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    ChooseOnlineDevices,
    RunStateButton
  },
  computed: {
    ...mapGetters('device', {
      deviceSelected: 'deviceControlSelected'
    }),
    selected: {
      get () {
        return this.deviceSelected
      },
      set (value) {
        this.deviceControlSelected(value)
      }
    }
  },
  methods: {
    ...mapMutations('device', ['deviceControlSelected'])
  }
}
</script>
