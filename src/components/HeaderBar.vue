<template>
    <el-header class="header-wapper">
        <font-awesome-icon
            class="header-trigger"
            icon="bars"
            @click="$emit('headTigger')"
        />
        <Notification/>
        <Username/>
    </el-header>
</template>

<script>
import Notification from './Notification'
import Username from './Username'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Notification,
    Username
  }
}
</script>

<style lang="sass">
.el-header
    background-color: #b3c0d1
    color: #333
    line-height: 60px

.header-wapper
    display: flex
    width: 100%

.header-trigger
    cursor: pointer
    margin: auto 0

</style>
