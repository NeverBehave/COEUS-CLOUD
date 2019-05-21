<template>
    <el-badge :value="newNotifications" :hidden="isHidden" class="item">
        <font-awesome-icon
        icon="bell"
        />
    </el-badge>
</template>

<script>
export default {
  name: 'Notification',
  data () {
    return {
      newNotifications: 13
    }
  },
  computed: {
    isHidden () {
      if (this.newNotifications <= 0) {
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
