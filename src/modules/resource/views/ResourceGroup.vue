<template>
    <GroupListCard v-on:refresh="refresh"/>
</template>

<script>
import { mapActions } from 'vuex'
import GroupListCard from '../components/Cards/GroupList'

export default {
  components: {
    GroupListCard
  },
  mounted () {
    this.refresh()
  },
  methods: {
    ...mapActions('resource', ['updateTree']),
    refresh () {
      this.updateTree().then(res => {
        this.$message('目录信息获取成功')
      }).catch(err => {
        this.$message.error('目录获取失败')
      })
    }
  }
}
</script>
