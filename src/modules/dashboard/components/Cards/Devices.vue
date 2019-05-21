<template>
    <el-card shadow="hover" class="device-card">
        <div slot="header">
            <span>设备总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ DeviceNumber }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="desktop"
            />
            <span class="font">{{ CurrentDeviceNumber }}</span>
        </div>
        <el-divider></el-divider>
        <div class="card-down">
            <font-awesome-icon
                icon="caret-up"
            />
            当前在线设备数
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            DeviceNumber: 11,
            CurrentDeviceNumber: 3
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
