<template>
    <el-tooltip 
    v-if="device.runState === '0'"
    effect="dark" 
    content="启动" 
    placement="top"
>
        <el-button 
        type="primary" 
        circle
        @click="start"
        :disabled="offline"
        >
            <font-awesome-icon
            icon="power-off"
            />
        </el-button>
    </el-tooltip>
    <el-tooltip 
    v-else
    effect="dark" 
    content="关闭" 
    placement="top"
    >
        <el-button 
        type="warning" 
        circle
        @click="stop"
        :disabled="offline"
        >
            <font-awesome-icon
            icon="power-off"
            />
        </el-button>
    </el-tooltip>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        device: {
            type: Object,
            required: true
        }
    },
    computed: {
        offline() {
            return this.device.isOnline === "0"
        }
    },
    methods: {
         ...mapActions('device', ['deviceStart', 'deviceStop', 'refresh']),
        start() {
         this.deviceStart(this.device.id)
            .then(() => {
                this.$message.success('启动成功！')
                this.refresh()
            })
            .catch(() => {
                this.$message.error('启动失败！')
            })
        },
        stop() {
        this.deviceStop(this.device.id)
            .then(() => {
                this.$message.success('关闭成功！')
                this.refresh()
            })
            .catch(() => {
                this.$message.error('关闭失败！')
            })
        }
    }
}
</script>
