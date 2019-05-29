<template>
    <el-form ref="deviceSettingForm" label-width="80px">
        <el-form-item label="模式切换">
            <el-select
                v-model="mode"
                placeholder="请选择"
                :disabled="submitting"
            >
                <el-option
                    v-for="item in modes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="音量">
            <Volumn/>
        </el-form-item>
         <el-form-item label="亮度">
             <Light/>
        </el-form-item>
        <el-form-item label="自动启动">
            <el-switch
                v-model="autoStart"
                active-text="开启"
                inactive-text="关闭"
                active-value="1"
                inactive-value="0"
                :disabled="submitting"
            />
        </el-form-item>
        <el-form-item label="呼吸灯">
             <el-switch
                v-model="breath"
                active-text="开启"
                inactive-text="关闭"
                active-value="1"
                inactive-value="0"
                :disabled="submitting"
            />
        </el-form-item>
        <el-form-item label="角度">
            <Angle/>
        </el-form-item>
    </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import submit from '@/mixins/loading/submit'

import Angle from '../Sliders/Angle'
import Light from '../Sliders/Light'
import Volumn from '../Sliders/Volumn'

export default {
  mixins: [submit],
  components: {
    Angle,
    Light,
    Volumn
  },
  mounted () {
    this.applyDevice()
  },
  watch: {
    device () {
      this.applyDevice()
    }
  },
  computed: {
    ...mapGetters('device', {
      modes: 'modes',
      device: 'deviceControlSelected',
      setting: 'deviceSetting'
    }),
    id () {
      if (this.device) {
        return this.device.id
      }
      return null
    },
    mode: {
      get () {
        return this.setting.mode
      },
      set (value) {
        this.startSubmit()
        this.deviceMode({
          id: this.id,
          value
        }).catch(() => {
          this.$message.error('更新失败！请重试')
        }).finally(() => this.endSubmit())
      }
    },
    autoStart: {
      get () {
        return this.setting.autoStart
      },
      set (value) {
        this.startSubmit()
        this.deviceAutoStart({
          id: this.id,
          value
        }).catch(() => {
          this.$message.error('更新失败！请重试')
        }).finally(() => this.endSubmit())
      }
    },
    breath: {
      get () {
        return this.setting.breath
      },
      set (value) {
        this.startSubmit()
        this.deviceBreath({
          id: this.id,
          value
        }).catch(() => {
          this.$message.error('更新失败！请重试')
        }).finally(() => this.endSubmit())
      }

    }
  },
  methods: {
    ...mapActions('device', [
      'deviceSetting',
      'deviceLight',
      'deviceVolumn',
      'deviceAngle',
      'deviceAutoStart',
      'deviceBreath',
      'deviceMode'
    ]),
    applyDevice () {
      if (this.id) {
        this.deviceSetting(this.id)
          .then(res => {
            this.$message('设备设置获取成功！')
          }).catch(() => {
            this.$message('设备信息获取失败！')
          })
      } else {
        this.$message('设备信息无效！')
      }
    }
  }
}
</script>
