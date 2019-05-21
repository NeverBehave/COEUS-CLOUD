<template>
    <el-header class="header-wapper">
        <font-awesome-icon
            class="header-trigger"
            icon="bars"
            @click="$emit('headTigger')"
        />
        <Notification/>
        <el-dropdown class="header-right">
            <span>
                {{ profile.username ? profile.username : "Unknown" }}， 欢迎！ 
                <i
                    class="el-icon-setting"
                    style="margin-right: 15px"
                />
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                    :to="{name: 'UserInfo'}"
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
                    @click.native="logoutUser"
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
    computed: { ...mapGetters('user', ['profile']) },
    methods: {
        ...mapActions('auth', ['logout']),
        logoutUser() {
            this.logout()
            this.$router.push({name: 'Login'})
        },
    },
}
</script>


<style lang="sass">
.item
  margin-left: 20px
  margin-right: 40px

.el-header 
    background-color: #b3c0d1
    color: #333
    line-height: 60px

.header-wapper 
    display: flex
    width: 100%

.header-right 
    margin-left: auto

.header-trigger 
    cursor: pointer
    margin: auto 0

</style>
