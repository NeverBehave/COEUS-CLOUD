<template>
    <div id="login-model">
        <el-card class="box-card">
            <img src="@/assets/logo.png" alt="logo" class="logo">
            <h3 class="center">
                Coeus云端平台
            </h3>
            <LoginForm/>
        </el-card>
        <div id="form-footer">
            <router-link
                id="form-footer__left"
                :to="{ name: 'Register' }"
            >
                注册账户
            </router-link>
            <router-link
                id="form-footer__right"
                :to="{name: 'PasswordReset'}"
            >
                忘记密码
            </router-link>
        </div>
    </div>
</template>

<style lang="sass">
#login-model
    margin-top: 15vh
    height: 100px

.logo
    display: block
    margin-left: auto
    margin-right: auto
    width: 50%
</style>

<script>
import LoginForm from '../Form/LoginForm'
export default {
  name: 'LoginCard',
  components: {
    LoginForm
  }
}
</script>
