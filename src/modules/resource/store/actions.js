import { resourceGroup,
  deleteResourceGroup as deleteResourceGroupAPI,
  createResourceGroup as createResourceGroupAPI,
  resourceList as resourceListAPI,
  deleteResources as deleteResourcesAPI,
  updateResource,
  downloadResource } from '@/api/resource'

export default {
  updateTree ({ commit }) {
    return resourceGroup().then(res => {
      let rows = res.data.rows
      commit('tree', listToTree(rows))
    })
  },
  resourceList ({ commit }, filter) {
    return resourceListAPI(filter).then(res => {
      commit('resources', res.data.rows)
      return res
    })
  },
  deleteResourceGroup ({ dispatch }, id) {
    return deleteResourceGroupAPI(id).then(res => {
      dispatch('updateTree')
      return res
    })
  },
  createResourceGroup ({ dispatch }, data) {
    return createResourceGroupAPI(data).then(res => {
      dispatch('updateTree')
      return res
    })
  },
  deleteResources ({}, ids) {
    return deleteResourcesAPI(ids)
  },
  editResourceName ({}, { id, name }) {
    return updateResource(id, { name })
  },
  downloadResourcesToDevice ({}, { deviceId, resourceIds }) {
    return downloadResource(resourceIds.map(e => {
      return {
        deviceNo: deviceId,
        resourceId: e
      }
    }))
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
    if (node.parentId && node.parentId !== '0') { // 0, null, or what ever
      // if you have dangling branches check that map[node.parentId] exists
      let n = map[node.parentId]
      if (n) {
        list[map[node.parentId]].children.push(node)
      } else {
        roots.push(node)
      }
    } else {
      roots.push(node)
    }
  }
  return roots
}
