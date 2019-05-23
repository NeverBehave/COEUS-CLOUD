export default {
  selectedResourceGroup (state, node) {
    state.selected.node = node
  },
  tree (state, data) {
    state.tree = data
  }
}
