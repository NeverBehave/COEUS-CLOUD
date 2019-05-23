<template>
    <el-row>
        <el-col>
            <UserInfoCard/>
        </el-col>
    </el-row>
</template>

<script>
import fullscreen from '@/mixins/loading/fullscreen'
import UserInfoCard from '../components/Cards/UserInfo'
import { mapActions } from 'vuex'

export default {
  components: {
    UserInfoCard
  },
  mixins: [fullscreen],
  methods: {
    ...mapActions('user', ['getMe'])
  },
  mounted () {
    this.getMe().then(res => {
      this.$message('信息获取成功！')
    }).catch(err => {
      let { data } = err.data
      this.$message.error(data.msg)
    }).finally(() => {
      this.loading.close()
    })
  }
}
</script>
