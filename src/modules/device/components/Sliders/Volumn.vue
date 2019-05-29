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
    volumn (value) {
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
      volumn: 'deviceVolumn',
      id: 'deviceControlId'
    })
  },
  methods: {
    ...mapActions('device', ['deviceVolumn']),
    doChange () {
      this.startSubmit()
      this.deviceVolumn({
        id: this.id,
        value: this.local
      }).catch(() => {
        this.$message.error('更新失败！请重试')
      }).finally(() => this.endSubmit())
    },
    reset () {
      this.local = this.volumn
    }
  }
}
</script>
