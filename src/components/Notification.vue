<template>
    <el-badge :value="notificationNum"
              :hidden="isHidden"
              @click.native="toNotification"
              class="item">
            <font-awesome-icon
            icon="bell"
            />
    </el-badge>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Notification',
  computed: {
    ...mapGetters('notification', ['notificationNum']),
    isHidden () {
      if (this.notificationNum <= 0) {
        return true
      }

      return false
    }
  },
  methods: {
    ...mapActions('notification', ['updateNotification']),
    toNotification () {
      this.$router.push({ name: 'NotificationList' })
    }
  },
  mounted () {
    this.updateNotification().catch(err => {
      console.log(err.data)
      this.$message.error('通知更新失败！')
    })
  }
}
</script>

<style lang="sass" scoped>
.item
  margin-left: 20px
  margin-right: 40px
</style>
