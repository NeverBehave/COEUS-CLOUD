<template>
    <div>
        <LoginCard/>
    </div>
</template>

<script>
import LoginCard from '../components/Card/LoginCard'
import { getMe } from '@/api/auth'
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
  mounted () {
    getMe().then(res => {
      // Already Login, move to Dashboard
      this.loading.close()
      this.$router.push({ name: 'Dashboard' })
    }).catch(err => {
      this.loading.close()
    })
  }
}
</script>
