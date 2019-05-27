<template>
    <el-card shadow="hover">
        <div slot="header">
            <span>设备总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ deviceNum }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="desktop"
            />
            <span class="font">{{ onlineDevices.length }}</span>
        </div>
        <el-divider></el-divider>
        <div class="card-down">
            <font-awesome-icon
                icon="caret-up"
            />
            当前在线设备数
        </div>
    </el-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('dashboard', ['deviceNum']),
    ...mapGetters('device', ['onlineDevices'])
  },
  methods: {
    ...mapActions('device', ['updateOnlineDevices'])
  },
  mounted () {
    this.updateOnlineDevices()
  }
}
</script>

<style lang="sass" scoped>
.card-down
    text-align: center
</style>
