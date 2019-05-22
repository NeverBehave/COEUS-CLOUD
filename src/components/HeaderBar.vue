<template>
    <el-header class="header-wapper">
        <font-awesome-icon
            class="header-trigger"
            icon="bars"
            @click="$emit('headTigger')"
        />
        <Notification/>
        <el-dropdown class="header-right">
            <div>
                <span>
                    <i class="el-icon-user admin-icon"/>
                </span>
                <span>
                    {{ username ? username : "Unknown" }}， 欢迎！
                    <i
                        class="el-icon-setting"
                        style="margin-right: 15px"
                    />
                </span>
            </div>
            <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                        @click="userInfo"
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
                    @click="logout"
                    divided
                >
                    <font-awesome-icon
                        icon="sign-out-alt"
                    />
                    退出
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-header>
</template>

<script>
import Notification from './Notification'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Notification
  },
  computed: { ...mapGetters('user', ['username']) },
  methods: {
    logout () {
      this.$router.push({ name: 'Logout' })
    },
    userInfo () {
      this.$router.push({ name: 'UserInfo' })
    }
  }
}
</script>

<style lang="sass">
.el-header
    background-color: #b3c0d1
    color: #333
    line-height: 60px

.admin-icon
    border-radius: 50%
    border: 2px solid rgba(0, 0, 0, 0.8)
    margin-right: 10px
    margin-top: 8px
    float: left
    font-size: 40px

.header-wapper
    display: flex
    width: 100%

.header-right
    margin-left: auto

.header-trigger
    cursor: pointer
    margin: auto 0

</style>
