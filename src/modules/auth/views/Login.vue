<template>
<div>
    <a-row>
        <a-col id="top-row"></a-col>
    </a-row>
    <a-row>
         <a-col :span="6" :offset="15">
             <LoginCard/>
         </a-col>
    </a-row>
</div>
</template>

<script>
import LoginCard from '../components/Card/LoginCard'

export default {
    name: 'Login',
    components: {
        LoginCard
    }
}
</script>

<style lang="sass" scoped>
#top-row
    height: 100px
</style>
