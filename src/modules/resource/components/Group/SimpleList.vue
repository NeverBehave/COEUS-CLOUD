<template>
<div class="simple-list">
    <el-tree :data="tree"
             :props="structure"
             ref="tree"
             draggable
             @node-click="clickedNode"
    >
     <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>{{ data.createTime }}</span>
      </span>
    </el-tree>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    selectedResourceGroup: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('resource', ['tree', 'structure'])
  },
  methods: {
    clickedNode (node) {
      this.$emit('update:selectedResourceGroup', node)
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-tree-node
  flex: 1
  display: flex
  align-items: center
  justify-content: space-between
  font-size: 14px
  padding-right: 8px

.simple-list
  max-height: 100px
  overflow: auto
</style>
