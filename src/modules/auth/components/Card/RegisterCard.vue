<template>
    <div id="register-model">
        <el-card class="box-card">
            <h3 class="center">
                注册
            </h3>
            <register-form />
        </el-card>
        <div id="form-footer">
            <router-link
                id="form-footer__left"
                :to="{ name: 'Login' }"
            >
                登录
            </router-link>
            <router-link
                id="form-footer__right"
                :to="{ name: 'PasswordReset' }"
            >
                忘记密码
            </router-link>
        </div>
    </div>
</template>

<script>
import RegisterForm from '../Form/RegisterForm'

export default {
  components: { RegisterForm }
}
</script>

<style lang="sass" scoped>
#register-model
    margin-top: 15vh
    height: 100px
</style>
