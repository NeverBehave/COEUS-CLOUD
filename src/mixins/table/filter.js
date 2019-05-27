export default {
  methods: {
    filterHandler (value, row, column) {
      const key = column.columnKey
      return value === row[key]
    },
    valueHandler (value, collection) {
      let res = this.$_.find(collection, {
        value
      })

      if (res) {
        return res.text
      } else {
        return '获取失败'
      }
    }
  }
}
