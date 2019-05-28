<template>
    <div>
        <el-row
          :gutter="10"
        >
            <el-col>
                <OnlineDeviceCard
                    :selectedDevice.sync="selectedDevice"/>
            </el-col>
        </el-row>
        <el-divider/>
        <el-row
          :gutter="10"
        >
            <el-col
              :xs="24"
              :lg="12"
            >
                <DevicePlayListCard/>
            </el-col>
            <el-col
              :xs="24"
              :lg="12"
            >
                <DeviceSettingCard
                    :device="selectedDevice"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import DeviceSettingCard from '../components/Cards/DeviceSetting'
import DevicePlayListCard from '../components/Cards/DevicePlayList'
import OnlineDeviceCard from '../components/Cards/OnlineDevices'

export default {
  components: {
    DeviceSettingCard,
    DevicePlayListCard,
    OnlineDeviceCard
  },
  data () {
    return {
      selectedDevice: null
    }
  }
}
</script>
