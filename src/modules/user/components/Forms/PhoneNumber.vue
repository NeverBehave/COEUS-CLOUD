<template>
     <el-form :inline="true">
            <el-form-item label="手机号码">
                <el-input v-model="phone" placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="changePhoneNumber">更改</el-button>
            </el-form-item>
    </el-form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapGetters('user', {
            getPhone: 'phone'
        }),
        phone: {
            get() {
                return this.getPhone
            },
            set(value) {
                this.commitPhone(value)
            }
        }
    },
    methods: {
        ...mapActions('user', ['updatePhone']),
        ...mapMutations('user', {
            commitPhone: 'phone'
        }),
        changePhoneNumber () {
            this.$message.error('尚未实现')
        }
    }
}
</script>
