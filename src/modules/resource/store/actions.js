import { resourceGroup,
  deleteResourceGroup as deleteResourceGroupAPI,
  createResourceGroup as createResourceGroupAPI } from '@/api/resource'

export default {
  updateTree ({ commit }) {
    return resourceGroup().then(res => {
      let rows = res.data.rows
      commit('tree', listToTree(rows))
    })
  },
  deleteResourceGroup ({ dispatch }, id) {
    return deleteResourceGroupAPI(id).then(res => {
      dispatch('updateTree')
      return res
    })
  },
  createResourceGroup ({ dispatch }, data) {
    console.log(data)
    return createResourceGroupAPI(data).then(res => {
      dispatch('updateTree')
      return res
    })
  }
}

// Helper function
function listToTree (list) {
  let map = {}
  let node
  let roots = []
  let i
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i // initialize the map
    list[i].children = [] // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i]
    if (node.parentId) { // 0, null, or what ever
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node)
    } else {
      roots.push(node)
    }
  }
  return roots
}
