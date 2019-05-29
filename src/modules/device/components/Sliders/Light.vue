<template>
    <el-slider
        :max="100"
        :min="0"
        v-model="local"
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
    light (value) {
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
      light: 'deviceLight',
      id: 'deviceControlId'
    })
  },
  methods: {
    ...mapActions('device', ['deviceLight']),
    doChange () {
      this.startSubmit()
      this.deviceLight({
        id: this.id,
        value: this.local
      }).catch(() => {
        this.$message.error('更新失败！请重试')
        this.reset()
      }).finally(() => this.endSubmit())
    },
    reset () {
      this.local = this.light
    }
  }
}
</script>
