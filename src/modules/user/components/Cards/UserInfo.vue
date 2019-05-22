<template>
    <el-card>
        <div slot="header">
            <span>用户信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要帮助？</el-button>
        </div>
        <UserInfoForm/>
    </el-card>
</template>

<script>
import UserInfoForm from '../Forms/UserInfo'

export default {
    components: {
        UserInfoForm
    }
}
</script>
