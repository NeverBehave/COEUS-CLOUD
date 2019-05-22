<template>
    <div>
        <el-row>
            <el-col>
                <div class="grid-content full-width">
                    <Carousel/>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div>
              <el-divider>数据统计</el-divider>
            </div>
        </el-row>
        <el-row
            :gutter="10"
        >
            <el-col
                :xs="row1.xs"
                :sm="row1.sm"
                :md="row1.md"
                :lg="row1.lg"
                :xl="row1.xl"
            >
                <Devices/>
            </el-col>
            <el-col
                :xs="row1.xs"
                :sm="row1.sm"
                :md="row1.md"
                :lg="row1.lg"
                :xl="row1.xl"
            >
                <Material/>
            </el-col>
            <el-col
                :xs="row1.xs"
                :sm="row1.sm"
                :md="row1.md"
                :lg="row1.lg"
                :xl="row1.xl"
            >
                <Share/>
            </el-col>
            <el-col
                :xs="row1.xs"
                :sm="row1.sm"
                :md="row1.md"
                :lg="row1.lg"
                :xl="row1.xl"
            >
                <Tasks/>
            </el-col>
        </el-row>
        <el-row>
            <div>
              <el-divider>实时报表</el-divider>
            </div>
        </el-row>
        <el-row
            :gutter="10"
        >
            <el-col
                :xs="row2.xs"
                :sm="row2.sm"
                :md="row2.md"
                :lg="row2.lg"
                :xl="row2.xl"
            >
                <DeviceUsage/>
            </el-col>
            <el-col
                :xs="row2.xs"
                :sm="row2.sm"
                :md="row2.md"
                :lg="row2.lg"
                :xl="row2.xl"
            >
                <MaterialUsage/>
            </el-col>
            <el-col
                :xs="row2.xs"
                :sm="row2.sm"
                :md="row2.md"
                :lg="row2.lg"
                :xl="row2.xl"
            >
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

import { mapActions } from 'vuex'

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
  },
  data () {
    return {
      row1: {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        xl: 6
      },
      row2: {
        xs: 24,
        sm: 24,
        md: 16,
        lg: 8,
        xl: 8
      },
      loading: this.$loading({ fullscreen: true })
    }
  },
  methods: {
    ...mapActions('dashboard', ['updateStatus'])
  },
  mounted () {
    this.updateStatus().then(res => {
      // Do Nothing
    }).catch(err => {
      console.log(err)
      this.$message.error(err.response.data.msg)
    }).finally(() => {
      this.loading.close()
    })
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

// For Boxes, @TODO
.box
    letter-spacing: -3px
    position: relative
    text-align: center
    border-radius: 3px
    font: 5em "Open Sans"
    margin: -25px auto 0px

.left
    font-size: 25px
    margin-right: 20px
    position: relative

.font
    font-size: 60px
    margin-right: 10px
    position: relative
    top: 10px
</style>
