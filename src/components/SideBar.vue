<template>
    <el-aside
        width="200px"
        style="background-color: rgb(238, 241, 246)"
    >
        <el-menu :default-openeds="['1', '3']">
            <router-link
                :to="{'name': 'Dashboard'}"
            >
                <el-menu-item
                    index="home"
                >
                    <Logo/>
                </el-menu-item>
            </router-link>


             <router-link
                :to="{'name': 'Dashboard'}"
            >
                <el-menu-item
                    index="index"
                >
                    <font-awesome-icon
                        icon="home"
                    />
                    首页
                </el-menu-item>
            </router-link>

            <el-submenu index="1">
                <template slot="title">
                    <font-awesome-icon
                        slot="prefix"
                        icon="desktop"
                    /> 设备管理
                </template>
                <el-menu-item-group>
                    <router-link
                        :to="{'name': 'DeviceList'}"
                    >
                        <el-menu-item index="1-1">
                            <font-awesome-icon
                                icon="clipboard-list"
                            />
                            设备列表
                        </el-menu-item>
                    </router-link>
                    <router-link
                        :to="{'name': 'DeviceControl'}"
                    >
                        <el-menu-item index="1-2">
                            <font-awesome-icon
                                icon="cube"
                            />
                            设备控制台
                        </el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <font-awesome-icon
                        slot="prefix"
                        icon="camera"
                    /> 素材管理
                </template>
                <el-menu-item-group>
                    <router-link
                        :to="{'name': 'MaterialList'}"
                    >
                        <el-menu-item index="2-1">
                            <font-awesome-icon
                                icon="th-list"
                            />
                            素材列表
                        </el-menu-item>
                    </router-link>
                    <router-link
                        :to="{'name': 'MaterialGroup'}"
                    >
                        <el-menu-item index="2-2">
                            <font-awesome-icon
                                icon="layer-group"
                            />
                            分组管理
                        </el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title">
                    <font-awesome-icon
                        slot="prefix"
                        icon="tasks"
                    /> 任务列表
                </template>
                <el-menu-item-group>
                    <router-link
                        :to="{'name': 'NewTask'}"
                    >
                        <el-menu-item index="3-1">
                            <font-awesome-icon
                                icon="tachometer-alt"
                            />
                            新增任务
                        </el-menu-item>
                    </router-link>
                    <router-link
                        :to="{'name': 'TaskList'}"
                    >
                        <el-menu-item index="3-2">
                            <font-awesome-icon
                                icon="list-ol"
                            />
                            任务列表
                        </el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
            
            <router-link
                :to="{'name': 'AdminIndex'}"
            >
                <el-menu-item
                    v-if="profile.isAdmin"
                    index="admin"
                >
                    <font-awesome-icon
                        icon="user-shield"
                    />
                    管理面板
                </el-menu-item>
            </router-link>
        </el-menu>
    </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './logo'

export default {
    components: {
        Logo
    },
    computed: {
        ...mapGetters('user', ['profile']),
    },
}
</script>


<style lang="sass">
.el-aside 
    color: #333
</style>

<style lang="sass" scoped>
a
    text-decoration: none

</style>
