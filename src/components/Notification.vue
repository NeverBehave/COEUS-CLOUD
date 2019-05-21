<template>
    <el-badge :value="getNewNotification" :hidden="isHidden" class="item">
        <font-awesome-icon
        icon="bell"
        />
    </el-badge>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notification',
  computed: {
    ...mapGetters('user', ['getNewNotification']),
    isHidden () {
      if (this.getNewNotification <= 0) {
        return true
      }

      return false
    }
  }
}
</script>

<style lang="sass" scoped>
.item
  margin-left: 20px
  margin-right: 40px
</style>
