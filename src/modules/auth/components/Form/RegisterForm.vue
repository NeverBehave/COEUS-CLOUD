<template>
    <div>
        <el-form
            ref="registerForm"
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
            <el-form-item prop="username">
                <el-input
                    v-model="form.username"
                    placeholder="请输入用户名"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="user"
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
            <el-form-item prop="address">
                <el-input
                    v-model="form.address"
                    placeholder="地址"
                    type="text"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="location-arrow"
                        class="font-awesome-element-input-icon"
                    />
                </el-input>
            </el-form-item>
            <el-form-item prop="phone">
                <el-input
                    v-model="form.phone"
                    placeholder="手机号"
                    type="text"
                >
                    <font-awesome-icon
                        slot="prefix"
                        icon="phone"
                        class="font-awesome-element-input-icon"
                    />
                </el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-radio-group v-model="form.type">
                    <el-radio label="个人"></el-radio>
                    <el-radio label="企业"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item class="center">
                <el-button
                    :loading="isLoading"
                    type="primary"
                    @click="registerUser"
                >
                    提交
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { register } from '@/api/auth'
import { mapActions } from 'vuex'
import phone from 'phone'

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        username: '',
        address: '',
        phone: '',
        type: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ],
        username: [
          { required: true, message: '请输入用户名' }
        ],
        address: [
          { required: true, message: '请输入地址' }
        ],
        phone: [
          { required: true, message: '请输入手机号码' },
          { validator: this.validatePhone }
        ],
        type: [
          { required: true, message: '请选择类型' }
        ]
      },
      isLoading: false
    }
  },
  mounted () {
    // const { token } = this.$route.params

    // if (token) {
    //     this.form.inviteCode = token
    // }
  },
  methods: {
    async registerUser () {
      this.isLoading = true
      this.$refs.registerForm.validate(vaild => {
        if (vaild) {
          const postBody = this.form

          return register(postBody).then(() => {
            this.$notify({
              title: '注册成功',
              message: '即将重定向到登录页面',
              type: 'success'
            })
            setTimeout(() => this.$router.push({ name: 'Login' }), 2000)
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

            if (data.errorType === 'DupEntry') {
              // User exsit
              this.$notify({
                title: '注册失败',
                message: '用户已存在',
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
    validatePhone (rule, value, callback) {
      if (phone(value, 'CHN').length === 0) {
        callback(new Error('请输入正确的中国大陆手机号码'))
      } else {
        callback()
      }
    }
  }
}
</script>
