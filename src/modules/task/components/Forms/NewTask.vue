<template>
    <div>
        <el-form
            ref="taskForm"
            :rules="rules"
            :model="form"
            auto-complete="on"
            label-position="left"
            abel-width="0px"
            status-icon
        >
            <el-form-item prop="deviceId" label="设备编号">
              <OnlineDevices
                :selectedDevice.sync="device"
              />
            </el-form-item>
            <el-form-item label="任务名" prop="taskName">
                <el-input
                    v-model="form.taskName"
                    placeholder="任务名称"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="tachometer-alt"
                        class="font-awesome-element-input-icon"
                    />
                </el-input>
            </el-form-item>
            <el-form-item prop="type" label="操作类型">
                <el-select v-model="form.type" clearable placeholder="请选择">
                    <el-option
                    v-for="item in getTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
             <el-form-item
                v-if="form.type === 3"
                label="定时播放"
                prop="play_num"
                :rules="[
                {
                  required: true, message: '此项不能为空', trigger: 'blur'
                }]"
              >
                <el-input-number
                    v-model="form.play_num"
                    :min="0"
                    :max="255"
                    label="定时播放"
                    >
                </el-input-number>
              </el-form-item>
             <el-form-item prop="description" label="备注">
                <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="form.description">
                </el-input>
             </el-form-item>
             <el-form-item prop="cron" label="执行时间">
                 <el-popover v-model="cronPopover">
                    <vueCron @change="changeCron"
                             @close="cronPopover=false"
                             i18n="cn"
                    ></vueCron>
                    <el-input slot="reference"
                              @click="cronPopover=true"
                              v-model="form.cron"
                              placeholder="请输入定时策略"
                    ></el-input>
                </el-popover>
             </el-form-item>
             <el-form-item prop="description" label="是否启用">
                    <el-radio-group v-model="form.enable">
                        <el-radio :label="1">启用</el-radio>
                        <el-radio :label="0">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>
            <el-form-item class="center">
                <el-button
                    :loading="submitting"
                    type="success"
                    @click="submitTask"
                >
                    提交
                </el-button>
                 <el-button
                    :loading="submitting"
                    type="primary"
                    @click="runNow"
                >
                    立即执行
                </el-button>
                <el-button
                    type="danger"
                    :loading="submitting"
                    @click.native="$refs.taskForm.resetFields()"
                >
                    清空表单
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import OnlineDevices from '@/modules/device/components/Options/OnlineDevices'

import { mapActions, mapGetters } from 'vuex'

import submit from '@/mixins/loading/submit'

export default {
  mixins: [submit],
  components: {
    OnlineDevices
  },
  data () {
    return {
      cronPopover: false,
      device: null,
      form: {
        play_num: 0,
        deviceId: '',
        taskName: '',
        type: '',
        description: '',
        cron: '',
        enable: 0
      },
      rules: {
        taskName: [
          { required: true, message: '请输入任务名称' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        deviceId: [
          { required: true, message: '请选择设备' }
        ],
        type: [
          { required: true, message: '请选择类型' }
        ],
        cron: [
          { required: true, message: '请输入执行时间' }
        ]
      }
    }
  },
  watch: {
    device (value) {
      if (value) {
        this.form.deviceId = value.id
      }
    }
  },
  computed: {
    ...mapGetters('task', ['getTypes'])
  },
  methods: {
    ...mapActions('task', ['newTask']),
    submitTask () {
      this.$refs.taskForm.validate(vaild => {
        this.startSubmit()
        if (vaild) {
          return this.newTask(this.form).then(data => {
            this.$notify({
              title: '提交成功',
              message: '您可以继续提交新任务',
              type: 'success'
            })
          }).catch(err => {
            const { data } = err

            this.$notify({
              title: '操作失败',
              message: data.msg,
              type: 'error'
            })
          }).finally(() => {
            this.endSubmit()
          })
        }
      })
    },
    changeCron (val) {
      // Since backend only accept two parameters, ignore the year field.
      this.form.cron = val.substring(0, val.length - 2)
    },
    runNow () {

    }
  }
}
</script>
