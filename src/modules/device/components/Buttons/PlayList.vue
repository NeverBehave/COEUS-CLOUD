<template>
        <el-tooltip
        v-if="!playing"
        effect="dark"
        content="播放"
        placement="top"
    >
        <el-button
        circle
        @click="play"
        >
            <font-awesome-icon
            icon="play"
            />
        </el-button>
        </el-tooltip>
        <el-tooltip
        v-else
        effect="dark"
        content="暂停"
        placement="top"
    >
        <el-button
        circle
        @click="pause"
        >
            <font-awesome-icon
            icon="pause"
            />
        </el-button>
        </el-tooltip>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    deviceId: {
      type: String,
      required: true
    },
    playItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      playing: false
    }
  },
  computed: {
    ...mapGetters('device', {
      id: 'deviceControlId',
      playList: 'devicePlayList'
    })
  },
  methods: {
    ...mapActions('device', ['deviceControlPlay', 'deviceControlPause']),
    play () {
      this.deviceControlPlay({
        id: this.id,
        position: this.playItem.sort
      })
        .then(() => {
          this.$message.success('播放成功！')
          this.playing = true
        })
        .catch(() => {
          this.$message.error('播放失败！')
        })
    },
    pause () {
      this.deviceControlPause({
        id: this.id,
        position: this.playItem.sort
      })
        .then(() => {
          this.$message.success('暂停成功！')
          this.playing = false
        })
        .catch(() => {
          this.$message.error('暂停失败！')
        })
    }
  }
}
</script>
