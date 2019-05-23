<template>
    <el-form :inline="true">
            <el-form-item label="用户名">
                <el-input v-model="theUsername" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="changeUsername" :loading="submitting">更改</el-button>
            </el-form-item>
    </el-form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import submit from '@/mixins/loading/submit'

export default {
  mixins: [submit],
  computed: {
    ...mapGetters('user', {
      getUsername: 'username'
    }),
    theUsername: {
      get () {
        return this.getUsername
      },
      set (value) {
        this.commitUsername(value)
      }
    }
  },
  methods: {
    ...mapActions('user', ['updateUsername']),
    ...mapMutations('user', {
      commitUsername: 'username'
    }),
    changeUsername () {
      this.startSubmit()
      this.updateUsername(this.getUsername).then(res => [
        this.$message({
          message: '更新成功',
          type: 'success'
        })
      ]).catch(err => {
        this.$message.error('更新失败，请重试')
      }).finally(() => {
        this.endSubmit()
      })
    }
  }
}
</script>
