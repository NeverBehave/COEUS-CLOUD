<template>
    <div id="logout-model">
        <el-card>
            <img src="@/assets/logo.png" alt="logo" class="logo">
            <h3 class="center">
                Coeus云端平台
            </h3>
            <p>您已安全登出系统</p>
        </el-card>
        <div id="form-footer">
            <router-link
                id="form-footer__left"
                :to="{ name: 'Login' }"
            >
                登陆
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
#logout-model
    margin-top: 15vh
    height: 100px

.logo
    display: block
    margin-left: auto
    margin-right: auto
    width: 50%
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LogoutCard',
  mounted () {
    this.logout().then(res => {

    }).catch(err => {

    }).finally(() => {

    })
  },
  methods: {
    ...mapActions('auth', ['logout'])
  }
}
</script>
