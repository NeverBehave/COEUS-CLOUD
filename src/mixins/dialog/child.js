export default {
    props: {
        showDialog: {
        type: Boolean,
        required: true
        } 
    },
    computed: {
        dialog: {
            get () {
                return this.showDialog
            },
            set (value) {
                this.$emit('update:showDialog', value)
            }
        },
    }
}