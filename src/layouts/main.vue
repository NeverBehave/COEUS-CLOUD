<template>
     <el-container>
        <transition name="move-in">
            <SideBar v-if="!isHideSideBar" />
        </transition>

        <div style="width: 100%">
            <Header
                @headTigger="tiggerHeadbar"
            />

            <el-main>
                <router-view/>
            </el-main>

              <el-footer id="footer">
                <Footer/>
            </el-footer>
        </div>
    </el-container>
</template>

<script>
import Header from '@/components/HeaderBar'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'initLayout',
  components: {
    Footer,
    Header,
    SideBar
  },
  data () {
    return {
      isHideSideBar: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isLogin'])
  },
  watch: {
    isLogin (value) {
      if (!value) {
        this.$router.push({ name: 'Login' })
      }
    }
  },
  mounted () {
    if (window.innerWidth < 767) {
      this.tiggerHeadbar()
    }
  },
  methods: {
    tiggerHeadbar () {
      this.isHideSideBar = !this.isHideSideBar
    }
  }
}
</script>

<style lang="sass" scoped>
// #mainLayout
//   background: url(../assets/bg.jpg) no-repeat top center
//   background-size: cover

#footer
  text-align: center
  background-color: #b3c0d1

.move-in-enter-active, .move-in-leave-active
    transition: 0.5s
    opacity: 1

.move-in-enter, .move-in-leave-to
    opacity: 0

</style>
