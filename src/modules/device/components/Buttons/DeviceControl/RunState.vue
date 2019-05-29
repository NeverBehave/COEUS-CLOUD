<template>
    <el-tooltip
        v-if="device.runState === '0'"
        effect="dark"
        content="启动"
        placement="top"
    >
        <el-button
          type="primary"
          circle
          @click="start"
        >
            <font-awesome-icon
            icon="power-off"
            />
        </el-button>
    </el-tooltip>
    <el-tooltip
      v-else
      effect="dark"
      content="关闭"
      placement="top"
    >
        <el-button
          type="warning"
          circle
          @click="stop"
        >
            <font-awesome-icon
              icon="power-off"
            />
        </el-button>
    </el-tooltip>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('device', {
      device: 'deviceControlSelected'
    })
  },
  methods: {
    ...mapActions('device', ['deviceStart', 'deviceStop', 'refresh']),
    ...mapMutations('device', ['deviceControlrunState']),
    start () {
      this.deviceStart(this.device.id)
        .then(() => {
          this.$message.success('启动成功！')
          this.deviceControlrunState('1')
        })
        .catch(() => {
          this.$message.error('启动失败！')
        })
    },
    stop () {
      this.deviceStop(this.device.id)
        .then(() => {
          this.$message.success('关闭成功！')
          this.deviceControlrunState('0')
        })
        .catch((err) => {
          console.log(err)
          this.$message.error('关闭失败！')
        })
    }
  }
}
</script>
