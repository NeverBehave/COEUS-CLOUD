<template>
    <el-row>
        <el-col>
            <DevicesCard/>
        </el-col>
    </el-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import DevicesCard from '../components/Cards/Devices'
import fullscreen from '@/mixins/loading/fullscreen'

export default {
  components: {
    DevicesCard
  },
  mixins: [fullscreen],
  computed: {
    ...mapGetters('device', ['refresh'])
  },
  watch: {
    refresh (value) {
      this.refetch()
    }
  },
  methods: {
    ...mapActions('device', ['deviceList']),
    refetch () {
      return this.deviceList()
    }
  },
  mounted () {
    this.refetch().then(res => {
      this.$message('设备信息获取成功！')
    }).catch(err => {
      this.$message.error('设备信息获取失败')
    }).finally(() => this.finishLoading())
  }
}
</script>
