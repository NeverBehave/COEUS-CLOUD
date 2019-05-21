<template>
    <el-card shadow="hover" class="device-card">
        <div slot="header">
            <span>任务总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ TaskNumber }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="tachometer-alt"
            />
            <span class="font">{{ NowRunningNumber }}</span>
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
export default {
    data() {
        return {
            TaskNumber: 100,
            NowRunningNumber: 23
        }
    }
}
</script>


<style lang="sass" scoped>
// .device-card
//     border-color: red
//     border-width: 3px

.card-down
    text-align: center
</style>
