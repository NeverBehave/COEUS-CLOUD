<template>
    <el-card shadow="hover">
        <div slot="header">
            <span>任务总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ taskNum }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="tachometer-alt"
            />
            <span class="font">{{ runedTaskNum }}</span>
        </div>
        <el-divider></el-divider>
        <div class="card-down">
            <font-awesome-icon
                icon="caret-up"
            />
            正在执行
        </div>
    </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('dashboard', ['taskNum', 'runedTaskNum'])
    }
}
</script>


<style lang="sass" scoped>
.card-down
    text-align: center
</style>
