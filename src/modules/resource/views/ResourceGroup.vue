<template>
    <GroupListCard/>
</template>

<script>
import { mapActions } from 'vuex'
import GroupListCard from '../components/Cards/GroupList'

export default {
  components: {
    GroupListCard
  },
  mounted () {
    this.updateTree().then(res => {
      this.$message('目录信息获取成功')
    }).catch(err => {
      this.$message.error('目录获取失败')
    })
  },
  methods: {
    ...mapActions('resource', ['updateTree'])
  }
}
</script>
