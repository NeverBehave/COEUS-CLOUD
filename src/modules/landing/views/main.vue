<template>
    <div />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  mounted () {
    // if login , goto dashboard
    if (!this.isLogin) {
      this.$router.push({ name: 'Login' })
    } else {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
