<template>
    <div>
        <el-form
            ref="loginForm"
            :rules="rules"
            :model="form"
            auto-complete="on"
            label-position="left"
            abel-width="0px"
            class="card-box"
            status-icon
        >
            <el-form-item prop="deviceName" label="设备名称">
                <el-select v-model="form.deviceName" clearable placeholder="请选择">
                    <el-option
                    v-for="item in getDevices"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="任务名" prop="email">
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
                    <vueCron @change="changeCron" @close="cronPopover=false"></vueCron>
                    <el-input slot="reference" @click="cronPopover=true" v-model="form.cron" placeholder="请输入定时策略"></el-input>
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
                    :loading="isLoading"
                    type="success"
                    @click="submitTask"
                >
                    提交
                </el-button>
                 <el-button
                    :loading="isLoading"
                    type="primary"
                    @click="runNow"
                >
                    立即执行
                </el-button>
                <el-button
                    :loading="isLoading"
                    type="danger"
                    @click="resetForm"
                >
                    清空表单
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { login as loginAPI } from '@/api/auth'

export default {
  data () {
    return {
      cronPopover: false,
      form: {
        deviceName: '',
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
        deviceName: [
          { required: true, message: '请选择设备' }
        ],
        type: [
          { required: true, message: '请选择类型' }
        ],
        cron: [
          { required: true, message: '请输入执行时间' }
        ]
      },
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('device', ['getDevices']),
    ...mapGetters('task', ['getTypes'])
  },
  mounted () {
  },
  methods: {
    async submitTask () {
      this.isLoading = true
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          return loginAPI(this.form).then(data => {
            this.$notify({
              title: '提交成功',
              message: '您可以继续提交新任务',
              type: 'success'
            })
            setTimeout(() => this.$router.push({ name: 'Dashboard' }), 2000)
            this.isLoading = false
          }).catch(err => {
            const { data } = err.response
            const code = data.code

            if (code === '303') {
              this.$notify({
                title: '验证失败',
                message: data.msg,
                type: 'error'
              })
            }

            this.isLoading = false
          })
        }
        this.isLoading = false
        return false
      })
    },
    changeCron (val) {
      this.form.cron = val
    },
    resetForm () {

    },
    runNow () {
      this.isLoading = true
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          return loginAPI(this.form).then(data => {
            this.$notify({
              title: '提交成功',
              message: '您可以继续提交新任务',
              type: 'success'
            })
            setTimeout(() => this.$router.push({ name: 'Dashboard' }), 2000)
            this.isLoading = false
          }).catch(err => {
            const { data } = err.response
            const code = data.code

            if (code === '303') {
              this.$notify({
                title: '验证失败',
                message: data.msg,
                type: 'error'
              })
            }

            this.isLoading = false
          })
        }
        this.isLoading = false
        return false
      })
    }
  }
}
</script>
