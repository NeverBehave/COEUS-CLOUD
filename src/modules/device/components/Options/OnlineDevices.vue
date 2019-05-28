<template>
    <el-select
        v-model="deviceID"
        clearable
        filterable
        placeholder="请选择">
            <el-option
                v-for="item in onlineDevices"
                :key="item.deviceNo"
                :label="item.deviceNo"
                :value="item"
            >
            </el-option>
    </el-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    selectedDevice: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapGetters('device', ['onlineDevices']),
    deviceID: {
      get () {
        return this.selectedDevice
      },
      set (value) {
        this.$emit('update:selectedDevice', value)
      }
    }
  },
  methods: {
    ...mapActions('device', ['updateOnlineDevices'])
  },
  mounted () {
    this.updateOnlineDevices().then(res => {
      this.$message('在线设备获取成功')
    }).catch(err => {
      this.$message.error('在线设备信息获取失败')
    })
  }
}
</script>
