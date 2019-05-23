export default {
  data () {
    return {
      submitting: false
    }
  },
  methods: {
    startSubmit () {
      this.submitting = true
    },
    endSubmit () {
      this.submitting = false
    }
  }
}
