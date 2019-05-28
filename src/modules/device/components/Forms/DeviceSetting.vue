<template>
    <el-form ref="deviceSettingForm" label-width="80px">
        <el-form-item label="模式切换">
            <el-select v-model="mode" placeholder="请选择">
                <el-option
                v-for="item in modes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="音量">
            <el-slider
                max="100"
                min="0"
                v-model="volumn"
            />
        </el-form-item>
         <el-form-item label="亮度">
            <el-slider
                max="100"
                min="0"
                v-model="light"
            />
        </el-form-item>
        <el-form-item label="自启动">
            <el-switch
                v-model="selfStart"
                active-text="开启"
                inactive-text="关闭">
            </el-switch>
        </el-form-item>
        <el-form-item label="呼吸灯">
             <el-switch
                v-model="breath"
                active-text="开启"
                inactive-text="关闭">
            </el-switch>
        </el-form-item>
        <el-form-item label="角度">
             <el-slider
                v-model="cor"
                show-input
                max="360"
                min="0"
            />
        </el-form-item>
    </el-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      mode: 0,
      volumn: 0,
      light: 0,
      selfStart: false,
      breath: false,
      cor: 0
    }
  },
  computed: {
    ...mapGetters('device', ['modes'])
  },
  methods: {
  }
}
</script>
