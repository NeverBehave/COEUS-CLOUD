<template>
    <el-card>
        <div slot="header">
            <span>资源分组列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
        </div>
        <el-row>
            <el-button :loading="submitting"
                       @click="addGroup()"
            >
                       在根域添加分组
            </el-button>
            <el-button :loading="submitting"
                       @click="addGivenGroup()"
            >
                       在选定的分组下新增分组
            </el-button>
        </el-row>
        <el-divider/>
        <el-row>
            <GroupList :selectedResourceGroup.sync="selectedResourceGroup"/>
        </el-row>
    </el-card>
</template>

<script>
import GroupList from '../Group/List'
import { mapGetters, mapActions } from 'vuex'

import submit from '@/mixins/loading/submit'

export default {
  mixins: [submit],
  data () {
    return {
      selectedResourceGroup: null
    }
  },
  components: {
    GroupList
  },
  computed: {

  },
  methods: {
    ...mapActions('resource', ['createResourceGroup']),
    addGivenGroup () {
      this.selectedResourceGroup ? this.addGroup(this.selectedResourceGroup.id) : this.addGroup()
    },
    addGroup (parentId = '') {
      this.$prompt('请输入分组名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator (value) {
          if (value) {
            if (value.length < 3 || value.length > 12) {
              return '长度在3-13个字符之间'
            } else {
              return true
            }
          } else {
            return '请填写名称'
          }
        }
      }).then(({ value }) => {
        this.startSubmit()
        this.createResourceGroup({
          name: value,
          parentId
        }).then(res => {
          this.$message('创建成功！')
        }).catch(err => {
          this.$message.error('创建失败，请重试')
        }).finally(() => {
          this.endSubmit()
        })
      })
    }
  }
}
</script>
