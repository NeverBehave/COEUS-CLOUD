<template>
    <el-form>
        <el-form-item label="账户类型">
            <el-input v-model="userType" disabled></el-input>
        </el-form-item>
        <Username/>
        <el-form-item label="邮箱">
            <el-input v-model="email" disabled></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="address" disabled></el-input>
        </el-form-item>
        <PhoneNumber/>
        <Password/>
    </el-form>
</template>

<script>
import Password from './Password'
import PhoneNumber from './PhoneNumber'
import Username from './Username'

import { mapGetters } from 'vuex'

export default {
  components: {
    Password,
    PhoneNumber,
    Username
  },
  computed: {
    ...mapGetters('user', ['email', 'address', 'userType'])
  },
  methods: {
  }
}
</script>
