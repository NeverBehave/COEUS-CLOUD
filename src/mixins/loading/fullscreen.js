export default {
  data () {
    return {
      loading: this.$loading({ fullscreen: true })
    }
  },
  methods: {
    finishLoading () {
      this.loading.close()
    }
  }
}
