<template>
    <el-image
        :src="src"
        style="width: 70px; height: 70px"/>
</template>

<script>
export default {
  props: {
    base64: {
      type: String,
      default: ''
    }
  },
  computed: {
    src () {
      if (this.base64) {
        return 'data:image/png;base64,' + this.base64
      }
      return false
    }
  }
}
</script>
