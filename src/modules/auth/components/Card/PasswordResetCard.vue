<template>
    <div id="reset-model">
        <el-card class="box-card">
            <img src="@/assets/logo.png" alt="logo" class="logo">
            <h3 class="center">
                Coeus云端平台
            </h3>
            <p>很抱歉，此功能尚未开放</p>
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
                :to="{ name: 'Login' }"
            >
                登录
            </router-link>
        </div>
    </div>
</template>

<style lang="sass">
#reset-model
    margin-top: 15vh
    height: 100px

.logo
    display: block
    margin-left: auto
    margin-right: auto
    width: 50%
</style>

<script>
export default {
  name: 'LoginCard',
  components: {
  }
}
</script>
