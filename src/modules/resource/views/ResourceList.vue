<template>
    <ListCard/>
</template>

<script>
import ListCard from '../components/Cards/List'
import { mapActions } from 'vuex'

export default {
  components: {
    ListCard
  },
  mounted () {
    // Init Resource
    this.$store.commit('resource/resources', [])
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
