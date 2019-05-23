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
            <el-form-item prop="email">
                <el-input
                    v-model="form.email"
                    placeholder="用户名"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="at"
                        class="font-awesome-element-input-icon"
                    />
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="form.password"
                    placeholder="密码"
                    type="password"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="key"
                        class="font-awesome-element-input-icon"
                    />
                </el-input>
            </el-form-item>
            <el-form-item class="center">
                <el-button
                    :loading="submitting"
                    type="primary"
                    @click="loginUser"
                >
                    提交
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import submit from '@/mixins/loading/submit'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 8, max: 13, message: '长度在 8 到 13 个字符', trigger: 'blur' }
        ]
      },
      isLoading: false
    }
  },
  mixins: [submit],
  computed: {

  },
  mounted () {
  },
  methods: {
    ...mapActions('auth', ['login']),
    loginUser () {
      this.startSubmit()
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          return this.login(this.form).then(data => {
            this.$notify({
              title: '登陆成功',
              message: '即将重定向到面板',
              type: 'success'
            })

            setTimeout(() => this.$router.push({ name: 'Dashboard' }), 2000)
          }).catch(err => {
            let { data } = err.response
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
    }
  }
}
</script>
