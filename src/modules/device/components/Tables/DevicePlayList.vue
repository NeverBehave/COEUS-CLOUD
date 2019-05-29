<template>
 <el-table
    :data="playList.playList"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55"/>
     <el-table-column
      label="序号"
      prop="sort"
      width="100"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="名称"
      sortable
    >
       <template slot-scope="scope">
          <font-awesome-icon
              v-if="scope.row.sort === playList.playingItem"
              icon="circle-notch"
              spin
          />
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="150"
    >
      <template slot-scope="scope">
         <el-button-group>
          <el-tooltip
            effect="dark"
            content="编辑"
            placement="top"
          >
            <el-button
              icon="el-icon-edit"
              @click="editItem(scope.row)"
              circle
            />
          </el-tooltip>
        <PlayButton
          :deviceId="id"
          :playItem="scope.row"
        />
        <el-tooltip
          effect="dark"
          content="删除"
          placement="top"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="deleteItem(scope.row)"
            />
          </el-tooltip>
         </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PlayButton from '../Buttons/PlayList'

export default {
  props: {
    selectedItems: {
      type: Array,
      default: []
    }
  },
  components: {
    PlayButton
  },
  computed: {
    ...mapGetters('device', {
      id: 'deviceControlId',
      playList: 'devicePlayList'
    })
  },
  methods: {
    ...mapActions('device', ['devicePlayList', 'renamePlayListItem', 'deletePlayListItem']),
    handleSelectionChange (val) {
      this.$emit('update:selectedItems', val)
    },
    deleteItem (item) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deletePlayListItem(this.id, [item.sort]).then(res => {
          this.$message.success('删除成功！')
        }).catch(() => {
          this.$message.success('删除失败！')
        })
      }).catch(() => {
        // Cancelled
      })
    },
    editItem (item) {
      this.$prompt('请输入名字', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator (value) {
          if (value) {
            if (value.length < 2 || value.length > 10) {
              return '长度在3-10个字符之间'
            } else {
              return true
            }
          } else {
            return '请填写名称'
          }
        }
      }).then(({ value }) => {
        this.renamePlayListItem({
          id: this.id,
          name: value
        }).then(() => {
          this.$message.success('更新成功！')
        }).catch(() => {
          this.$message.error('更新失败！')
        })
      }).catch((err) => {
        // Cancelled
        console.log(err)
      })
    }
  }
}
</script>
