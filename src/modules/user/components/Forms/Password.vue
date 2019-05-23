<template>
    <el-form :inline="true">
            <el-form-item label="密码">
                <el-input v-model="password" placeholder="留空则不更改"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button  @click="changePassword">更改</el-button>
            </el-form-item>
    </el-form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    changePassword () {
      this.$message.error('尚未实现')
    }
  }
}
</script>
