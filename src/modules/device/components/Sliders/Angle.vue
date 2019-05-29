<template>
     <el-slider
        v-model="local"
        show-input
        :max="360"
        :min="0"
        :disabled="submitting"
        @change="doChange"
    />
</template>

<script>
import submit from '@/mixins/loading/submit'
import { mapActions, mapGetters } from 'vuex'

export default {
  mixins: [submit],
  mounted () {
    this.reset()
  },
  watch: {
    angle (value) {
      this.reset()
    }
  },
  data () {
    return {
      local: 0
    }
  },
  computed: {
    ...mapGetters('device', {
      angle: 'deviceAngle',
      id: 'deviceControlId'
    })
  },
  methods: {
    ...mapActions('device', ['deviceAngle']),
    doChange () {
      this.startSubmit()
      this.deviceAngle({
        id: this.id,
        value: this.local
      }).catch(() => {
        this.$message.error('更新失败！请重试')
        this.reset()
      }).finally(() => this.endSubmit())
    },
    reset () {
      this.local = this.angle
    }
  }
}
</script>
