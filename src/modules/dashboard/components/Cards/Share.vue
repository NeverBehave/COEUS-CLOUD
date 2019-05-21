<template>
    <el-card shadow="hover" class="device-card">
        <div slot="header">
            <span>共享总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ ShareNumber }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="share-alt"
            />
            <span class="font">{{ CurrentSharing }}</span>
        </div>
        <el-divider></el-divider>
        <div class="card-down">
            <font-awesome-icon
                icon="caret-up"
            />
            正在使用共享
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            ShareNumber: 10,
            CurrentSharing: 4
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
