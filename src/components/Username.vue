<template>
    <el-dropdown class="header-right">
        <div>
            <span>
                <i class="el-icon-user admin-icon"/>
            </span>
            <span>
                {{ username }}， 欢迎！
                <i
                    class="el-icon-setting"
                    style="margin-right: 15px"
                />
            </span>
        </div>
        <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                    @click.native="userInfo"
                >
                    <font-awesome-icon
                        icon="user"
                    />
                    用户信息
                </el-dropdown-item>
            <el-dropdown-item
            >
                <font-awesome-icon
                    icon="question"
                />
                帮助
            </el-dropdown-item>
            <el-dropdown-item
                @click.native="logout"
                divided
            >
                <font-awesome-icon
                    icon="sign-out-alt"
                />
                退出
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: { ...mapGetters('user', ['username']) },
  methods: {
    ...mapActions('user', ['getMe']),
    logout () {
      this.$router.push({ name: 'Logout' })
    },
    userInfo () {
      this.$router.push({ name: 'UserInfo' })
    }
  },
  mounted () {
    this.getMe()
  }
}
</script>

<style lang="sass" scoped>
.admin-icon
    border-radius: 50%
    border: 2px solid rgba(0, 0, 0, 0.8)
    margin-right: 10px
    margin-top: 8px
    float: left
    font-size: 40px

.header-right
    margin-left: auto
</style>
