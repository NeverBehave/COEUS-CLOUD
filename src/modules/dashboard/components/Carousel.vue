<template>
  <el-carousel>
    <el-carousel-item v-for="image in getImages" :key="image">
        <el-image 
        style="width: 100%"
        fits="cover" 
        :src="image"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('dashboard', ['getImages'])
    }
}
</script>


<style lang="sass">
.el-carousel__item:nth-child(2n)
    background-color: #99a9bf

.el-carousel__item:nth-child(2n+1)
    background-color: #d3dce6
</style>
