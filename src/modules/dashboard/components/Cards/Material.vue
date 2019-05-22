<template>
    <el-card shadow="hover">
        <div slot="header">
            <span>素材总数</span>
            <el-button style="float: right; padding: 3px 0; font-size:15px" type="text">{{ resourceNum }}</el-button>
        </div>
        <div class="box">
            <font-awesome-icon
                class="left"
                icon="check-circle"
            />
            <span class="font">{{ passedResourceNum }}</span>
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
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('dashboard', ['resourceNum', 'passedResourceNum'])
    }
}
</script>


<style lang="sass" scoped>
.card-down
    text-align: center
</style>
