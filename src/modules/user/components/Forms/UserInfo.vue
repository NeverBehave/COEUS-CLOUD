<template>
    <el-form>
        <el-form-item label="账户类型">
            <el-input v-model="userType" disabled></el-input>
        </el-form-item>
       <el-form :inline="true">
            <el-form-item label="用户名">
                <el-input v-model="newUsername" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changeUsername">确认</el-button>
            </el-form-item>
        </el-form>
        <el-form-item label="邮箱">
            <el-input v-model="email" disabled></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="address" disabled></el-input>
        </el-form-item>
        <el-form :inline="true">
            <el-form-item label="手机号码">
                <el-input v-model="newPhone" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changePhoneNumber">确认</el-button>
            </el-form-item>
        </el-form>
        <el-form :inline="true">
            <el-form-item label="密码">
                <el-input v-model="newPassword" placeholder="新密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="changePassword">确认</el-button>
            </el-form-item>
        </el-form>
    </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            newPassword: '',
            newPhone: '',
            newUsername: '',
        }
    },
    mounted() {
        this.newPassword = this.password
        this.newUsername = this.username
        this.newPhone = this.phone
    },
    computed: {
        ...mapGetters('user', ['username', 'phone', 'email', 'address', 'userType'])
    },
    methods: {
        ...mapGetters('user', ['updateUsername']),
        changeUsername() {
            if (this.username === this.newUsername) {
                this.$message({
                    message: '新旧用户名一致',
                    type: 'warning'
                })
            } else {
                 this.updateUsername(this.newUsername).then(res => [
                     this.$message({
                         message: '更新成功',
                         type: 'success'
                     })
                 ]).catch(err => {
                     this.$message.error('更新失败，请重试')
                 })
            }
        },
        changePhoneNumber() {

        },
        changePassword() {

        }
    }
}
</script>

