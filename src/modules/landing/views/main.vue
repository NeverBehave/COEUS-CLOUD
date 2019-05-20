<template>
    <div />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['token'])
  },
  mounted () {
    // if login , goto dashboard
    if (!this.token || this.token === '') {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'DashboardHome' })
    }
  }
}
</script>
