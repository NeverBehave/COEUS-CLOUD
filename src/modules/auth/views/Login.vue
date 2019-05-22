<template>
    <div>
        <LoginCard/>
    </div>
</template>

<script>
import LoginCard from '../components/Card/LoginCard'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      loading: this.$loading({ fullscreen: true })
    }
  },
  components: {
    LoginCard
  },
  methods: {
    ...mapActions('auth', ['isLogin'])
  },
  mounted () {
    this.isLogin().then(res => {
      // Already Login, move to Dashboard
      this.$message({
        message: '自动登陆成功！',
        type: 'success'
      })
      setTimeout(() => this.$router.push({ name: 'Dashboard' }), 2000)
    }).catch(err => {
      let { data } = err.response
      if (data.code === '401') {
        this.$message({
          message: '登陆状态已失效，请重新登陆',
          type: 'warning'
        })
      } else {
        this.$notify({
          title: '出现错误',
          message: data.msg,
          type: 'error'
        })
      }
    }).finally(() => {
      this.loading.close()
    })
  }
}
</script>
