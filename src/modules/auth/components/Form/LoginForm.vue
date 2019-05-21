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
                    :loading="isLoading"
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
import { mapActions, mapGetters } from 'vuex'
import { login as loginAPI } from '@/api/auth'

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
  computed: {

  },
  mounted () {
  },
  methods: {
    ...mapActions('auth', ['isLogin']),
    async loginUser () {
      this.isLoading = true
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          return loginAPI(this.form).then(data => {
            this.$notify({
              title: '登陆成功',
              message: '即将重定向到面板',
              type: 'success'
            })
            this.isLogin(true)
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
