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
                    placeholder="请输入邮箱"
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
                    placeholder="请输入密码"
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
import { login } from '@/api/auth'
import { Loading } from 'element-ui'
let loading

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ]
      },
      isLoading: false
    }
  },
  computed: {
    ...mapGetters('user', ['profile'])
  },
  mounted () {
    const { token } = this.$route.query

    if (!token || token === '') {
      return
    }

    this.login(token)
    loading = Loading.service({ fullscreen: true })

    const func = async () => {
      await this.getMe()
      this.$router.push({ name: 'DashboardHome' })

      loading.close()
    }

    func()
  },
  methods: {
    ...mapActions('user', ['login', 'getMe']),
    async gotoOAuth () {
      const redirectUrl = await getOAuthLink()

      this.setOAuthWithLogin(true)
      window.location.href = redirectUrl
    },
    async loginUser () {
      this.isLoading = true
      this.$refs.loginForm.validate(vaild => {
        if (vaild) {
          return true
          return login(this.form).then(data => {
            this.$notify({
              title: '登陆成功',
              message: '即将重定向到用户面板',
              type: 'success'
            })
            this.login(data.data.token)
            setTimeout(() => this.$router.push({ name: 'DashboardHome' }), 2000)
            this.isLoading = false
          }).catch(err => {
            const { data, status } = err.response

            if (status === 422) {
              this.$notify({
                title: '验证失败',
                message: data.messages[0].message,
                type: 'error'
              })
            }

            if (data.errorType === 'NotFound') {
              // User exsit
              this.$notify({
                title: '登陆失败',
                message: '找不到此用户',
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
