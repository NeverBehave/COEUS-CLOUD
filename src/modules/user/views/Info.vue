<template>
    <el-row>
        <el-col>
            <UserInfoCard/>
        </el-col>
    </el-row>
</template>

<script>
import loading from '@/mixins/loading'
import UserInfoCard from '../components/Cards/UserInfo'
import { mapActions } from 'vuex'

export default {
  components: {
    UserInfoCard
  },
  mixins: [loading],
  methods: {
    ...mapActions('user', ['getMe'])
  },
  mounted () {
    this.getMe().then(res => {
      this.$message('信息获取成功！')
    }).catch(err => {
      let { data } = err.response
      this.$message.error(data.msg)
    }).finally(() => {
      this.loading.close()
    })
  }
}
</script>
