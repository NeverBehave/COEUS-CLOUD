<template>
    <el-container id="initLayout">
    <el-main>
        <router-view/>
    </el-main>
    <el-footer id="footer">
        <Footer/>
    </el-footer>
    </el-container>
</template>

<script>
import Footer from '../components/Footer'
export default {
  name: 'initLayout',
  components: {
    Footer
  }
}
</script>

<style lang="sass" scoped>
#initLayout
  background: url(../assets/bg.jpg) no-repeat top center
  background-size: cover

#footer
  text-align: center
</style>
