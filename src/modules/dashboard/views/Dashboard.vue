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
        </el-row>
    </div>
</template>

<script>
import Devices from '../components/Cards/Devices'
import Material from '../components/Cards/Material'
import Share from '../components/Cards/Share'
import Tasks from '../components/Cards/Tasks'

import Carousel from '../components/Carousel'
export default {
  name: 'Dashboard',
  components: {
    Carousel,
    Devices,
    Material,
    Share,
    Tasks
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
