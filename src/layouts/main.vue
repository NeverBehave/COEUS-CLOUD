<template>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer id="footer">
                <Footer/>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import Footer from '../components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'initLayout',
  components: {
    Footer
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
  }
}
</script>

<style lang="sass" scoped>
// #mainLayout
//   background: url(../assets/bg.jpg) no-repeat top center
//   background-size: cover

#footer
  text-align: center
</style>
