<template>
        <el-tooltip 
        v-if="device.playState === '0'"
        effect="dark" 
        content="播放" 
        placement="top"
    >
        <el-button 
        circle
        @click="play"
        :disabled="offline"
        >
            <font-awesome-icon
            icon="play"
            />
        </el-button>
        </el-tooltip>
        <el-tooltip 
        v-else
        effect="dark" 
        content="停止" 
        placement="top"
    >
        <el-button  
        circle
        @click="pause"
        :disabled="offline"
        >
            <font-awesome-icon
            icon="pause"
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
        ...mapActions('device', ['devicePlay', 'devicePause', 'refresh']),
        play () {
            this.devicePlay(this.device.id)
            .then(() => {
                this.$message.success('播放成功！')
                this.refresh()
            })
            .catch(() => {
                this.$message.error('播放失败！')
            })
        },
        pause() {
        this.devicePause(this.device.id)
            .then(() => {
                this.$message.success('暂停成功！')
                this.refresh()
            })
            .catch(() => {
                this.$message.error('暂停失败！')
            })
        }
    }
}
</script>
