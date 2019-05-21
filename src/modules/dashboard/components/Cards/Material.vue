<template>
    <el-card shadow="hover" class="device-card">
        <div slot="header">
            <span>素材总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ MaterialNumber }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="check-circle"
            />
            <span class="font">{{ PassedMaterialNumber }}</span>
        </div>
        <el-divider></el-divider>
        <div class="card-down">
            <font-awesome-icon
                icon="caret-up"
            />
            审核通过
        </div>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            MaterialNumber: 100,
            PassedMaterialNumber: 92
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
