<template>
    <div>
        <el-row
            type="flex"
            class="row-bg"
            justify="space-around"
        >
            <el-col>
                <div class="grid-content full-width">
                    <Carousel/>
                </div>
            </el-col>
        </el-row>
        <el-row
            type="flex"
            class="row-bg"
            justify="space-around"
        >
            <el-col>
                <Devices/>
            </el-col>
            <el-col>
                <Material/>
            </el-col>
            <el-col>
                <Share/>
            </el-col>
            <el-col>
                <Tasks/>
            </el-col>
        </el-row>
        <el-row>
            <div>
              <el-divider>实时报表</el-divider>
            </div>
        </el-row>
        <el-row
            type="flex"
            class="row-bg"
            justify="space-around"
        >
            <el-col>
                <DeviceUsage/>
            </el-col>
            <el-col>
                <MaterialUsage/>
            </el-col>
            <el-col>
                <TaskUsage/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Devices from '../components/Cards/Devices'
import Material from '../components/Cards/Material'
import Share from '../components/Cards/Share'
import Tasks from '../components/Cards/Tasks'

import DeviceUsage from '../components/Cards/DeviceUsage'
import MaterialUsage from '../components/Cards/MaterialUsage'
import TaskUsage from '../components/Cards/TaskUsage'

import Carousel from '../components/Carousel'
export default {
  name: 'Dashboard',
  components: {
    Carousel,
    Devices,
    Material,
    Share,
    Tasks,
    DeviceUsage,
    MaterialUsage,
    TaskUsage
  }
}
</script>

<style lang="sass">
#form-footer
    display: flex
    padding-top: 12px

#form-footer a
    color: white
    text-decoration: none

#form-footer__right
    margin-left: auto
</style>
