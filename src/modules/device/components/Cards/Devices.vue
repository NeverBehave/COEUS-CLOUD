<template>
    <el-card>
        <div slot="header">
            <span>设备列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？  </el-button>
        </div>
        <el-row>
            <el-button type="primary">添加</el-button>
            <el-button type="danger">删除</el-button>
            <el-button>导入</el-button>
            <el-button>导出</el-button>
            <el-button type="warning">断开</el-button>
            <el-divider direction="vertical"/>
            <el-switch
                v-model="enable"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="批量启动"
                inactive-text="批量关闭">
            </el-switch>
            <el-divider direction="vertical"/>
            <el-switch
                v-model="play"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="批量播放"
                inactive-text="批量停止">
            </el-switch>
        </el-row>
        <el-divider/>
        <el-row>
            <DevicesTable/>
        </el-row>
    </el-card>
</template>

<script>
import DevicesTable from '../Tables/Devices'

export default {
  components: {
    DevicesTable
  },
  data () {
    return {
      enable: true,
      play: true
    }
  }
}
</script>
